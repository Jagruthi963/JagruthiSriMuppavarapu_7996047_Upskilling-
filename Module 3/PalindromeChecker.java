import java.util.*;
class Palindrome {
    public static void main(String[] args){
        String s=new Scanner(System.in).nextLine()
                .replaceAll("[^a-zA-Z0-9]","")
                .toLowerCase();
        String r=new StringBuilder(s).reverse().toString();
        System.out.println(s.equals(r));
    }
}