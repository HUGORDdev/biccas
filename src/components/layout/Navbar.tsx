import { useState } from "react"
import { ListIcon, XIcon } from "@phosphor-icons/react" 

const Navbar = () => {
    const [login, setLogin] = useState(true)
    const [isOpen, setIsOpen] = useState(false) 

    return (
        <nav className="relative flex justify-between items-center mx-6 md:mx-20 mt-5">
            {/* Logo */}
            <span className="font-inter text-[30px] md:text-[50px] text-green font-semibold">
                Biccas
            </span>

            {/* Menu Desktop  */}
            <ul className="hidden lg:flex gap-10">
                <li className="font-medium text-text-gray hover:text-black"><a href="#">Home</a></li>
                <li className="font-medium text-text-gray hover:text-black"><a href="#">Product</a></li>
                <li className="font-medium text-text-gray hover:text-black"><a href="#">Blog</a></li>
                <li className="font-medium text-text-gray hover:text-black"><a href="#">About Us</a></li>
            </ul>

            {/* Boutons Desktop  */}
            <div className="hidden lg:flex gap-3">
                <button 
                    onClick={() => setLogin(true)} 
                    className={`${login ? "bg-green text-white" : "text-text-gray"} px-6 py-2 rounded-xl cursor-pointer`}
                >
                    Login
                </button>
                <button 
                    onClick={() => setLogin(false)} 
                    className={`${!login ? "bg-green text-white" : "text-text-gray"} px-6 py-2 rounded-xl cursor-pointer`}
                >
                    Sign Up
                </button>
            </div>

            <button className="lg:hidden text-green" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <XIcon size={32} /> : <ListIcon size={32} />}
            </button>

            {/* Menu Mobile  */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-xl flex flex-col p-6 gap-6 z-50 lg:hidden rounded-2xl mt-4">
                    <ul className="flex flex-col gap-4 text-center">
                        <li><a href="#" className="font-medium" onClick={() => setIsOpen(false)}>Home</a></li>
                        <li><a href="#" className="font-medium" onClick={() => setIsOpen(false)}>Product</a></li>
                        <li><a href="#" className="font-medium" onClick={() => setIsOpen(false)}>Blog</a></li>
                        <li><a href="#" className="font-medium" onClick={() => setIsOpen(false)}>About Us</a></li>
                    </ul>
                    <div className="flex flex-col gap-3">
                        <button className="w-full py-3 bg-green text-white rounded-xl">Login</button>
                        <button className="w-full py-3 border border-green text-green rounded-xl">Sign Up</button>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar