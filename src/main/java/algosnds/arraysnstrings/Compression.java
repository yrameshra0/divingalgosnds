package algosnds.arraysnstrings;

public class Compression {

    public String compress(String input) {
        int finalLength = calculateCompressedStringLength(input);
        StringBuilder compressedString = new StringBuilder(finalLength);

        int intermediateLength = 0;
        for (int i = 0; i < input.length(); i++) {
            int curr = i, next = i + 1;
            intermediateLength++;

            if (next == input.length() || input.charAt(curr) != input.charAt(next)) {
                compressedString.append(input.charAt(curr));

                if (intermediateLength > 1)
                    compressedString.append(intermediateLength);

                intermediateLength = 0;
            }
        }

        return compressedString.toString();
    }

    private int calculateCompressedStringLength(String input) {
        int compressedLength = 0;
        int intermediateLength = 0;
        for (int i = 0; i < input.length(); i++) {
            int curr = i, next = i + 1;
            intermediateLength++;

            if (next == input.length() || input.charAt(curr) != input.charAt(next)) {
                compressedLength++;

                if (intermediateLength > 1)
                    compressedLength++;

                intermediateLength = 0;
            }
        }

        return compressedLength;
    }
}