function getFullTailwindResult(shapeRadius){
    return `rounded-[${
        shapeRadius.topLeft.x + shapeRadius.topLeft.ux
    }_${
        shapeRadius.topRight.x + shapeRadius.topRight.ux
    }_${
        shapeRadius.bottomRight.x + shapeRadius.bottomRight.ux
    }_${
        shapeRadius.bottomLeft.x + shapeRadius.bottomLeft.ux
    }_/_${
        shapeRadius.topLeft.y + shapeRadius.topLeft.uy
    }_${
        shapeRadius.topRight.y + shapeRadius.topRight.uy
    }_${
        shapeRadius.bottomRight.y  + shapeRadius.bottomRight.uy
    }_${
        shapeRadius.bottomLeft.y +  shapeRadius.bottomLeft.uy
    }]`;
}

export default getFullTailwindResult;