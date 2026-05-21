/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    const arr = [0, 1];
    let i=0;

    while(true) {
        if(arr[i]===undefined) {
            arr[i]=arr[i-2]+arr[i-1];
            yield arr[i];
            i++;
            continue;
        } 
        yield arr[i];
        i++;
    }

    return true;
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */