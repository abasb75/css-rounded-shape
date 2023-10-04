function getFancyCssResult(shapeRadius){

    return `border-radius: ${
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
    }%;`;
    
}

export default getFancyCssResult;