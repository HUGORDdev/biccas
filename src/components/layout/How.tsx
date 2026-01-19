import { motion } from 'framer-motion'
import Start from '../common/Start'
import { ServiceItem } from '../common/ServiceItem';

const How = () => {
    
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start mt-10 md:mt-20 bg-[#F9F8FE] py-16 px-6 md:px-20 gap-16'>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className='flex w-full lg:w-1/2 flex-col gap-8 text-center lg:text-left'
            >
                <motion.p variants={fadeInUp} className='font-semibold text-3xl md:text-[50px] leading-tight max-w-xl mx-auto lg:mx-0'>
                    How we support our partner all over the world
                </motion.p>

                <motion.p variants={fadeInUp} className='font-medium leading-[1.6] max-w-2xl text-text-gray text-base md:text-lg'>
                    SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap justify-center lg:justify-start items-start gap-10 md:gap-20 mt-4">
                    <div className='flex flex-col gap-3 items-center lg:items-start'>
                        <Start number={5} />
                        <p className='font-bold text-lg'>
                            4.9 <span className='font-medium text-lg text-gray-500'> /5 rating</span>
                        </p>
                        <span className='font-bold text-lg text-text-gray uppercase tracking-wider'>databricks</span>
                    </div>
                    <div className='flex flex-col gap-3 items-center lg:items-start'>
                        <Start number={4} />
                        <p className='font-bold text-lg'>
                            4.8 <span className='font-medium text-lg text-gray-500'> /5 rating</span>
                        </p>
                        <span className='font-bold text-lg text-text-gray uppercase tracking-wider'>Chainalysis</span>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className='flex w-full lg:w-1/2 flex-col gap-10'
            >
                <ServiceItem
                    icon="./publishing.svg"
                    title="Publishing"
                    desc="Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand."
                />
                <ServiceItem
                    icon="./analytics.svg"
                    title="Analytics"
                    desc="Analyze your performance and create gorgeous reports to understand your data better."
                />
                <ServiceItem
                    icon="./publishing.svg"
                    title="Engagement"
                    desc="Quickly navigate you and engage with your audience effectively across all platforms."
                />
            </motion.div>
        </div>
    )
}


export default How