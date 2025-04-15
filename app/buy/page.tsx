'use client';


import Image from 'next/image';
import CaseCard from '../components/cart2';
import { useState } from "react";


const ITEMS_PER_PAGE = 4;

export default function BuyNowPage() {
  const [quantity, setQuantity] = useState(1);




  const caseCategories = [
    {
      name: 'ANIME DESIGN',
      slug: 'anime',
      image: '/images/design/anime.jpg',
    },
    {
      name: 'MARVEL/DC DESIGN',
      slug: 'marvel-dc',
      image: '/images/design/marvel-dc.jpg',
    },
    {
      name: 'CARS & BIKES DESIGN',
      slug: 'cars-bikes',
      image: '/images/design/cars-bikes.jpg',
    },
    {
      name: 'COUPLE DESIGN',
      slug: 'couple',
      image: '/images/design/couple.jpg',
    },
    {
      name: 'FOOTBALL DESIGN',
      slug: 'football',
      image: '/images/design/football.jpg',
    },
    {
      name: 'TYPOGRAPHY DESIGN',
      slug: 'typography',
      image: '/images/design/typography.jpg',
    },
    {
      name: 'GAMING DESIGN',
      slug: 'gaming',
      image: '/images/design/gaming.jpg',
    },
    {
      name: 'ISLAMIC DESIGN',
      slug: 'islamic',
      image: '/images/design/islamic.jpg',
    },
    {
      name: 'LADIES DESIGN',
      slug: 'ladies',
      image: '/images/design/ladies.jpg',
    },
    {
      name: 'K-POP DESIGN',
      slug: 'k-pop',
      image: '/images/design/k-pop.jpg',
    },
  ];

  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(caseCategories.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    setPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const start = page * ITEMS_PER_PAGE;
  const visibleItems = caseCategories.slice(start, start + ITEMS_PER_PAGE);
  
  return (
    <div className=" flex justify-center flex-col gap-8  mt-3 mb-3.5 items-center">
    <div className="container w-[60%] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative aspect-square">
          <Image
            src="/product-image.jpg"
            alt="Product"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">Premium Product Name</h1>
            <p className="text-gray-500 mt-2">Product Category</p>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">$299.99</h2>
            <p className="text-green-600">In Stock</p>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-20 text-center border rounded-md p-2"
                />
                <button
                  className="w-10 h-10 border rounded-md flex items-center justify-center hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-colors">
              Buy Now
            </button>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Product Description</h3>
            <p className="text-gray-600">
              This is a premium product with exceptional quality and features. 
              Perfect for those who appreciate excellence in every detail.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className='w-full h-full flex flex-col gap-12 mb-8 justify-evenly items-center'>
    <h2 className="sm:text-3xl hover:shadow-[0px_4px_6px_#00D6EE40] text-white font-semibold md:w-[843px] md:h-[68px] bg-[#3C1630] flex justify-center items-center w-full top-[221.25px] rounded-[15.75px]">
          MORE RElATED PRODUCTS
        </h2>
        <div className="relative w-full overflow-hidden">
      <div className=" flex justify-center flex-wrap gap-10  transition-transform duration-500 ease-in-out">
        {visibleItems.map((item, index) => (
          <CaseCard
            key={index}
            image={item.image}
            name={item.name}
            href={`/desgine-collection/${item.slug}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2"
      >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
      </button>
    </div>


    </div>
    </div>
  );
}
