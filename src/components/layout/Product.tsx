import { motion } from 'framer-motion';

const Product = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div id="product" className="bg-white px-6 py-16 md:p-20">
            {/* --- HEADER --- */}
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
                <motion.p 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="font-semibold text-3xl md:text-[50px] leading-tight max-w-md"
                >
                    Our Features you can get
                </motion.p>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="font-medium leading-[1.6] text-text-gray text-base md:text-lg max-w-xl"
                >
                    We offer a variety of interesting features that can help increase your productivity at work and manage your projects easily.
                </motion.p>
                
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className='w-full sm:w-40 h-14 md:h-16.5 rounded-full text-center text-white font-medium text-lg bg-green cursor-pointer shadow-md hover:shadow-lg transition-all'
                >
                    Try free trial
                </motion.button>
            </div>

            {/* --- GRILLE DE CARTES --- */}
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-10 justify-items-center mt-16 md:mt-24"
            >
                {/* Carte 1 */}
                <motion.div variants={cardVariants} className="flex flex-col items-center text-center group">
                    <div className="overflow-hidden rounded-3xl mb-5">
                        <img src="./collboration.svg" alt="Collaboration" className="w-full h-auto max-w-[320px] transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <p className="font-semibold text-2xl md:text-[30px]">Collaboration Teams</p>
                    <p className="mt-4 leading-normal font-medium text-lg text-text-gray max-w-xs">
                        Here you can handle projects together with team virtually
                    </p>
                </motion.div>

                <motion.div variants={cardVariants} className="flex flex-col items-center text-center group">
                    <div className="overflow-hidden rounded-3xl mb-5">
                        <img src="./cloud.svg" alt="Cloud Storage" className="w-full h-auto max-w-[320px] transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <p className="font-semibold text-2xl md:text-[30px]">Cloud Storage</p>
                    <p className="mt-4 leading-normal font-medium text-lg text-text-gray max-w-xs">
                        No need to worry about storage because we provide storage up to 2 TB
                    </p>
                </motion.div>

                <motion.div variants={cardVariants} className="flex flex-col items-center text-center group">
                    <div className="overflow-hidden rounded-3xl mb-5">
                        <img src="./Daily.svg" alt="Daily Analytics" className="w-full h-auto max-w-[320px] transform group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <p className="font-semibold text-2xl md:text-[30px]">Daily Analytics</p>
                    <p className="mt-4 leading-normal font-medium text-lg text-text-gray max-w-xs">
                        We always provide useful information to make it easier for you every day
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Product;