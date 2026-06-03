class MyThread extends Thread{
    public void run(){
        for(int i=0;i<3;i++) System.out.println("Running");
    }
}
class Test{
    public static void main(String[] args){
        new MyThread().start();
        new MyThread().start();
    }
}