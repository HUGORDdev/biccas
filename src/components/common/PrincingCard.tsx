import { motion } from "framer-motion";
import { CheckCircleIcon } from "@phosphor-icons/react";

interface PricingCard {
    title: string;
    price: string;
    description: string;
    features: string[];
    buttonText: string;
    highlighted?: boolean;
    badge?: string

}
export const PricingCard = ({ title, price, description, features, buttonText, highlighted = false, badge = "" }: PricingCard) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative flex flex-col p-8 rounded-4xl w-full max-w-87.5 shadow-xl ${highlighted ? "bg-[#61C39A] text-white scale-105 z-10" : "bg-white text-black border border-gray-100"
                }`}
        >
            {/* Header */}
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className={`text-sm px-4 ${highlighted ? "text-white/80" : "text-gray-500"}`}>
                    {description}
                </p>
                <div className="mt-6 flex items-start justify-center">
                    <span className="text-lg mt-2 font-medium">$</span>
                    <span className="text-7xl font-bold">{price}</span>
                </div>
                {badge && (
                    <span className="inline-block mt-4 bg-white/20 px-4 py-1 rounded-full text-xs font-semibold">
                        {badge}
                    </span>
                )}
            </div>

            {/* Features List */}
            <div className={`flex-1 rounded-3xl p-6 mb-8 ${highlighted ? "bg-white text-black" : "bg-gray-50 text-gray-700"}`}>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-3">
                            <CheckCircleIcon size={24} weight="fill" className="text-[#61C39A]" />
                            <span className="text-sm font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <motion.button
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 rounded-2xl font-bold text-lg transition-colors ${highlighted
                    ? "bg-[#61C39A] text-white border-2 border-white/50 hover:bg-[#52a683]"
                    : "bg-white text-[#61C39A] shadow-md hover:bg-gray-50"
                    }`}
            >
                {buttonText}
            </motion.button>
        </motion.div>
    );
};
