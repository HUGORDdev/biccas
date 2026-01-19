import { CheckCircleIcon } from "@phosphor-icons/react"
import BenefitVisual from "../common/BenefitVisual"


const Benefit = () => {
    return (
        
        <div className="flex m-20 justify-center items-stretch gap-20">
            <div className="flex flex-col">
                <p className="font-bold text-[50px]">What Benefit Will You Get</p>

               
                <ul className="mt-10 flex flex-col justify-between flex-1">
                    <li className="flex items-center">
                        <CheckCircleIcon size={32} weight="fill" className="text-green" />
                        <p className="pl-3 font-medium text-lg">Free Consulting With Expert Saving Money</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={32} weight="fill" className="text-green" />
                        <p className="pl-3 font-medium text-lg">Online Banking</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={32} weight="fill" className="text-green" />
                        <p className="pl-3 font-medium text-lg">Investment Report Every Month</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={32} weight="fill" className="text-green" />
                        <p className="pl-3 font-medium text-lg">Saving Money For The Future</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={32} weight="fill" className="text-green" />
                        <p className="pl-3 font-medium text-lg">Saving Money For The Future</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={32} weight="fill" className="text-green" />
                        <p className="pl-3 font-medium text-lg">Saving Money For The Future</p>
                    </li>
                    <li className="flex items-center">
                        <CheckCircleIcon size={32} weight="fill" className="text-green" />
                        <p className="pl-3 font-medium text-lg">Online Transaction</p>
                    </li>
                </ul>
            </div>

            <BenefitVisual />
        </div>
    )

}

export default Benefit