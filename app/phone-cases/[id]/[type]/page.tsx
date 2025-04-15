'use client';
import { useParams, useSearchParams } from 'next/navigation';
import CaseCard3 from '@/app/components/cart3';

const caseCategories = [
  {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$20.00',
    discountPrice: '$15.00',
  },
  {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  }, {
    name: '3D CASE',
    image: '/images/3d.jpg',
    price: '$30.00',
    discountPrice: '$16.00',
  },
  // ... other items
];

export default function PhoneCaseTypePage() {
  const params = useParams();
  const { type } = params; // dynamic type like "3d", "2d"
  const searchParams = useSearchParams();
  const what = searchParams.get('what'); // dynamic category like "anime", "football"

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-[#ffffff]">
      <div className="w-[90%] flex flex-col gap-11 justify-center items-center mb-5 mt-5 h-[100%]">
        <h1 className="text-6xl hover:shadow-[0px_4px_6px_#BF00FF78] font-bold md:w-[848px] md:h-[110] rounded-[15px] bg-[#3C1630] text-white w-full flex justify-center items-center">
          {type} {what} Cases
        </h1>
        <h2 className="sm:text-4xl hover:shadow-[0px_4px_6px_#00D6EE40] text-white font-semibold md:w-[1143px] md:h-[68px] bg-[#3C1630] flex justify-center items-center w-full top-[221.25px] rounded-[15.75px]">
          96% COLOUR ACCURACY, GRAPHENE METAL, RUBBER GRIP
        </h2>

        <div className="flex flex-wrap justify-center gap-24">
          {caseCategories.map((item, index) => (
            <CaseCard3
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
              discountPrice={item.discountPrice}
              href={'/phone-cases/${type}/${what}'} // dynamic href
            />
          ))}
        </div>
      </div>
    </div>
  );
}
