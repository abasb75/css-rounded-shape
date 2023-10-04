function getFancyTailwindResult(shapeRadius){
    return `rounded-[${
        shapeRadius.topLeft.x
    }%_${
        shapeRadius.topRight.x
    }%_${
        shapeRadius.bottomRight.x
    }%_${
        shapeRadius.bottomLeft.x
    }%_/_${
        shapeRadius.topLeft.y
    }%_${
        shapeRadius.topRight.y
    }%_${
        shapeRadius.bottomRight.y
    }%_${
        shapeRadius.bottomLeft.y
    }%]`;
}

export default getFancyTailwindResult;