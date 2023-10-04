import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function FullShape(){

    const shapeContainerRef = useRef(null);
    const shapeSize = useSelector(state=>state.shapeSize);
    const shapeRadius = useSelector(state=>state.shapeRadius);

    useEffect(()=>{
        const containerWidth = shapeContainerRef.current.offsetWidth;
        const containerHeight = shapeContainerRef.current.offsetHeight;

    },[shapeSize,shapeRadius]);


    return (<div 
        className="w-full h-full top-0 left-0 absolute flex justify-center items-center" 
        ref={shapeContainerRef}>

            {shapeRadius && <div 
            className="bg-pink-500 dark:bg-gray-200"
            style={{
                width:`${shapeSize.width}px`,
                height:`${shapeSize.height}px`,
                borderRadius:`${
                    shapeRadius.topLeft.x + shapeRadius.topLeft.ux
                } ${
                    shapeRadius.topRight.x + shapeRadius.topRight.ux
                } ${
                    shapeRadius.bottomRight.x + shapeRadius.bottomRight.ux
                } ${
                    shapeRadius.bottomLeft.x + shapeRadius.bottomLeft.ux
                } / ${
                    shapeRadius.topLeft.y + shapeRadius.topLeft.uy
                } ${
                    shapeRadius.topRight.y + shapeRadius.topRight.uy
                } ${
                    shapeRadius.bottomRight.y  + shapeRadius.bottomRight.uy
                } ${
                    shapeRadius.bottomLeft.y +  shapeRadius.bottomLeft.uy
                }`,

            }}></div>}

    </div>);
}

export default FullShape;