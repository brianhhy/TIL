import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        String result = "";

        for(int i = 0; i < a.length(); i++) {
            char c = a.charAt(i);

            if (Character.isUpperCase(c)) {
                result += Character.toLowerCase(c);
            } else if (Character.isLowerCase(c)) {
                result += Character.toUpperCase(c);
            } else {
                result += c; // 공백이나 숫자, 특수문자는 그대로
            }
        }

        System.out.println(result);
    }
}
