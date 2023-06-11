import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaTwitterSquare,
    FaLinkedinIn
} from "react-icons/fa"


export default function Footer(){
    return(

        <div className="w-full bg-black text-white ">
            <div className=" max-w-[1240px] py-10 px-10 grid md:grid-cols-3 gap-8">
                <div>
                <h4 className="text-green-500 text-3xl p-4">React .</h4>

                <p className="p-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
                <div className="flex justify-between p-4 ">
                    <FaDribbbleSquare size={30}/>
                    <FaFacebookSquare className="bg-blue-500"  size={30}/>
                    <FaInstagramSquare className="bg-red-400"  size={30}/>
                    <FaTwitterSquare className="bg-blue-500"  size={30} />       
                    <FaLinkedinIn className="bg-blue-500"  size={30} />
                </div>
                </div>
                <div className="hidden md:flex justify-between col-span-2">
                    <div className="flex flex-row py-10 ">
                     
                        <ul>
                        <h6 className="font-bold text-green-900 text-2xl">Support</h6>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
        </ul>
                    </div>

                    <div className="flex flex-row py-10 ">
                     
                     <ul>
                     <h6 className="font-bold text-green-900 text-2xl">Sulution</h6>
                     <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
     </ul>
                 </div>
                    

                 <div className="flex flex-row py-10 ">
                     
                     <ul>
                     <h6 className="font-bold text-green-900 text-2xl">Company</h6>
                     <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
     </ul>
                 </div>

                 <div className="flex flex-row py-10 ">
                     
                     <ul>
                     <h6 className="font-bold text-green-900 text-2xl">Legal</h6>
                     <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
     </ul>
                 </div>
                </div>
                
                </div>

            </div>
    )
}