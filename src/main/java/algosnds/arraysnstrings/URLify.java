package algosnds.arraysnstrings;

public class URLify {
    public void replaceSpaces(char[] inputArray, int trueLength) {
        int spaceCount = 0, index, i = 0;
        for (; i < trueLength; i++) {
            if (inputArray[i] == ' ')
                spaceCount += 1;
        }

        index = trueLength + spaceCount * 2;

        for (i = trueLength - 1; i >= 0; i--) {
            if (inputArray[i] == ' ') {
                inputArray[index - 1] = '0';
                inputArray[index - 2] = '2';
                inputArray[index - 3] = '%';

                index -= 3;
            } else {
                inputArray[index - 1] = inputArray[i];
                index -= 1;
            }
        }
    }
}