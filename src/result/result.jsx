import { useSelector } from "react-redux";
import { BorderType } from "../store/conf";
import FancyResult from "./fancy";
import FullResult from "./full";
import SimpleResult from "./simple";

function Result(){
    const borderType = useSelector(s=>s.conf.borderType);
    switch(borderType){
        case BorderType.FANCY:
            return (<>
                <FancyResult />
            </>);
        case BorderType.SIMPLE:
            return (<>
                <SimpleResult />
            </>)
        case BorderType.FULL:
        default:
            return (<>
                <FullResult />
            </>);

            
    }
}

export default Result;