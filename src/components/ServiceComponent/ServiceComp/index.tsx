
import React from 'react'
import { IoHardwareChipOutline } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { CiDesktop } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LiaHandsSolid } from "react-icons/lia";


const Icons:any = {
    '0':<IoHardwareChipOutline className="min-w-[112px] w-28 h-28 text-green-600" />,
    '1':<LiaHandsSolid className="min-w-[112px] w-28 h-28 text-green-600" />,
    '2':<CiMobile3 className="min-w-[112px] w-28 h-28 text-green-600" />,
    '3':<CiDesktop className="min-w-[112px] w-28 h-28 text-green-600" />,
    '4':<MdOutlineShoppingCart className="min-w-[112px] w-28 h-28 text-green-600" />,
    '5':<HiOutlineSpeakerphone className="min-w-[112px] w-28 h-28 text-green-600" />,
}

interface IProps {
    index:number;
    title:string;
    subTitle:string;
    description:string;
}

const ServiceComponents = ({index,title,subTitle,description}:IProps) => {
  return (
    <div className='relative group p-4 rounded hover:shadow-lg hover:shadow-slate-950/20 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex justify-center flex-col items-center gap-2 overflow-hidden'>
        {Icons[index]}
        <h1 className={`text-center text-xl font-bold mt-2 text-primary-fg font-mont`}>{title}</h1>
        <h4 className={`text-sm text-center text-secondary-fg font-mont`}>{subTitle}</h4>
        <div className={`absolute bottom-[-100%] left-0 group-hover:bottom-0 transition-all duration-300 w-full h-full text-slate-50 backdrop-blur`}>
          <div className={`absolute left-0 bottom-0 w-full h-auto bg-green-500 p-3 text-sm font-mont`}>
          {description}
          </div>
        </div>
    </div>
  )
}

export default ServiceComponents