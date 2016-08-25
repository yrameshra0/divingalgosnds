function bubbleSort(input) {
    let output = Object.assign([], input);

    for (let i = 0; i < output.length; i++) {
        for (let j = i + 1; j < output.length; j++) {
            if (output[j] < output[i]) {
                let temp = output[j];
                output[j] = output[i]
                output[i] = temp;
            }
        }
    }

    return output;
}

function selectionSort(input) {
    let output = Object.assign([], input);

    for (let i = 0; i < output.length; i++) {
        let smallest = output[i],
            swapIndex = i;

        for (let j = i + 1; j < output.length; j++) {
            if (output[j] < smallest) {
                smallest = output[j];
                swapIndex = j;
            }
        }

        output[swapIndex] = output[i];
        output[i] = smallest;
    }

    return output;
}

function mergeSort(input) {
    let output = Object.assign([], input);

    ( function sort(arr, low, high) {
        if (low < high) {
            let middle = (low + high) / 2;
            sort(arr, low, middle);
            sort(arr, middle + 1, high);
            merge(arr, low, middle, high);
        }
    } )(output, 0, output.length - 1);

    function merge(arr, low, middle, high) {
        low = Math.round(low);
        middle = Math.round(middle);
        high = Math.round(high);

        let left = low,
            current = low,
            right = middle + 1,
            temp = [];

        for (let i = low; i <= high; i++)
            temp[i] = arr[i];

        while (left <= middle && right <= high) {
            if (temp[left] < temp[right]) {
                arr[current] = temp[left]
                left++;
            } else {
                arr[current] = temp[right]
                right++;
            }
            current++;
        }

        let remaining = middle - left;
        for (let i = 0; i <= remaining; i++)
            arr[current + i] = temp[left + i];
    }

    return output;
}

function quickSort(input) {
    let output = Object.assign([], input);

    ( function sort(arr, left, right) {
        let index = partition(arr, left, right);

        if (left < index - 1)
            sort(arr, left, index - 1); // Sorting Left Half
        if (index < right)
            sort(arr, index, right) // Sorting Right Half
    } )(output, 0, output.length - 1);

    function partition(arr, left, right) {
        let pivot = arr[parseInt((left + right) / 2)];

        while (left <= right) {
            while (arr[left] < pivot) left++;
            while (arr[right] > pivot) right--;

            if (left <= right) {
                swap(arr, left, right);
                left++;
                right--;
            }
        }

        return left;
    }

    function swap(arr, left, right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    return output;
}

export { bubbleSort, selectionSort, mergeSort, quickSort };