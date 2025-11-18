function as(elementCount) {
    let n = 0;
    let elementsCount = 0;

    while (elementCount > elementsCount) {
        elementsCount += 2 ** n
        n++;
    }

    return elementsCount
}

console.log(as()) // 8