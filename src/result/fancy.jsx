import { useDispatch, useSelector } from "react-redux";
import getFancyCssResult from "../functions/getFancyCssResult";
import getFancyTailwindResult from "../functions/getFancyTailwindResult";
import copy from "../functions/copy";
import { resetFancyShapeRadius } from "../store/fancyRadius";

function FancyResult(){
    const shapeSize = useSelector(s=>s.shapeSize);
    const shapeRadius = useSelector(s=>s.fancyRadius);
    const cssResult = getFancyCssResult(shapeRadius);
    const tailwindResult = getFancyTailwindResult(shapeRadius);
    const dispatch = useDispatch();

    return (<div className="border-l-[1px] border-slate-100 dark:border-slate-600 h-full p-4 flex-1">
        <div className="flex flex-col">
            <h3 className="text-xs text-gray-600 dark:text-pink-300">CSS Result:</h3>
            <div className="flex w-full text-sm border-2 bg-slate-50 dark:bg-slate-600  rounded overflow-hidden justify-between">
                <span className="p-4  text-gray-700 dark:text-gray-200" >{cssResult}</span>
                <button 
                onClick={()=>copy(cssResult)}
                className="bg-pink-600 p-4 text-white h-full cursor-pointer hover:bg-pink-800 transition-all" >Copy</button>
            </div>
        </div>
        <div className="flex flex-col mt-4">
            <h3 className="text-xs text-gray-600 dark:text-pink-300">Tailwind Result:</h3>
            <div className="flex w-full text-sm border-2 bg-slate-50 dark:bg-slate-600 rounded overflow-hidden justify-between">
                <span className="p-4 text-gray-700 dark:text-gray-200" >{tailwindResult}</span>
                <button 
                onClick={()=>copy(tailwindResult)}
                className="bg-pink-600 p-4 text-white h-full cursor-pointer hover:bg-pink-800 transition-all" >Copy</button>
            </div>
        </div>
        <div className="py-4">
            <button 
            onClick={()=>dispatch(resetFancyShapeRadius())}
            className="bg-gray-600 text-white px-4 py-2 rounded-md">Reset Canvas</button>
        </div>
    </div>);
}

export default FancyResult;