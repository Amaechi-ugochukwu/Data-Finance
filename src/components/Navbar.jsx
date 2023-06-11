import React, { useState } from "react";
import { AiOutlineClose , AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom"


export default function Navbar() {
    const [nav, setNav]  = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

return(
   
    <div className="flex justify-between items-center mx-auto px-4 h-16 max-w-[1000px] text-white">
        <h4 className="text-green-400 font-bold text-4xl">React</h4>
      
     <ul className="hidden md:flex ">
            <li className="p-4 border-b border-green-600"><Link to="/">Home</Link></li>
            <li className="p-4"><Link to= "/contact">Contact</Link></li>
            <li className="p-4">About</li>
            <li className="p-4">Reviews</li>
            </ul>
            <ul className=" hidden md:flex ">
            <li className="p-4 border-b border-green-600">Sign up</li>
            <li className="p-4 bg-green-500 text-white">Login</li>
           
            </ul>

            <div onClick={handleNav} className = "block md:hidden">
                { nav ? <AiOutlineClose size = {20} /> : <AiOutlineMenu size={20}/>  }
            </div>
        <ul className={nav ? 'fixed top-0 left-0 w-[60%] h-full border-r border-grey-900 bg-[#000300] ease-in-out duration-700 '
        : 'ease-in-out duration-500 fixed left-[-100%]'}>
            <h1 className="w-full text-3xl px-4 py-4 text-green-500 font-bold"> React</h1>
            <li onClick={handleNav} className="p-4 border-b border-green-100"><Link to="/">Home</Link></li>
            <li onClick={handleNav} className="p-4"><Link to= "/contact">Contact</Link></li>
            <li className="p-4">Reviews</li>
            <li className="p-4 bg-green-500 text-white text-1xl">Login</li>
            <li className="p-4">Sign Up</li>

            </ul>


    </div>
   
)
}