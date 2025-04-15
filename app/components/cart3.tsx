'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FiHeart, FiShoppingBag } from 'react-icons/fi';

export default function CaseCard3({
  image,
  name,
  href,
  price,
  discountPrice,
}: {
  image: string;
  name: string;
  href: string;
  price: string;
  discountPrice: string;
}) {
  return (
    <div className="w-[377px] h-[546px] bg-white rounded-[10.5px] flex flex-col justify-between shadow-md">
      {/* Case Image */}
      <div className="flex justify-center items-center p-4">
        <div className="relative w-[220px] h-[320px]">
          <Image src={image} alt={name} fill className="object-contain" />
        </div>
      </div>

      {/* Title */}
      <div className="text-center px-2">
        <h3 className="text-[16px] font-bold leading-tight text-black uppercase">
          {name}
        </h3>
      </div>

      {/* Price Section */}
      <div className="mt-2 text-center">
        <span className="line-through text-gray-500 text-sm mr-2">
          ৳ {price}
        </span>
        <span className="text-black font-semibold text-lg">
          ৳ {discountPrice}
        </span>
      </div>

      {/* Bottom Panel */}
      <div className="bg-[#D0ECFE] mt-4 px-4 py-3 rounded-b-[10.5px] flex justify-between items-center">
        {/* Wishlist Icon */}
        <FiHeart className="text-black text-[20px] cursor-pointer" />

        {/* Buy Now Button */}
        <Link
          href={href}
          className="bg-[#3C1630] text-white font-bold px-6 py-2 rounded-full shadow hover:shadow-[0_4px_10px_#BF00FFA3] transition duration-200"
        >
          BUY NOW
        </Link>

        {/* Cart Icon */}
        <FiShoppingBag className="text-black text-[20px] cursor-pointer" />
      </div>
    </div>
  );
}
