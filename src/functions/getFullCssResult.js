function getFullCssResult(shapeRadius){
    
    return `border-radius: ${
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
    };`;

}

export default getFullCssResult;