'use client';
import { useState, ChangeEvent } from "react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { UploadCloud } from "lucide-react";

type BrandData = {
  [key: string]: string[];
};

const price = [{ taka: 240 }];

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

export default function Customization() {
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log({
      brand: selectedBrand,
      model: selectedModel,
      image,
      notes,
      quantity
    });
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="md:h-[100%] md:w-[80%] w-full mt-5 mb-5 flex justify-center items-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <Card className="flex justify-center items-center h-96">
            <CardContent className="flex flex-col justify-center items-center h-full">
              <div className="border border-black w-40 h-80 flex flex-col justify-center items-center rounded-xl overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Uploaded"
                    className="w-full h-full object-contain"
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
            <p className="text-gray-600">Tk. {price[0].taka}.00</p>

            <div className="grid grid-cols-4 gap-2">
              {Object.keys(brandData).map((brand) => (
                <Button
                  key={brand}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setSelectedModel("");
                  }}
                  className={`transition-colors duration-200 ${
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
              <Button variant="outline">Add To Cart</Button>
              <Button onClick={handleSubmit}>Buy Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
