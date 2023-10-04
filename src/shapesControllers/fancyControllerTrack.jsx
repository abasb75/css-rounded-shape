import { useDispatch, useSelector } from "react-redux";
import { setBottom, setLeft, setRight, setTop } from "../store/fancyRadius";


function FancyShapeControllerTrack(){
    return (<div className="w-full h-full top-0 left-0 absolute ">
        <BottomTrack />
        <RightTrack />
        <TopTrack />
        <LeftTrack />
    </div>);
}

function LeftTrack(){
    const topLeftY = useSelector(s=>s.fancyRadius.topLeft.y);
    const dispatch = useDispatch();
    return (<input
        className="slider top-left y absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}
        value={topLeftY}  
        onChange={(e)=>dispatch(setLeft(e.target.value))}
    />);
}

function TopTrack(){
    const topRightX = useSelector(s=>s.fancyRadius.topRight.x);
    const dispatch = useDispatch();
    return (<input
        className="slider top-right x absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}  
        value={topRightX}  
        onChange={(e)=>dispatch(setTop(e.target.value))}
    />);
}

function RightTrack(){
    const bottomRightY = useSelector(s=>s.fancyRadius.bottomRight.y);
    const dispatch = useDispatch();
    return (<input
        className="slider bottom-right y absolute top-0 left-[-1px] w-full"
        type="range" 
        step={1} 
        min={0}
        max={100}  
        value={bottomRightY}  
        onChange={(e)=>dispatch(setRight(e.target.value))}
    />);
}

function BottomTrack(){
    const bottomLeftX = useSelector(s=>s.fancyRadius.bottomLeft.x);
    const dispatch = useDispatch();
    return (<input
        className="bottom-left slider absolute bottom-0 left-[-1px] w-full "
        value={bottomLeftX}  
        type="range" 
        step={1} 
        min={0}
        max={100}
        onChange={(e)=>dispatch(setBottom(e.target.value))}
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



export default FancyShapeControllerTrack;