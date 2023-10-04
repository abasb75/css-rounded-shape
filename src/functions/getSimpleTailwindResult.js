function getSimpleTailwindResult(shapeRadius){
    return `rounded-[${
        shapeRadius.topLeft + shapeRadius.topLeftUnit
    }_${
        shapeRadius.topRight + shapeRadius.topRightUnit
    }_${
        shapeRadius.bottomRight + shapeRadius.bottomRightUnit
    }_${
        shapeRadius.bottomLeft + shapeRadius.bottomLeftUnit
    }]`;
}

export default getSimpleTailwindResult;