package algosnds.palindrome;

public class PalindromeAnalyser {
    private static final int START_CHAR = Character.getNumericValue('a');
    private static final int END_CHAR = Character.getNumericValue('z');

    public boolean isPalindrome(String inputString) {
        int[] table = buildCharFrequencyTable(inputString);
        return verifyCharFrequencyForPalindrome(table);
    }

    private boolean verifyCharFrequencyForPalindrome(int[] table) {
        boolean oddCharacter = false; // Checking the presence of only single odd character
        for (int frequency : table) {
            if ((frequency % 2) == 1) {
                if (oddCharacter)
                    return false; // As we are encoutering more than one odd character
                oddCharacter = true;
            }
        }

        return true; // String can be flagged as palindrome
    }

    private int[] buildCharFrequencyTable(String inputString) {
        int[] charFrequency = new int[26]; // a-z character set
        char[] inputCharacters = inputString.toCharArray();

        for (char character : inputCharacters) {
            if (isStandardCharacter(character)) {
                int index = getCharacterIndex(character);
                int currVal = charFrequency[index];
                charFrequency[index] = ++currVal;
            }
        }

        return charFrequency;
    }

    private int getCharacterIndex(Character character) {
        return Character.getNumericValue(character) - START_CHAR;
    }

    private boolean isStandardCharacter(Character character) {
        int value = Character.getNumericValue(character);

        return value >= START_CHAR && value <= END_CHAR;
    }
}