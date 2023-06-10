/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {

    // BigIntに変更
    const digits_bigInt = digits.map(digit => BigInt(digit));

    // 数値に変換してプラス1
    let largeInteger = digits_bigInt.reverse().reduce((accumulator, currentValue, index) => {
        return accumulator + currentValue * 10n ** BigInt(index);
    }, 0n);

    largeInteger++;

    const array = String(largeInteger).split('');
    return array.map(strNum => Number(strNum));
};