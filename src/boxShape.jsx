import { useEffect, useRef } from "react";
import CanvasController from "./canvasController";
import Result from "./result/result";

export default function BoxShape(){
    const borderManagerRef = useRef(null);

    useEffect(()=>{
        const w = borderManagerRef.current.offsetWidth;
        const h = borderManagerRef.current.offsetHeight;
        borderManagerRef.current.style.width = h + 'px';
        window.addEventListener('resize',()=>{
            borderManagerRef.current.style.width = h + 'px';
        })
        console.log(w,h);
    },[])

    return (<div className="w-full h-full px-2 py-2 ">
        <div className="block w-full h-full rounded-lg ">
            <div className=" flex bg-white dark:bg-slate-800 w-full h-full rounded-lg shadow">
                <div ref={borderManagerRef} className=" p-14 w-full h-full top-0 left-0 flex">
                    <div 
                    className="w-full h-full flex justify-center items-center border-dashed border-slate-300 border-2 relative">
                        <CanvasController />
                    </div>
                </div>
                <Result />
            </div>
        </div>
    </div>);
}

