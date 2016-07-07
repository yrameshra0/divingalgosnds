export default function nextHighestNo(number) {
    let numberArr = ('' + number).split('').map((digit) => {
            return +digit;
        }),
        d1 = {
            digit: undefined,
            location: undefined
        },
        d2 = {
            digit: 100000,
            location: undefined
        },
        determineNonAscendingDigitFromRight = function() {
            for (let i = numberArr.length - 1; i > 0; i--) {
                if (numberArr[i - 1] < numberArr[i]) {
                    d1.digit = numberArr[i - 1];
                    d1.location = i - 1;
                }
            }
        },
        areAllDigitsInAscendingOrder = function() {
            if (d1.digit === undefined)
                return true;
        },
        determineNextHigherDigitSmallerThanOtherDigitsOnRight = function() {
            for (let i = d1.location + 1; i < numberArr.length; i++) {
                if (numberArr[i] > d1.digit && numberArr[i] < d2.digit) {
                    d2.digit = numberArr[i];
                    d2.location = i;
                }
            }
        },
        swapDigitsInMainNumberArray = function() {
            numberArr[d2.location] = d1.digit;
            numberArr[d1.location] = d2.digit;
        },
        sortDigitsOnRight = function() {
            for (let i = d1.location + 1; i < numberArr.length; i++) {
                for (let j = i + 1; j < numberArr.length; j++) {
                    if (numberArr[j] < numberArr[i]) {
                        let temp = numberArr[i];
                        numberArr[i] = numberArr[j];
                        numberArr[j] = temp;
                    }

                }
            }
        };

    determineNonAscendingDigitFromRight();

    if (areAllDigitsInAscendingOrder())
        return 'None'; // Indicating that we cannot proceed

    determineNextHigherDigitSmallerThanOtherDigitsOnRight();
    swapDigitsInMainNumberArray();
    sortDigitsOnRight();

    return numberArr.join('');
}