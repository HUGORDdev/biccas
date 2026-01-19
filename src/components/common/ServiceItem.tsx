import { motion } from 'framer-motion'

interface ServiceProp{
    icon:string,
    title:string,
    desc:string,
}
export const ServiceItem = ({ icon, title, desc }:ServiceProp) => (
    <motion.div 
        variants={{
            hidden: { opacity: 0, x: 20 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
        }}
        className='flex gap-5 items-start'
    >
        <div className='shrink-0 w-14 h-14 rounded-xl items-center justify-center flex bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <img src={icon} alt={title} className='w-7 h-7' />
        </div>
        <div className="flex flex-col gap-2">
            <p className='font-bold text-2xl md:text-[28px]'>{title}</p>
            <p className='font-medium text-base md:text-lg leading-normal text-text-gray max-w-md'>
                {desc}
            </p>
        </div>
    </motion.div>
)