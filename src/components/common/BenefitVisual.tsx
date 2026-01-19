import { ChatCircleIcon, ChatIcon, CheckCircleIcon, ImageIcon } from "@phosphor-icons/react"
import { FloatingItem } from "./HeroVisual"


const BenefitVisual = () => {
    return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* L'image principale  */}
      <div className="relative z-0 rounded-3xl overflow-hidden ">
        <img src="/pc.png" alt="Productivity" className="w-full  h-auto object-cover" />
      </div>

      <FloatingItem className="bottom-[50%] -right-22 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3" delay={0.2}>
        <div>
          <p className="text-xs text-gray-400 font-regular">Total Income</p>
          <div className='flex justify-between gap-6'>
          <p className="text-lg font-bold ">$245.00</p>
          <img src="./bar.svg" alt="" />
          </div>
        </div>
      </FloatingItem>
      <FloatingItem className="bottom-0 -left-[30%] bg-white p-4 rounded-xl shadow-xl flex items-center gap-3" delay={0.2}>
          <div className='flex justify-between gap-6'>
            <CheckCircleIcon size={32} className="text-green"/>
          <p className="text-lg font-semibold  ">Money Transfer Succesfull</p>
          
        </div>
      </FloatingItem>
      <FloatingItem className="top-6 -left-22 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3" delay={0.2}>
        <div className='flex items-center gap-8 '>
            <img src="./people.png" className="w-14 h-14 " />
          <div>
          <p className="text-lg font-bold ">Amanda Young</p>
          <p className="text-xs text-gray-400 font-regular"> Expert Saving Money </p>
          </div>
            <button className='text-white cursor-pointer bg-green rounded-full w-8 h-8 flex items-center justify-center'> 
                <ChatCircleIcon size={28} className="text-white" />
            </button>
        </div>
      </FloatingItem>

      <FloatingItem className="top-[30%] -left-28 bg-[#74C9A9] p-3 rounded-xl shadow-lg -rotate-15" delay={0.4}>
        <ImageIcon size={32} className="text-white" />
      </FloatingItem>


    </div>
    )
}

export default BenefitVisual