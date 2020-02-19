
exports.min = function min(array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0;
    }
    let min = array[0];
    for (let elem of array) {
        if (elem < min) min = elem;
    }
    return min;
}

exports.max = function max(array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0;
    }
    let max = array[0];
    for (let elem of array) {
        if (elem > max) max = elem;
    }
    return max;
}

exports.avg = function avg(array) {
    if (arguments.length == 0 || array.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let elem of array) {
        sum += elem;
    }
    return sum / array.length;
}
