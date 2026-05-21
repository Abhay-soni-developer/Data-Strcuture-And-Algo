/**
 * @return {Generator<number>}
 */
// var fibGenerator = function*() {
//     const arr = [0, 1];
//     let i=0;

//     while(true) {
//         if(arr[i]===undefined) {
//             arr[i]=arr[i-2]+arr[i-1];
//             yield arr[i];
//             i++;
//             continue;
//         } 
//         yield arr[i];
//         i++;
//     }

//     return true;
// };

var fibGenerator = function*() {
    let el1 = 0; el2 = 1;

    yield el1;
    yield el2;

    while(true) {
        [el1, el2] = [el2, el1+el2]
        yield el2;
    }

    return true;
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */