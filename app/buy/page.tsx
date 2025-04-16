'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function BuyNowPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const name = searchParams.get('name');
  const price = searchParams.get('price');
  const discountPrice = searchParams.get('discountPrice');
  const image = searchParams.get('image');

  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    // Create a query string with all the product details
    const queryParams = new URLSearchParams({
      name: name || '',
      price: price || '',
      image: image || '',
      type: 'product'
    });
    
    // Navigate to the CheckOut page with the product details
    router.push(`/CheckOut?${queryParams.toString()}`);
  };

  return (<div className='w-full h-full flex flex-col gap-12 mb-8 justify-evenly items-center'>
    <div className="flex justify-center flex-col gap-8 mt-3 mb-3.5 items-center">
      <div className="container w-[60%] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative aspect-square">
            <Image
              src={image || '/fallback.jpg'}
              alt={name || 'Product'}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{name || 'Product Name'}</h1>
            <div className="space-y-2">
              <p className="text-xl line-through text-gray-500">{price}</p>
              <h2 className="text-2xl font-semibold text-green-600">{discountPrice}</h2>
              <p className="text-green-600">In Stock</p>
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium">Quantity</label>
              <div className="flex gap-4">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center border rounded-md p-1"
                />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button 
                onClick={handleBuyNow}
                className="w-full bg-[#3C1630] text-white font-bold py-3 rounded-full shadow hover:shadow-[0_4px_10px_#BF00FFA3] transition duration-200"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    
    </div>
  );
}
