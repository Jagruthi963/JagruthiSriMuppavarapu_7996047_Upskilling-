class InvalidAgeException extends Exception{
    InvalidAgeException(String msg){super(msg);}
}
class Test{
    public static void main(String[] args){
        int age=16;
        try{
            if(age<18) throw new InvalidAgeException("Underage");
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
    }
}