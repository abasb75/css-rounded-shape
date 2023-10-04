import { useDispatch, useSelector } from "react-redux";
import { setBottomLeftX, setBottomLeftY, setBottomRightX, setBottomRightY, setTopLeftX, setTopLeftY, setTopRightX, setTopRightY } from "../store/shapeRadius";

function FullShapeControllerTrack(){
    return (<div className="w-full h-full top-0 left-0 absolute ">
        <TopLeftXTrack />
        <TopLeftYTrack />

        <TopRightXTrack />
        <TopRightYTrack />

        <BottomRightXTrack />
        <BottomRightYTrack />

        <BottomLeftXTrack />
        <BottomLeftYTrack />
        
    </div>);
}

function TopLeftXTrack(){
    const topLeftX = useSelector(s=>s.shapeRadius.topLeft.x);
    const dispatch = useDispatch();
    return (<input
        className="slider top-left x absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}  
        value={topLeftX}  
        onChange={(e)=>dispatch(setTopLeftX(e.target.value))}
    />);
}

function TopLeftYTrack(){
    const topLeftY = useSelector(s=>s.shapeRadius.topLeft.y);
    const dispatch = useDispatch();
    return (<input
        className="slider top-left y absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}
        value={topLeftY}  
        onChange={(e)=>dispatch(setTopLeftY(e.target.value))}
    />);
}


function TopRightXTrack(){
    const topRightX = useSelector(s=>s.shapeRadius.topRight.x);
    const dispatch = useDispatch();
    return (<input
        className="slider top-right x absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}  
        value={topRightX}  
        onChange={(e)=>dispatch(setTopRightX(e.target.value))}
    />);
}

function TopRightYTrack(){
    const topRightY = useSelector(s=>s.shapeRadius.topRight.y);
    const dispatch = useDispatch();
    return (<input
        className="slider top-right y absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}  
        value={topRightY}  
        onChange={(e)=>dispatch(setTopRightY(e.target.value))}
    />);
}


function BottomLeftXTrack(){
    const bottomLeftX = useSelector(s=>s.shapeRadius.bottomLeft.x);
    const dispatch = useDispatch();
    return (<input
        className="bottom-left slider absolute bottom-0 left-[-1px] w-full "
        value={bottomLeftX}  
        type="range" 
        step={1} 
        min={0}
        max={100}
        onChange={(e)=>dispatch(setBottomLeftX(e.target.value))}
    />);
}

function BottomLeftYTrack(){
    const bottomLeftY = useSelector(s=>s.shapeRadius.bottomLeft.y);
    const dispatch = useDispatch();
    return (<input
        className="bottom-left slider track-bottom-left-y absolute bottom-0 left-[-1px] w-full"
        value={bottomLeftY}  
        type="range" 
        step={1} 
        min={0}
        max={100}  
        onChange={(e)=>dispatch(setBottomLeftY(e.target.value))}
    />);
}




function BottomRightXTrack(){
    const bottomRightX = useSelector(s=>s.shapeRadius.bottomRight.x);
    const dispatch = useDispatch();
    return (<input
        className="slider bottom-right x absolute bottom-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}  
        value={bottomRightX}  
        onChange={(e)=>dispatch(setBottomRightX(e.target.value))}
    />);
}

function BottomRightYTrack(){
    const bottomRightY = useSelector(s=>s.shapeRadius.bottomRight.y);
    const dispatch = useDispatch();
    return (<input
        className="slider bottom-right y absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}  
        value={bottomRightY} 
        onChange={(e)=>dispatch(setBottomRightY(e.target.value))}
    />);
}



export default FullShapeControllerTrack;