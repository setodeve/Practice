//Recursion抽象クラスとインターフェースの練習
// Fly(): オブジェクトが飛びます。
// FlightHeight(): オブジェクトが地上から何メートルの高さまで飛べるかを返します。
// FlySpeed(): オブジェクトが毎秒何メートル飛べるかを返します。


interface Fly{
    public abstract void Fly(); 
    public abstract double FlightHeight(); 
    public abstract double FlySpeed(); 
}

class Birds implements Fly{
    private double weightKg;
    private double jump = 120;
    private double speed = 60;

    public Birds(double weightKg){
        this.weightKg = weightKg;
    }

    public void Fly(){
        System.out.println("Birds is Flying");
    }

    public double FlightHeight(){
        return this.jump ;
    }

    public double FlySpeed(){
        return this.speed;
    }
}

class Main{
    public static void personInteractsWithObject(Fly noiseObject){
        noiseObject.Fly();
        System.out.println("JumpHeight is " + noiseObject.FlightHeight());
        System.out.println("FlySpeed is" + noiseObject.FlySpeed() + "km/h");
    }

    public static void main(String[] args){
        Fly obj1 = new Birds(10);

        personInteractsWithObject(obj1);
    }
}