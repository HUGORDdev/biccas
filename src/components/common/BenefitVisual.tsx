import { ChatCircleIcon, CheckCircleIcon, ImageIcon } from "@phosphor-icons/react"
import { FloatingItem } from "./HeroVisual"

const BenefitVisual = () => {
    return (
        <div className="relative w-full max-w-lg mx-auto lg:mx-0 mt-10 lg:mt-0">
            {/* L'image principale - Ajout d'une bordure subtile pour le contraste */}
            <div className="relative z-0 rounded-3xl overflow-hidden border border-gray-100 shadow-lg">
                <img src="/pc.png" alt="Productivity" className="w-full h-auto object-cover" />
            </div>

            {/* Total Income - Positionné différemment sur mobile */}
            <FloatingItem 
                className="absolute bottom-[10%] -right-4 lg:bottom-[50%] lg:-right-22 bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 z-10" 
                delay={0.2}
            >
                <div>
                    <p className="text-[10px] md:text-xs text-gray-400 font-regular">Total Income</p>
                    <div className='flex justify-between gap-4 md:gap-6'>
                        <p className="text-sm md:text-lg font-bold">$245.00</p>
                        <img src="./bar.svg" alt="" className="w-8 md:w-auto" />
                    </div>
                </div>
            </FloatingItem>

            {/* Money Transfer - On le remonte un peu sur mobile pour éviter qu'il soit coupé */}
            <FloatingItem 
                className="absolute -bottom-6 -left-4 lg:bottom-0 lg:-left-[20%] bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 z-10" 
                delay={0.2}
            >
                <div className='flex items-center gap-3 md:gap-6'>
                    <CheckCircleIcon size={24} className="text-green md:w-8 md:h-8" />
                    <p className="text-xs md:text-lg font-semibold whitespace-nowrap">Money Transfer Successful</p>
                </div>
            </FloatingItem>

            {/* Amanda Young - Masqué sur mobile très petit ou simplifié */}
            <FloatingItem 
                className="absolute -top-10 -left-4 lg:top-6 lg:-left-22 bg-white p-3 md:p-4 rounded-xl shadow-xl flex items-center gap-3 z-10 scale-90 md:scale-100" 
                delay={0.2}
            >
                <div className='flex items-center gap-4 md:gap-8'>
                    <img src="./people.png" className="w-10 h-10 md:w-14 md:h-14 rounded-full" alt="Amanda" />
                    <div>
                        <p className="text-sm md:text-lg font-bold whitespace-nowrap">Amanda Young</p>
                        <p className="text-[10px] md:text-xs text-gray-400 font-regular">Expert Saving Money</p>
                    </div>
                    <button className='hidden sm:flex text-white cursor-pointer bg-green rounded-full w-8 h-8 items-center justify-center hover:scale-110 transition-transform'> 
                        <ChatCircleIcon size={20} className="text-white" />
                    </button>
                </div>
            </FloatingItem>

            {/* Icone Verte Flottante - Masquée sur mobile pour ne pas surcharger */}
            <FloatingItem 
                className="hidden md:block absolute top-[30%] -left-16 lg:-left-28 bg-[#74C9A9] p-3 rounded-xl shadow-lg -rotate-15" 
                delay={0.4}
            >
                <ImageIcon size={32} className="text-white" />
            </FloatingItem>
        </div>
    )
}

export default BenefitVisual