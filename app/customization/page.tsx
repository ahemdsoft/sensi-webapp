'use client';
import { useState, ChangeEvent } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { UploadCloud } from "lucide-react";
import Sameproduct from "@/app/components/sameproduct";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

type BrandData = {
  [key: string]: string[];
};

const caseTypes = ["2D", "2D-Max", "3D-Hard", "Soft"];

const brandData: BrandData = {
  Apple: ["iPhone 13", "iPhone 14", "iPhone 15"],
  Samsung: ["Galaxy S21", "Galaxy S22"],
  Xiaomi: ["Mi 11", "Mi 12"],
  Redmi: ["Redmi Note 10", "Redmi Note 11"],
  Oppo: ["Reno 8", "Reno 9"],
  Oneplus: ["Oneplus 9", "Oneplus 10"],
  Vivo: ["Vivo V21", "Vivo V23"],
  Realme: ["Realme 8", "Realme 9"],
  GooglePixel: ["Pixel 6", "Pixel 7"],
  Tecno: ["Tecno Spark 7", "Tecno Pova"],
  Motorola: ["Moto G", "Moto X"],
  Poco: ["Poco X3", "Poco F3"],
  Huawei: ["P30", "P40"],
  Nokia: ["Nokia 6", "Nokia 7"],
  Honor: ["Honor 9X", "Honor 10"]
};

type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  brand: string;
  mobile: string;
  quantity: number;
};

export default function Customization() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  const { addToCart } = useCart();
  const router = useRouter();

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const submitFormAndCreateCartItem = async (): Promise<CartItem | null> => {
    if (!selectedBrand || !selectedModel || !selectedType || !image) {
      console.warn("Please fill in all required fields.");
      return null;
    }

    const formData = new FormData();
    formData.append("brand", selectedBrand);
    formData.append("model", selectedModel);
    formData.append("type", selectedType);
    formData.append("image", image);
    formData.append("notes", notes);
    formData.append("quantity", quantity.toString());

    try {
      setLoading(true);
      // const response = await fetch("", { method: "POST", body: formData });
      // const result = await response.json();
      // setLoading(false);
      const result = {
        price: 100,
      }

      if (result && result.price) {
        return {
          id: Date.now(),
          name: `${selectedBrand} ${selectedModel} ${selectedType} Case`,
          price: result.price,
          image: imagePreview || '',
          type: 'custom',
          mobile: selectedModel,
          brand: selectedBrand,
          quantity: quantity,
        };
      } else {
        console.error("❌ Invalid price response");
        return null;
      }
    } catch (error) {
      setLoading(false);
      console.error("❌ Error submitting form:", error);
      return null;
    }
  };

  const handleAddToCart = async () => {
    const cartItem = await submitFormAndCreateCartItem();
    if (cartItem) {
      addToCart(cartItem);
    }
  };
  
  const handleBuyNow = async () => {
    const cartItem = await submitFormAndCreateCartItem();
    if (cartItem) {
      addToCart(cartItem);
      router.push('/CheckOut');
    }
  };
  
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <div className="md:w-[80%] w-full mt-5 mb-5 flex justify-center text-black items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <Card className="flex justify-center items-center h-96">
            <CardContent className="flex flex-col justify-center items-center h-full">
              <div className="border border-black w-40 h-80 flex flex-col justify-center items-center rounded-xl overflow-hidden">
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="Uploaded"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="object-contain w-full h-full"
                  />
                ) : (
                  <>
                    <UploadCloud className="h-8 w-8" />
                    <p className="text-center text-sm font-semibold">Your Design Here</p>
                  </>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Customise Your Design</h2>

            <div className="grid grid-cols-4 gap-2">
              {Object.keys(brandData).map((brand) => (
                <Button
                  key={brand}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setSelectedModel("");
                  }}
                  className={`${
                    selectedBrand === brand
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-white text-black border hover:bg-gray-100"
                  }`}
                >
                  {brand}
                </Button>
              ))}
            </div>

            <select
              className="w-full border border-gray-300 rounded-md p-2"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              <option value="">Select Model</option>
              {selectedBrand &&
                brandData[selectedBrand].map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
            </select>

            <div className="grid grid-cols-4 gap-2">
              {caseTypes.map((type) => (
                <Button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`${
                    selectedType === type
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-white text-black border hover:bg-gray-100"
                  }`}
                >
                  {type}
                </Button>
              ))}
            </div>

            <Input type="file" onChange={handleImageUpload} />
            <Textarea
              placeholder="Type your instructions here"
              value={notes}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setNotes(e.target.value)}
            />

            <div className="flex items-center gap-2">
              <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</Button>
              <span>{quantity}</span>
              <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={handleAddToCart} disabled={loading}>
                {loading ? "Adding..." : "Add To Cart"}
              </Button>
              <Button onClick={handleBuyNow} disabled={loading}>
                {loading ? "Processing..." : "Buy Now"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Sameproduct />
    </div>
  );
}
