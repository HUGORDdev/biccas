import AnimetedUnderline from '../common/AnimatedUnderline'
const Hero = () => {
    return (
        <div className="mx-20 mt-20 w-full">
            <div className="w-1/2 flex flex-col gap-10">
                <p className="font-inter font-bold w-150.5 text-[76px]   leading-[0.90]">We’re here to Increase your Productivity</p>
                <AnimetedUnderline />
                <p className='font-inter font-medium text-[18px] leading-[1.3] w-115.25 text-black '>
                    Let's make your work more organize and easily using the Taskio Dashboard with many of the latest featuresin managing work every day.
                </p>

                <div>
                    <button className='w-41 h-15.5 rounded-4xl text-center text-white font-medium text-lg bg-green'>Try free trial</button>
                </div>
            </div>
            <div className="w-1/2"></div>
        </div>
    )
}

export default Hero