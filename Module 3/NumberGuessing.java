import java.util.*;
class Guess {
    public static void main(String[] args) {
        int num=(int)(Math.random()*100)+1;
        Scanner sc=new Scanner(System.in);
        int g;
        do{
            g=sc.nextInt();
            System.out.println(g<num?"Low":g>num?"High":"Correct");
        }while(g!=num);
    }
}