'use client';
import { useParams, useRouter } from 'next/navigation';
import CaseCard3 from '@/app/components/cart3';
import { useCart } from '@/app/context/CartContext';

const caseCategories = [
  {id:'001', name: '3D CASE', image: '/images/3d.jpg', price: '$20.00', discountPrice: '$15.00',stock:10},
  {id:'002', name: '3D CASE', image: '/images/3d.jpg', price: '$30.00', discountPrice: '$16.00',stock:10},
  {id:'003', name: '3D CASE', image: '/images/3d.jpg', price: '$30.00', discountPrice: '$16.00',stock:10},
  {id:'004', name: '3D CASE', image: '/images/3d.jpg', price: '$30.00', discountPrice: '$16.00',stock:10},
  {id:'005', name: '54D CASE', image: '/images/3d.jpg', price: '$30.00', discountPrice: '$16.00',stock:0},
  // More categories...
];

type CartItem = {
  name: string;
  discountPrice: string;
  image: string;
  id: string;  
};

export default function PhoneCaseTypePage() {
  const params = useParams();
  const router = useRouter();
  const { type } = params;
  const { addToCart } = useCart();

  const handleBuyNow = (item: CartItem) => {
    const cartItem = {
      id: `${item.name}-${Date.now()}`,
      name: item.name,
      price: item.discountPrice,
      image: item.image,
      type: 'phone-case'
    };
    
    addToCart(cartItem);
    router.push('/CheckOut');
  };

  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-[#ffffff]">
      <div className="w-[90%] flex flex-col gap-11 justify-center items-center mb-5 mt-5 h-[100%]">
        <h1 className="text-6xl hover:shadow-[0px_4px_6px_#BF00FF78] font-bold md:w-[848px] md:h-[110] rounded-[15px] bg-[#3C1630] text-white w-full flex justify-center items-center">
          {type} Cases
        </h1>
        <h2 className="sm:text-4xl hover:shadow-[0px_4px_6px_#00D6EE40] text-white font-semibold md:w-[1143px] md:h-[68px] bg-[#3C1630] flex justify-center items-center w-full top-[221.25px] rounded-[15.75px]">
          96% COLOUR ACCURACY, GRAPHENE METAL, RUBBER GRIP
        </h2>

        <div className="flex flex-wrap justify-center gap-24">
          {caseCategories.map((item, index) => {
            const href = `/buy/${(item.id)}`;
            return (
              <div 
                key={index} 
                className="case-card"
                data-name={item.name}
                data-image={item.image}
                data-price={item.price}
                data-discount-price={item.discountPrice}
              >{(1<=item.stock)?
                <CaseCard3
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  discountPrice={item.discountPrice}
                  href={href}
                  onBuyNow={() => handleBuyNow(item)}
                />:""}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
