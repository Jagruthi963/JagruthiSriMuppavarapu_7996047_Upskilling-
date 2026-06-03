import java.io.*;
class FileWrite{
    public static void main(String[] args)throws Exception{
        FileWriter fw=new FileWriter("output.txt");
        fw.write("Hello");
        fw.close();
    }
}