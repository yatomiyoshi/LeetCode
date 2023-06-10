/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
    
    const a_array_reversed = [...a].reverse();
    const b_array_reversed = [...b].reverse();

    const max_length = a_array_reversed.length >= b_array_reversed.length ? a_array_reversed.length : b_array_reversed.length;

    let increase = 0;
    let sumBinary = [];

    for(let i = 0; i <= max_length; i++){

        if(a_array_reversed[i] === undefined) a_array_reversed[i] = 0;
        if(b_array_reversed[i] === undefined) b_array_reversed[i] = 0;

        let sumValue = Number(a_array_reversed[i]) + Number(b_array_reversed[i]) + increase;

        if(sumValue === 0){
            sumBinary.unshift(0);
            increase = 0;
        } else if(sumValue === 1){
            sumBinary.unshift(1);
            increase = 0;
        } else if(sumValue === 2){
            sumBinary.unshift(0);
            increase = 1;
        } else if(sumValue === 3){
            sumBinary.unshift(1);
            increase = 1;
        }
    }

    if(sumBinary[0] === 0) sumBinary.shift();

    return sumBinary.join("");
};