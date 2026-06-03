import java.util.*;
class Factorial {
    public static void main(String[] args) {
        int n=new Scanner(System.in).nextInt();
        long f=1;
        for(int i=1;i<=n;i++) f*=i;
        System.out.println(f);
    }
}