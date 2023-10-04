import { useSelector } from "react-redux";
import { BorderType } from "./store/conf";
import FullShape from "./shapes/fullShape";
import FullShapeControllerTrack from "./shapesControllers/fullControllerTrack";
import FullShapeControllerInput from "./shapesControllers/fullShapeControllerInput";
import FancyShape from "./shapes/fancyShape";
import FancyShapeControllerTrack from "./shapesControllers/fancyControllerTrack";
import SimpleShape from "./shapes/simpleShape";
import SimpleShapeControllerInput from "./shapesControllers/simpleShapeControllerInput";

function CanvasController(){
    const borderType = useSelector(s=>s.conf.borderType);
    switch(borderType){
        case BorderType.FANCY:
            return (<>
                <FancyShape />
                <FancyShapeControllerTrack />
            </>);
        case BorderType.SIMPLE:
            return (<>
                <SimpleShape />
                <SimpleShapeControllerInput />
            </>);
        case BorderType.FULL:
        default:
            return (<>
                <FullShape />
                <FullShapeControllerInput />
                <FullShapeControllerTrack />
            </>);

            
    }
}

export default CanvasController;