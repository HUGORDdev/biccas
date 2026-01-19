
const Product = () => {
    return (
        <div id="product" className="bg-white p-20 ">
            <div className="flex justify-between items-center">
                <p className="font-semibold text-[50px] w-100" >Our Features you cab get</p>
                <p className="font-medium leading-[1.3] text-text-gray text-lg w-1/3" >We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly</p>
                <button className='w-40 h-16.5 rounded-4xl text-center text-white font-medium text-lg bg-green cursor-pointer'>Try free trial</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center mt-20">
                <div className="flex flex-col items-center text-center">
                    <img src="./collboration.svg" alt="" className="w-81 h-105" />
                    <p className="mt-5 font-semibold text-[30px]">Collboration Teams</p>
                    <p className="mt-5 leading-[1.3] font-medium text-lg text-text-gray w-full max-w-xs">
                        Here you can handle projects together with team virtually
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img src="./cloud.svg" alt="" className="w-81 h-105" />
                    <p className="mt-5 font-semibold text-[30px]">Cloud Storage</p>
                    <p className="mt-5 leading-[1.3] font-medium text-lg text-text-gray w-full max-w-xs">
                        No need to worry about storage because we provide storage up to 2 TB
                    </p>
                </div>

                <div className="flex flex-col items-center text-center">
                    <img src="./Daily.svg" alt="" className="w-81 h-105" />
                    <p className="mt-5 font-semibold text-[30px]">Daily Analytics</p>
                    <p className="mt-5 leading-[1.3] font-medium text-lg text-text-gray w-full max-w-xs">
                        We always provide useful information to make it easier for you every day
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Product