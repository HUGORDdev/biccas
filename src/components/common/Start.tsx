import { StarIcon } from '@phosphor-icons/react'

interface StartProps {
    number:number;
}

const Start = ({number}:StartProps) => {
    const Tab = Array.from({ length: 5 })
  return (
    <div className="flex gap-0.75">
        {Tab.map((_,index)=>{
            return(
                <StarIcon size={26} weight='fill' className={`${number>=(index+1)?'text-[#FFC728]':'text-[#BBB]'}`}/>
            )
        })}
        
    </div>
  )
}

export default Start
