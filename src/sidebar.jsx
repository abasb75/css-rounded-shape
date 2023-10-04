import Input from "./input";
import { useDispatch, useSelector } from "react-redux";
import { setHeight, setWidth } from "./store/shapeSize";
import InputType from "./inputType";

export default function Sidebar(){
    
    const dispatch = useDispatch();

    const shapeSize = useSelector(state=>state.shapeSize);

    const setShapeWidth = (width)=>{
        const preg = /^(|[1-9][0-9]{0,2})$/;
        if(!preg.exec(width)) return;
        if(parseInt(width) > 600 ) return;
        dispatch(setWidth(parseInt(width)));
    }

    const setShapeHeight = (height)=>{
        const preg = /^(|[1-9][0-9]{0,2})$/;
        if(!preg.exec(height)) return;
        if(parseInt(height) > 600 ) return;
        dispatch(setHeight(parseInt(height)));
    }
    
    return (<div className="w-80 h-full p-2">
        <div className="w-full h-full bg-white dark:bg-slate-800 rounded-lg shadow-md px-2">
            <div className="flex w-full py-3 ">
                <div className="flex flex-col  gap-4 w-full">
                    <InputType />
                    <Input name={'width'} placehoder={'width'} value={shapeSize.width} setValue={setShapeWidth} />
                    <Input name={'height'} placehoder={'height'} value={shapeSize.height} setValue={setShapeHeight} />
                
                </div>
            </div>
        </div>
        
    </div>);
}