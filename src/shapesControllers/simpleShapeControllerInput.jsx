import { useDispatch, useSelector } from "react-redux";
import { setBottomLeft, setBottomLeftUnit, setBottomRight, setBottomRightUnit, setTopLeft, setTopLeftUnit, setTopRight, setTopRightUnit } from "../store/simpleRadius";

function SimpleShapeControllerInput(){
    return (<>
        <div className="w-full h-full top-0 left-0 absolute ">
            <TopLeftInput />
            <TopRightInput />
            <BottomRightInput />
            <BottomLeftInput />


        </div>
    </>);
}

function BottomLeftInput(){
    const bottomLeft = useSelector(s=>s.simpleRadius.bottomLeft);
    const bottomLeftUnit = useSelector(s=>s.simpleRadius.bottomLeftUnit);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-1 absolute bottom-[-48px] left-[-50px] ">
            <input
                className="border-2 border-slate-300 w-10 rounded-md text-xs"
                value={bottomLeft}  
                type="number"  
                onChange={(e)=>dispatch(setBottomLeft(e.target.value))}
            />
            <select 
            onChange={(e)=>dispatch(setBottomLeftUnit(e.target.value))}
            value={bottomLeftUnit}
            className="border-2 border-slate-300 w-10   rounded-md text-xs">
                <option value={'%'}>%</option>
                <option value={'px'}>px</option>
            </select>
        </div>
    );
}


function BottomRightInput(){
    const bottomRight = useSelector(s=>s.simpleRadius.bottomRight);
    const bottomRightUnit = useSelector(s=>s.simpleRadius.bottomRightUnit);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-1 absolute bottom-[-48px] right-[-50px] ">
            <input
                className="border-2 border-slate-300 w-10 rounded-md text-xs"
                value={bottomRight}  
                type="number"  
                onChange={(e)=>dispatch(setBottomRight(e.target.value))}
            />
            <select 
            onChange={(e)=>dispatch(setBottomRightUnit(e.target.value))}
            value={bottomRightUnit}
            className="border-2 border-slate-300 w-10   rounded-md text-xs">
                <option value={'%'}>%</option>
                <option value={'px'}>px</option>
            </select>
        </div>
    );
}

function TopRightInput(){
    const topRight = useSelector(s=>s.simpleRadius.topRight);
    const topRightUnit = useSelector(s=>s.simpleRadius.topRightUnit);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-1 absolute top-[-48px] right-[-50px] ">
            <input
                className="border-2 border-slate-300 w-10 rounded-md text-xs"
                value={topRight}  
                type="number"  
                onChange={(e)=>dispatch(setTopRight(e.target.value))}
            />
            <select 
            onChange={(e)=>dispatch(setTopRightUnit(e.target.value))}
            value={topRightUnit}
            className="border-2 border-slate-300 w-10   rounded-md text-xs">
                <option value={'%'}>%</option>
                <option value={'px'}>px</option>
            </select>
        </div>
    );
}

function TopLeftInput(){
    const topLeft = useSelector(s=>s.simpleRadius.topLeft);
    const topLeftUnit = useSelector(s=>s.simpleRadius.topLeftUnit);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col gap-1 absolute top-[-48px] left-[-50px] ">
            <input
                className="border-2 border-slate-300 w-10 rounded-md text-xs"
                value={topLeft}  
                type="number"  
                onChange={(e)=>dispatch(setTopLeft(e.target.value))}
            />
            <select 
            onChange={(e)=>dispatch(setTopLeftUnit(e.target.value))}
            value={topLeftUnit}
            className="border-2 border-slate-300 w-10   rounded-md text-xs">
                <option value={'%'}>%</option>
                <option value={'px'}>px</option>
            </select>
        </div>
    );
}


export default SimpleShapeControllerInput;