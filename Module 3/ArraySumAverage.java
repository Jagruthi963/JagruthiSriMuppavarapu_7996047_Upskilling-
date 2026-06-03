import java.util.*;
class ArrayAvg {
    public static void main(String[] args){
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt(),sum=0;
        int[] a=new int[n];
        for(int i=0;i<n;i++){a[i]=sc.nextInt();sum+=a[i];}
        System.out.println("Sum="+sum);
        System.out.println("Avg="+(double)sum/n);
    }
}