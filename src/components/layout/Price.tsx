import { useState } from "react";
import { PricingCard } from "../common/PrincingCard";

const Price = () => {
    const [PricePlanYear, setPricePlanYear] = useState(true)
    return (
        <div className="bg-[#F0F9F5] py-20 px-10 min-h-screen flex flex-col items-center">
            <div className=" flex flex-col gap-10 items-center justify-center">
            <div className="flex flex-col justify-center items-center">
                <p className="text-5xl font bold leading-[0.73]">Choose Plan </p>
                <p className="text-5xl  mt-5 font bold leading-[0.73]"> That’s Right For You</p>
            </div>
            <p className=" text-text-gray text-lg font-bold ">Choose plan that works best for you, feel free to contact us</p>
            </div>
            {/* Toggle Monthly/Yearly */}
            <div className="bg-white p-2 rounded-2xl mt-10 shadow-sm flex gap-2 mb-16">
                <button onClick={()=>setPricePlanYear(false)} className={`${PricePlanYear? ' text-gray-600':'bg-[#61C39A] text-white'} px-8 py-3 rounded-xl font-semibold `}>Bil Monthly</button>
                <button onClick={()=>setPricePlanYear(true)} className={`${PricePlanYear? 'bg-[#61C39A] text-white':' text-gray-600'} px-8 py-3 rounded-xl font-semibold `}>Bil Yearly</button>
            </div>

            {/* Cards Container */}
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-7xl">
                <PricingCard
                    title="Free"
                    price="0"
                    description="Have a go and test your superpowers"
                    features={["2 Users", "2 Files", "Public Share & Comments", "Chat Support", "New income apps"]}
                    buttonText="Signup for free"
                />

                <PricingCard
                    title="Pro"
                    price="8"
                    highlighted={true}
                    badge="Save $50 a year"
                    description="Experiment the power of infinite possibilities"
                    features={["4 Users", "All apps", "Unlimited editable exports", "Folders and collaboration", "All incoming apps"]}
                    buttonText="Go to pro"
                />

                <PricingCard
                    title="Business"
                    price="16"
                    description="Unveil new superpowers and join the Design League"
                    features={["All the features of pro plan", "Account success Manager", "Single Sign-On (SSO)", "Co-conception pogram", "Collaboration-Soon"]}
                    buttonText="Goto Business"
                />
            </div>
        </div>
        
    );

}

export default Price
