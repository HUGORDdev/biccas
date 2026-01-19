import React from 'react'
import Start from '../common/Start'

const How = () => {
    return (
        <div className='flex justify-center mt-20 bg-[#F9F8FE] py-15 px-10'>
            <div className='flex w-1/2 flex-col gap-10'>
                <p className='font-semibold text-[50px] w-154'>How we support our pratner all over the world</p>
                <p className='font-medium leading-[1.3] w-161 text-text-gray'>SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
                <div className="flex items-start gap-20">
                    <div className='flex flex-col gap-4.5 justify-start'>
                        <Start number={5} />
                        <p className='font-bold text-lg'>
                            4.9 <span className='font-medium text-lg'> /5 rating</span>
                        </p>
                        <span className='font-bold text-lg text-text-gray'>databricks</span>
                    </div>
                    <div className='flex flex-col gap-4.5 justify-start'>
                        <Start number={4} />
                        <p className='font-bold text-lg'>
                            4.8 <span className='font-medium text-lg'> /5 rating</span>
                        </p>
                        <span className='font-bold text-lg text-text-gray'>Chainalysis</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-between'>
                <div className='flex gap-2 items-start'>
                    <div className='w-13 h-10 rounded-sm  items-center justify-center flex  bg-white shadow-2xl '>
                        <img src="./publishing.svg" className='' />
                    </div>
                    <div >
                        <p className='font-bold text-[28px]'>Publishing</p>
                        <p className='font-medium text-lg leading-[1.30] text-text-gray w-107'> Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
                    </div>

                </div>
                <div className='flex gap-2 items-start'>
                    <div className='w-10 h-10 rounded-sm  items-center justify-center flex bg-white shadow-2xl '>
                        <img src="./analytics.svg" className='' />
                    </div>
                    <div>
                        <p className='font-bold text-[28px]'>Analytics</p>
                        <p className='font-medium text-lg leading-[1.30] text-text-gray w-107'>Analyze your performance and create goegeous report</p>
                    </div>

                </div>
                <div className='flex gap-2 items-start'>
                    <div className='w-10 h-10 rounded-sm  items-center justify-center flex bg-white shadow-2xl '>
                        <img src="./publishing.svg" className='' />
                    </div>
                    <div>
                        <p className='font-bold text-[28px]'>Engagement</p>
                        <p className='font-medium text-lg leading-[1.30] text-text-gray w-107'>Quiuckly navigate you anda engage with your adience</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default How