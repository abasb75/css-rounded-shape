import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function FancyShape(){

    const shapeContainerRef = useRef(null);
    const shapeSize = useSelector(state=>state.shapeSize);
    const shapeRadius = useSelector(state=>state.fancyRadius);

    useEffect(()=>{
        const containerWidth = shapeContainerRef.current.offsetWidth;
        const containerHeight = shapeContainerRef.current.offsetHeight;

    },[shapeSize,shapeRadius]);


    return (<div 
        className="w-full h-full top-0 left-0 absolute flex justify-center items-center" 
        ref={shapeContainerRef}>

            {shapeRadius && <div 
            className="bg-pink-500  dark:bg-gray-200"
            style={{
                width:`${shapeSize.width}px`,
                height:`${shapeSize.height}px`,
                borderRadius:`${
                    shapeRadius.topLeft.x
                }% ${
                    shapeRadius.topRight.x
                }% ${
                    shapeRadius.bottomRight.x
                }% ${
                    shapeRadius.bottomLeft.x
                }% / ${
                    shapeRadius.topLeft.y
                }% ${
                    shapeRadius.topRight.y
                }% ${
                    shapeRadius.bottomRight.y
                }% ${
                    shapeRadius.bottomLeft.y
                }%`,

            }}></div>}

    </div>);
}

export default FancyShape;