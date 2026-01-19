import { ChatIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

// type
export type FloatingItemProps = {
  children: React.ReactNode;
  className: string;
  delay?: number;
};

export  const FloatingItem = ({ children, className, delay = 0 }: FloatingItemProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, -10, 0], // Petit mouvement de haut en bas 
    }}
    transition={{
      initial: { duration: 0.5, delay },
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay // le delay pour chaque element de facon personnaliser
      }
    }}
    className={`absolute z-10 ${className}`}
  >
    {children}
  </motion.div>
);

export const HeroVisual = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* L'image principale  */}
      <div className="relative z-0 rounded-3xl overflow-hidden ">
        <img src="/human.png" alt="Productivity" className="w-full  h-auto object-cover" />
      </div>

      <FloatingItem className="bottom-10 -left-22 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3" delay={0.2}>
        <div>
          <p className="text-xs text-gray-400 font-regular">Total Income</p>
          <div className='flex justify-between gap-6'>
          <p className="text-lg font-bold ">$245.00</p>
          <img src="./bar.svg" alt="" />
          </div>
        </div>
      </FloatingItem>
      <FloatingItem className="top-6 -left-22 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3" delay={0.2}>
        <div className='flex items-center gap-8 '>
          <div>
          <p className="text-xs text-gray-400 font-regular">Enter amout</p>
          <p className="text-lg font-bold ">$450.00</p>
          </div>
            <button className='text-white cursor-pointer bg-green rounded-2xl w-16 h-7 text-center'> Send</button>
        </div>
      </FloatingItem>

      <FloatingItem className="top-[30%] -left-28 bg-[#4535AF] p-3 rounded-xl shadow-lg -rotate-15" delay={0.4}>
        <svg className="w-13 h-13 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </FloatingItem>

      <FloatingItem className=" bg-[#FFAA94] w-20 h-20  flex items-center rotate-24 justify-center -bottom-15 right-10  rounded-xl  " delay={0.6}>
          <ChatIcon className='text-white ' size={70} />
      </FloatingItem>
      <FloatingItem className="bottom-20 -right-25 rotate-15  rounded-xl  " delay={0.6}>
      <img src="./creditCard.png" className=' w-54.5 h-61.5  top-0 ' /> 
      </FloatingItem>

      <FloatingItem className="top-10 -right-8 " delay={0.8}>
        <img src="./dataBase.svg" className=' w-25 h-25' />
      </FloatingItem>
    </div>
  );
};
