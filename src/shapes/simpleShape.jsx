import { useSelector } from "react-redux";

function SimpleShape(){

    const shapeSize = useSelector(state=>state.shapeSize);
    const shapeRadius = useSelector(state=>state.simpleRadius);

    console.log(shapeRadius)


    return (<div 
        className="w-full h-full top-0 left-0 absolute flex justify-center items-center" 
        >
            {shapeRadius && <div 
            className="bg-pink-500 dark:bg-gray-200"
            style={{
                width:`${shapeSize.width}px`,
                height:`${shapeSize.height}px`,
                borderRadius:`${
                    shapeRadius.topLeft + '' + shapeRadius.topLeftUnit
                } ${
                    shapeRadius.topRight + shapeRadius.topRightUnit
                } ${
                    shapeRadius.bottomRight + shapeRadius.bottomRightUnit
                } ${
                    shapeRadius.bottomLeft + shapeRadius.bottomLeftUnit
                }`,
            }}></div>}

    </div>);
}

export default SimpleShape;