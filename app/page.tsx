'use client';
import CaseCard from './components/Cart';
import Image from 'next/image';
import Link from 'next/link';
const caseCategories = [
  {
    name: '2D MAX CASE',
    image: '/images/2dmax.jpg',
    href: '/cases/2d-max',
  },
  {
    name: '2D CASE',
    image: '/images/2d.jpg',
    href: '/cases/2d',
  },
  {
    name: 'SOFT CASE',
    image: '/images/soft.jpg',
    href: '/cases/soft',
  },
  {
    name: '3D CASE',
    image: '/images/3d.jpg',
    href: '/cases/3d',
  },


];
export default function Home() {
  const designCollections = [
    { name: 'ANIME DESIGN', href: '/design-collection?category=anime' },
    { name: 'MARVEL/DC DESIGN', href: '/design-collection?category=marvel-dc' },
    { name: 'CARS & BIKES DESIGN', href: '/design-collection?category=cars-bikes' },
    { name: 'COUPLE DESIGN', href: '/design-collection?category=couple' },
    { name: 'FOOTBALL DESIGN', href: '/design-collection?category=football' },
    { name: 'TYPOGRAPHY DESIGN', href: '/design-collection?category=typography' },
    { name: 'GAMING DESIGN', href: '/design-collection?category=gaming' },
    { name: 'ISLAMIC DESIGN', href: '/design-collection?category=islamic' },
    { name: 'LADIES DESIGN', href: '/design-collection?category=ladies' },
    { name: 'K-POP DESIGN', href: '/design-collection?category=k-pop' },
  ];

  return (
    <main>
      {/* Background Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
  {/* Fullscreen Background Image */}
  <img
  src="/image/bgh.png"
  alt="Background"
  className="absolute inset-0 w-full h-full object-cover z-0"
/>


  {/* Optional: black background fallback behind transparent areas */}
  <div className="absolute z-0"></div>

  {/* Overlay Content */}
  <div className="relative z-10 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-end px-4 md:px-8 lg:px-12 py-8">
    <div className="w-full max-w-lg md:max-w-md lg:max-w-lg xl:max-w-xl space-y-3">
      {/* Design Collection Box */}
      <div className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-6">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6 py-3 px-4 rounded-lg bg-[#3C1630] border-2 border-white/20 hover:shadow-[0_4px_10px_#8400FF]">
            DESIGN COLLECTION
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {designCollections.map((collection) => (
            <Link
              key={collection.href}
              href={collection.href}
              className="bg-[#3C1630] text-white text-sm md:text-base py-3 px-4 rounded-lg text-center hover:bg-[#4D1C3D] transition-colors duration-300 transform hover:scale-105"
            >
              {collection.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Customize Button */}
      <div className="bg-white/95 backdrop-blur rounded-xl shadow-2xl">
        <Link
          href="/customization"
          className="bg-[#3C1630] text-white text-lg md:text-xl h-[106px] w-full rounded-xl flex items-center justify-center font-semibold hover:bg-[#4D1C3D] transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
        >
          Customise with your design
        </Link>
      </div>
    </div>
  </div>
</section>
<section className="w-screen min-h-screen bg-white flex flex-wrap  justify-center items-center py-12">
  <div className="w-[85%] flex flex-col items-center gap-8">
    <h1 className="font-bold text-4xl text-center text-black">
      FIND YOUR DESIRED CASE BY CATEGORY
    </h1>

    {/* Grid Wrapper */}
    <div className="w-full flex flex-wrap gap-3.5 justify-center">

    {caseCategories.map((item, index) => (
          <CaseCard key={index} image={item.image} name={item.name} href={item.href} />
        ))}
    </div>
  </div>
</section>

<section className="relative w-full">
      <Image
  src="/image/Group211.png"
  alt="Background"
  width={1920}
  height={1080}
  layout="responsive"
  priority
  className="w-full h-auto"
/>

        </section>

    </main>
  );
}
