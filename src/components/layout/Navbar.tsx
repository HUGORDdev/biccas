import { useState } from "react"

const Navbar = () => {
    const  [Login, setLogin] = useState(true)
  return (
    <nav className=' flex justify-between items-center mx-20 mt-5'>
        <span className="font-inter text-[50px] leading-[0.3] text-green font-semibold  ">Biccas</span>
        <ul className="flex gap-10">
            <li className="font-medium font-inter text-[16px] text-text-gray hover:text-black no-underline "><a href="#">Home</a></li>
            <li className="font-medium font-inter text-[16px] text-text-gray hover:text-black no-underline " ><a href="#" >Product</a></li>
            <li className="font-medium font-inter text-[16px] text-text-gray hover:text-black no-underline "><a href="#">Blog</a></li>
            <li className="font-medium font-inter text-[16px] text-text-gray hover:text-black no-underline " ><a href="#">About Us</a></li>
        </ul>
        <div className="flex gap-3">
            <button onClick={()=>setLogin(true)} className={`${Login?" bg-green text-white":"border border-green/80"}  rounded-xl cursor-pointer w-20 h-10 `} >Login</button>
            <button className={`${Login?"border border-green/80":" bg-green text-white"} w-20 h-10 rounded-xl cursor-pointer `} onClick={()=>setLogin(false)} >Sign UP</button>
        </div>
    </nav>
  )
}

export default Navbar