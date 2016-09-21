package algosnds.arraysnstrings;

public class OneEditAway {

    public boolean verify(String first, String second) {

        if (first.length() == second.length())
            return verifyReplace(first, second);

        if (first.length() + 1 == second.length())
            return verifyAdditionOrRemoval(first, second);

        if (first.length() - 1 == second.length())
            return verifyAdditionOrRemoval(second, first);

        return false;
    }

    private boolean verifyAdditionOrRemoval(String s1, String s2) {
        int index1 = 0, index2 = 0;
        while (index1 < s1.length() && index2 < s2.length()) {
            if (s1.charAt(index1) != s2.charAt(index2)) {
                if (index1 != index2)
                    return false;

                index2++;
            } else {
                index1++;
                index2++;
            }
        }

        return true;
    }

    private boolean verifyReplace(String s1, String s2) {
        int index = 0;
        boolean replaceFound = false;
        while (index < s1.length()) {
            if (s1.charAt(index) != s2.charAt(index)) {
                if (replaceFound)
                    return false;

                replaceFound = true;
            }
            index++;
        }

        return true;
    }
}