function getSimpleCssResult(shapeRadius){
    return `border-radius: ${
        shapeRadius.topLeft + '' + shapeRadius.topLeftUnit
    } ${
        shapeRadius.topRight + shapeRadius.topRightUnit
    } ${
        shapeRadius.bottomRight + shapeRadius.bottomRightUnit
    } ${
        shapeRadius.bottomLeft + shapeRadius.bottomLeftUnit
    };`;
}

export default getSimpleCssResult;