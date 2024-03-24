import React from 'react'
import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Icons:any = {
  '0':<PiSuitcaseSimple className=' w-20 h-16 text-green-500' />,
  '1':<AiOutlineUsergroupAdd className=' w-20 h-16 text-green-500' />,
  '2':<FaAward className=' w-20 h-16 text-green-500' />,
  '3':<BsStars className=' w-20 h-16 text-green-500' />
}

interface IProps {
  index:number;
  title:number;
  subtitle:string;
}

const ExperienceCard = ({index,title,subtitle}:IProps) => {
  return (
    <div className={`h-auto flex justify-start items-start gap-3`}>
        {Icons[index]}
        <div className='h-full flex justify-start items-start flex-col gap-1'>
            <h1 className=' text-3xl text-primary-fg font-mont font-bold'>{title}</h1>
            <h1 className=' text-base text-primary-fg font-mont font-bold'>{subtitle}</h1>
        </div>
    </div>
  )
}

export default ExperienceCard