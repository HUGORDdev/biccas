import { motion } from "framer-motion";
import { ArrowRightIcon, PlayIcon } from "@phosphor-icons/react";
import { FooterLinkGroup } from "../common/FooterLinkGroup";

const FooterSection = () => {
  return (
    <footer className="bg-[#191D28] text-white pt-20 pb-10 px-6 md:px-20">
      {/* --- SECTION TEMOIGNAGE & CONTACT --- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        
        {/* Partie Gauche : Témoignage */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl font-semibold leading-tight mb-8">
            People are Saying <br /> About DoWhith
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-md">
            Everything you need to accept to payment and grow your money of manage anywhere on planet
          </p>
          
          <div className="relative mb-8">
            <span className="text-7xl text-white absolute  -top-4 -left-2 italic">"</span>
            <p className="text-gray-300 text-xl pl-8 leading-relaxed">
              I am very helped by this E-wallet application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time 😍
            </p>
          </div>
          
          <p className="text-gray-400 mb-8 italic">_ Aria Zinanrio</p>

          {/* Avatars */}
          <div className="flex items-center gap-4">
            {[1, 2, 3, 4].map((i) => (
              <img 
                key={i}
                src={`https://i.pravatar.cc/150?u=${i}`} 
                className="w-14 h-14 rounded-full border-2 border-[#191D28] grayscale hover:grayscale-0 transition-all cursor-pointer"
                alt="user"
              />
            ))}
            <button className="w-14 h-14 rounded-full border border-gray-500 flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <PlayIcon weight="fill" size={20} />
            </button>
          </div>
        </motion.div>

        {/* Partie Droite : Formulaire */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-[#222938] p-10 rounded-[2.5rem] relative"
        >
          <div className="flex flex-col items-center mb-8">
            <div className=" flex items-center justify-center mb-4">
               <img src="./euro.svg" alt="" />
            </div>
            <h3 className="text-3xl font-bold">Get Started</h3>
          </div>

          <form className="space-y-6">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-white text-black p-4 rounded-xl outline-none focus:ring-2 focus:ring-green"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea 
                rows={4}
                placeholder="What are you say ?" 
                className="w-full bg-white text-black p-4 rounded-xl outline-none focus:ring-2 focus:ring-green resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-green py-4 rounded-xl font-bold text-lg hover:bg-[#45a884] transition-colors">
              Request Demo
            </button>
            <p className="flex justify-end gap-2 text-sm text-gray-400">
              or <span className="text-white font-semibold cursor-pointer">Start Free Trial</span>
            </p>
          </form>
        </motion.div>
      </div>

      {/* --- FOOTER FINAL --- */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 pt-20">
        <div className="grid grid-cols-1 md:flex md:justify-between gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-green text-4xl font-bold mb-6">Biccas</h2>
            <p className="text-gray-400 mb-6">Get started now try our product</p>
            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="Enter your email here" 
                className="w-full bg-transparent border-2 border-gray-700 p-4 rounded-full outline-none focus:border-green"
              />
              <button className="absolute right-2 w-10 h-10 bg-green rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <ArrowRightIcon color="white" weight="bold" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 col-span-1 md:col-span-3 gap-8">
            <FooterLinkGroup title="Support" links={["Help centre", "Account information", "About", "Contact us"]} />
            <FooterLinkGroup title="Help and Solution" links={["Talk to support", "Support docs", "System status", "Covid responde"]} />
            <FooterLinkGroup title="Product" links={["Update", "Security", "Beta test", "Pricing product"]} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2022 Biccas Inc. Copyright and rights reserved</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms and Condtions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default FooterSection;