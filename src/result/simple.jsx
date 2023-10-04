import { useDispatch, useSelector } from "react-redux";
import getSimpleCssResult from "../functions/getSimpleCssResult";
import getSimpleTailwindResult from "../functions/getSimpleTailwindResult";
import { resetSimpleShapeRadius } from "../store/simpleRadius";
import copy from "../functions/copy";

function SimpleResult(){
    const shapeSize = useSelector(s=>s.shapeSize);
    const shapeRadius = useSelector(s=>s.simpleRadius);
    const cssResult = getSimpleCssResult(shapeRadius);
    const tailwindResult = getSimpleTailwindResult(shapeRadius);
    const dispatch = useDispatch();

    return (<div className="border-l-[1px] border-slate-100 h-full p-4 flex-1">
        <div className="flex flex-col">
            <h3 className="dark:text-pink-300 text-xs text-gray-600">CSS Result:</h3>
            <div className="flex w-full text-sm border-2 bg-slate-50 dark:bg-slate-600 rounded overflow-hidden justify-between">
                <span className="p-4  text-gray-700 dark:text-gray-200" >{cssResult}</span>
                <button 
                onClick={()=>copy(cssResult)}
                className="bg-pink-600 p-4 text-white h-full cursor-pointer hover:bg-pink-800 transition-all" >Copy</button>
            </div>
        </div>
        <div className="flex flex-col mt-4">
            <h3 className="dark:text-pink-300 text-xs text-gray-600">Tailwind Result:</h3>
            <div className="flex w-full text-sm border-2 bg-slate-50 dark:bg-slate-600 rounded overflow-hidden justify-between">
                <span className="p-4 text-gray-700 dark:text-gray-200" >{tailwindResult}</span>
                <button 
                onClick={()=>copy(tailwindResult)}
                className="bg-pink-600 p-4 text-white h-full cursor-pointer hover:bg-pink-800 transition-all" >Copy</button>
            </div>
        </div>
        <div className="py-4">
            <button 
            onClick={()=>dispatch(resetSimpleShapeRadius())}
            className="bg-gray-600 text-white px-4 py-2 rounded-md">Reset Canvas</button>
        </div>
    </div>);
}

export default SimpleResult;