import { useDispatch, useSelector } from "react-redux";
import { setBottomLeftUX, setBottomLeftUY, setBottomLeftX, setBottomLeftY, setBottomRightUX, setBottomRightUY, setBottomRightX, setBottomRightY, setTopLeftUX, setTopLeftUY, setTopLeftX, setTopLeftY, setTopRightUX, setTopRightUY, setTopRightX, setTopRightY } from "../store/shapeRadius";

function FullShapeControllerInput(){
    return (<>
        <div className="w-full h-full top-0 left-0 absolute ">
            <TopLeftXInput />
            <TopLeftYInput />

            <TopRightXInput />
            <TopRightYInput />

            <BottomRightXInput />
            <BottomRightYInput />

            <BottomLeftXInput />
            <BottomLeftYInput />
            
        </div>
    </>);
}


function TopLeftXInput(){
    const topLeftX = useSelector(s=>s.shapeRadius.topLeft.x);
    const topLeftUX = useSelector(s=>s.shapeRadius.topLeft.ux);
    const dispatch = useDispatch();
    return (<div className="top-[-48px] left-1 flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={topLeftX}  
            type="number"  
            onChange={(e)=>dispatch(setTopLeftX(e.target.value))}
        />
        <select
            value={topLeftUX}
            onChange={(e)=>dispatch(setTopLeftUX(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}

function TopLeftYInput(){
    const topLeftY = useSelector(s=>s.shapeRadius.topLeft.y);
    const topLeftUY = useSelector(s=>s.shapeRadius.topLeft.uy);
    const dispatch = useDispatch();
    return (<div className="top-[4px] left-[-52px] flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={topLeftY}  
            type="number"  
            onChange={(e)=>dispatch(setTopLeftY(e.target.value))}
        />
        <select
            value={topLeftUY}
            onChange={(e)=>dispatch(setTopLeftUY(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}

function BottomLeftYInput(){
    const bottomLeftY = useSelector(s=>s.shapeRadius.bottomLeft.y);
    const bottomLeftUY = useSelector(s=>s.shapeRadius.bottomLeft.uy);
    const dispatch = useDispatch();
    return (<div className="bottom-[4px] left-[-52px] flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={bottomLeftY}  
            type="number"  
            onChange={(e)=>dispatch(setBottomLeftY(e.target.value))}
        />
        <select
            value={bottomLeftUY}
            onChange={(e)=>dispatch(setBottomLeftUY(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}

function BottomLeftXInput(){
    const bottomLeftX = useSelector(s=>s.shapeRadius.bottomLeft.x);
    const bottomLeftUX = useSelector(s=>s.shapeRadius.bottomLeft.ux);
    const dispatch = useDispatch();
    return (<div className="bottom-[-48px] left-1 flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={bottomLeftX}  
            type="number"  
            onChange={(e)=>dispatch(setBottomLeftX(e.target.value))}
        />
        <select
            value={bottomLeftUX}
            onChange={(e)=>dispatch(setBottomLeftUX(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}


function BottomRightXInput(){
    const bottomRightX = useSelector(s=>s.shapeRadius.bottomRight.x);
    const bottomRightUX = useSelector(s=>s.shapeRadius.bottomRight.ux);
    const dispatch = useDispatch();
    return (<div className="bottom-[-48px] right-1 flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={bottomRightX}  
            type="number"  
            onChange={(e)=>dispatch(setBottomRightX(e.target.value))}
        />
        <select
            value={bottomRightUX}
            onChange={(e)=>dispatch(setBottomRightUX(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}


function BottomRightYInput(){
    const bottomRightY = useSelector(s=>s.shapeRadius.bottomRight.y);
    const bottomRightUY = useSelector(s=>s.shapeRadius.bottomRight.uy);
    const dispatch = useDispatch();
    return (<div className="bottom-[4px] right-[-52px] flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={bottomRightY}  
            type="number"  
            onChange={(e)=>dispatch(setBottomRightY(e.target.value))}
        />
        <select
            value={bottomRightUY}
            onChange={(e)=>dispatch(setBottomRightUY(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}














function TopRightXInput(){
    const topRightX = useSelector(s=>s.shapeRadius.topRight.x);
    const topRightUX = useSelector(s=>s.shapeRadius.topRight.ux);
    const dispatch = useDispatch();
    return (<div className="top-[-48px] right-1 flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={topRightX}  
            type="number"  
            onChange={(e)=>dispatch(setTopRightX(e.target.value))}
        />
        <select
            value={topRightUX}
            onChange={(e)=>dispatch(setTopRightUX(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}


function TopRightYInput(){
    const topRightY = useSelector(s=>s.shapeRadius.topRight.y);
    const topRightUY = useSelector(s=>s.shapeRadius.topRight.uy);
    const dispatch = useDispatch();
    return (<div className="top-[4px] right-[-52px] flex flex-col gap-1 absolute">
        <input
            className="border-2 border-slate-300 w-10 rounded-md text-xs"
            value={topRightY}  
            type="number"  
            onChange={(e)=>dispatch(setTopRightY(e.target.value))}
        />
        <select
            value={topRightUY}
            onChange={(e)=>dispatch(setTopRightUY(e.target.value))}
            className="border-2 border-slate-300 w-10  rounded-md text-xs"
        >
            <option value={'%'} >%</option>
            <option value={'px'} >px</option>
        </select>
    </div>);
}

























export default FullShapeControllerInput;