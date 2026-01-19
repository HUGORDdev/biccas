import AnimetedUnderline from '../common/AnimatedUnderline'
import { HeroVisual } from '../common/HeroVisual'

const Hero = () => {
    return (
        <div className="mx-6 md:mx-20 mt-10 md:mt-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
            
            <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-10 text-center lg:text-left items-center lg:items-start">
                
                <h1 className="font-inter font-bold text-4xl md:text-6xl xl:text-[76px] leading-[1.1] lg:leading-[0.90] max-w-2xl">
                    We’re here to Increase your Productivity
                </h1>
                
                <div className="w-full flex items-center max-w-75 md:max-w-none">
                    <AnimetedUnderline />
                </div>

                <p className='font-inter font-medium text-base md:text-[18px] leading-normal max-w-md text-black'>
                    Let's make your work more organize and easily using the Taskio Dashboard with many of the latest features in managing work every day.
                </p>

                <div className='flex flex-wrap justify-center lg:justify-start items-center gap-4 w-full'>
                    <button className='w-full sm:w-41 h-14 md:h-15.5 rounded-full text-center text-white font-medium text-lg bg-green cursor-pointer hover:shadow-lg transition-shadow'>
                        Try free trial
                    </button>
                    <button className='w-full sm:w-41 h-14 md:h-15.5 rounded-full font-medium text-lg border border-[#ccc] flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors'>
                        <img src="./Play.png" className='w-6 h-6' alt="" />
                        View Demo
                    </button>
                </div>
            </div>

            <div className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
                <div className="scale-75 md:scale-90 lg:scale-100 transition-transform">
                    <HeroVisual/>
                </div>
            </div>
        </div>
    )
}

export default Hero