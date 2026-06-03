class Animal{
    void makeSound(){System.out.println("Animal Sound");}
}
class Dog extends Animal{
    void makeSound(){System.out.println("Bark");}
}
class Test{
    public static void main(String[] args){
        new Animal().makeSound();
        new Dog().makeSound();
    }
}