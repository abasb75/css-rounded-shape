import { useDispatch, useSelector } from "react-redux";
import { BorderType, setBorderType } from "./store/conf";
import { useState } from "react";

export default function InputType(){

    const borderType = useSelector(s=>s.conf.borderType);
    const dispatch = useDispatch();

    const [showOptions,setShowOptions] = useState(false);

    const setBorderTypeOnConf = (type)=>{
        dispatch(setBorderType(type));
        setShowOptions(false);
    }

    return (<div className="flex flex-col gap-2 w-full">
        <label className="text-xs dark:text-pink-400">canvas type :</label>
        <div className="border-2 border-slate-300 dark:bg-slate-60 rounded-lg w-full h-10 cursor-pointer">
            <span 
                onClick={()=>setShowOptions(true)}
                className="h-full w-full flex items-center px-2 justify-between ">
                <span className="dark:text-gray-100">{borderType ? borderType : 'UNDEFINED'}</span>
                <span className="tail"></span>
            </span>
            {showOptions && <div className="w-full h-36 py-1 z-10 relative">
                <div className="overflow-hidden w-full h-full bg-white border-2 border-slate-200  rounded-lg flex flex-col">
                    <div 
                    onClick={()=>setBorderTypeOnConf(BorderType.FULL)}
                    className="dark:bg-slate-600 h-1/3 w-full leading-10 px-4 transition-all hover:bg-blue-800 dark:hover:bg-blue-500 dark:text-gray-100 hover:text-white">
                        {BorderType.FULL}
                        </div>
                    <div 
                    onClick={()=>setBorderTypeOnConf(BorderType.FANCY)}
                    className="dark:bg-slate-600 h-1/3 w-full leading-10 px-4 transition-all hover:bg-blue-800 dark:hover:bg-blue-500 dark:text-gray-100 hover:text-white">{
                    BorderType.FANCY}
                    </div>
                    <div 
                    onClick={()=>setBorderTypeOnConf(BorderType.SIMPLE)}
                    className="dark:bg-slate-600 h-1/3 w-full leading-10 px-4 transition-all hover:bg-blue-800 dark:hover:bg-blue-500 dark:text-gray-100 hover:text-white">
                        {BorderType.SIMPLE}
                    </div>
                </div>
            </div>}


        </div>
    </div>);

}