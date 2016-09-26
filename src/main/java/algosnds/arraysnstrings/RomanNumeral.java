package algosnds.arraysnstrings;

import java.util.HashMap;
import java.util.Map;

public class RomanNumeral {
    private static final Map<Character, Integer> ROMAN_DICT = new HashMap<>();

    static {
        ROMAN_DICT.put('I', 1);
        ROMAN_DICT.put('V', 5);
        ROMAN_DICT.put('X', 10);
        ROMAN_DICT.put('L', 50);
        ROMAN_DICT.put('C', 100);
        ROMAN_DICT.put('D', 500);
        ROMAN_DICT.put('M', 1000);
    }

    public static int convert(String roman) {
        int sum = 0;
        int previous = -1, current = -1;
        for (int i = roman.length() - 1; i >= 0; i--) {
            current = ROMAN_DICT.get(roman.charAt(i));
            if (previous != -1 && previous > current)
                sum -= current;
            else
                sum += current;

            previous = current;
        }
        return sum;
    }
}