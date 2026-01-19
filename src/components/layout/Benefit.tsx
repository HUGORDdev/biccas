import { motion } from "framer-motion";
import { CheckCircleIcon } from "@phosphor-icons/react";
import BenefitVisual from "../common/BenefitVisual";

const Benefit = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    const benefits = [
        "Free Consulting With Expert Saving Money",
        "Online Banking",
        "Investment Report Every Month",
        "Saving Money For The Future",
        "Online Transaction"
    ];

    return (
        <div className="flex flex-col lg:flex-row m-6 md:m-20 justify-center items-center lg:items-stretch gap-12 lg:gap-20">
            <div className="flex flex-col w-full lg:w-1/2">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-bold text-3xl md:text-[50px] leading-tight text-center lg:text-left"
                >
                    What Benefit Will You Get
                </motion.p>

                <motion.ul
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-10 flex flex-col justify-between flex-1 gap-4 lg:gap-0"
                >
                    {benefits.map((benefit, index) => (
                        <motion.li
                            key={index}
                            variants={itemVariants}
                            className="flex items-center"
                        >
                            <CheckCircleIcon size={32} weight="fill" className="text-green flex-shrink-0" />
                            <p className="pl-3 font-medium text-base md:text-lg">{benefit}</p>
                        </motion.li>
                    ))}
                </motion.ul>
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
                <BenefitVisual />
            </motion.div>
        </div>
    );
};

export default Benefit;