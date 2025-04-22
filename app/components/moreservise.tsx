"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
export default function Moreservise() {
    const router = useRouter()
    const handleContactUs = () => {
        router.push("/contact-us")
    }
    return (
        <div className='w-full h-[100%] bg-white flex flex-col items-center gap-18 mt-12 justify-center'>
            <h1 className='text-4xl font-openSans text-center'>More Services</h1>
            <div className="w-[90%] h-[40%] flex flex-wrap justify-between gap-2" >
               <div className="flex flex-col justify-center gap-2 items-center"><Image src={`/shiping.png`} width={70} height={70} alt="facebook" /> <p>Shipin All Over Bangladesh</p></div>
               <div className="flex flex-col justify-center gap-2 items-center"><Image src={`/premium.png`} width={70} height={70} alt="facebook" /> <p>Premium Quality</p></div>
               <div className="flex flex-col justify-center gap items-center"><Image src={`/contact.png`} width={70} height={70} alt="facebook" /> <p>Ccntact Support</p></div>
               <div className="flex flex-col justify-center gap items-center"><Image src={`/check.png`} width={70} height={70} alt="facebook" /> <p>Secured Checkout</p></div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
                <input className="w-[60%] h-[40px] rounded-2xl border-2 border-gray-200 p-2" type="text" placeholder="Enter Your Email"/>
                
                <button  onClick={handleContactUs} className="bg-[#008ECC] text-white font-bold py-3 rounded-2xl shadow hover:bg-[#5f97af] hover:shadow-[0_4px_10px_#BF00FFA3] flex items-center justify-center transition duration-200 h-[40px] w-[100px]">Contact Us</button>
            </div>
            
        </div>
    )
}

