function resetTransition() {
    targetColor	= randomColor();
    increment = {
        "r" : 1,
        "g" : 1,
        "b" : 1,
    };
}

function transition() {
    if (currentColor.r > targetColor.r) {
        currentColor.r -= increment.r;
        if (currentColor.r <= targetColor.r) {
            increment.r = 0;
        }
    } else if (currentColor.r < targetColor.r) {
        currentColor.r += increment.r;
        if (currentColor.r >= targetColor.r) {
            increment.r = 0;
        }
    } else if (currentColor.b == targetColor.b) {
        increment.r = 0;
    }
    
    if (currentColor.g > targetColor.g) {
        currentColor.g -= increment.g;
        if (currentColor.g <= targetColor.g) {
            increment.g = 0;
        }
    } else if (currentColor.g < targetColor.g) {
        currentColor.g += increment.g;
        if (currentColor.g >= targetColor.g) {
            increment.g = 0;
        }
    } else if (currentColor.b == targetColor.b) {
        increment.g = 0;
    }
    
    if (currentColor.b > targetColor.b) {
        currentColor.b -= increment.b;
        if (currentColor.b <= targetColor.b) {
            increment.b = 0;
        }
    } else if (currentColor.b < targetColor.b) {
        currentColor.b += increment.b;
        if (currentColor.b >= targetColor.b) {
            increment.b = 0;
        }
    } else if (currentColor.b == targetColor.b) {
        increment.b = 0;
    }
    
    transElement.style.background = "rgb(" + Object.values(currentColor).join(", ") + ")";
    
    if (increment.r == 0 && increment.g == 0 && increment.b == 0) {
        resetTransition();
    }
}