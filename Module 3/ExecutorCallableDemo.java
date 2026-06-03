import java.util.concurrent.*;

class Test{
    public static void main(String[] args)throws Exception{
        ExecutorService ex=Executors.newFixedThreadPool(2);
        Future<Integer> f=ex.submit(() -> 100);
        System.out.println(f.get());
        ex.shutdown();
    }
}