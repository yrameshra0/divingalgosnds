package algosnds.arraysnstrings;

public class StringRotation {
    public boolean verify(String s1, String s2) {
        if (s1.length() == 0 || s1.length() != s2.length())
            return false;

        String contatnatedString = s1 + s1;

        return isSubstring(contatnatedString, s2);
    }

    private boolean isSubstring(String s1, String s2) {
        return s1.contains(s2);
    }
}