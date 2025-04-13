'use client';
import { useParams } from 'next/navigation';

export default function PhoneCaseTypePage() {
  const params = useParams();
  console.log(params); // Debugging line
  const id= params?.id;

  return (
    <div className="p-4">
      <h1 className="text-2xl text-black font-bold">Showing {id} phone cases</h1>
    </div>
  );
}
