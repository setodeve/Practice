//複数のインターフェースの練習

interface Audible{
  public abstract void makeNoise();
  public abstract double soundFrequency();
  public abstract double soundLevel();
}

interface Edible{
  public abstract String howToPrepare();
  public abstract double calories();
}

class Person implements Audible{
  private String firstName;
  private String lastName;
  private double heightM;
  private double weightKg;
  private int age;

  public Person(String firstName, String lastName, double heightM, double weightKg, int age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.heightM = heightM;
      this.weightKg = weightKg;
      this.age = age;
  }

  public String getFullName(){
      return this.firstName + " " + this.lastName;
  }

  public String toString(){
      return this.getFullName() + " who is " + this.heightM + "m tall and weights " + this.weightKg + "kg.";
  }

  public void makeNoise(){
      System.out.println("Hello World!");
  }

  public double soundFrequency(){
      return this.age > 16 ? 110 : 130;
  }

  public double soundLevel(){
      return this.age > 16 ? 60 : 65;
  }
}

//chickenクラスとfishクラスを追加
//chckenはAudibleとEdibleインターフェース使用
//fishはEdibleインターフェースのみ使用
class Chicken implements Audible, Edible{
  private double weightKg;
  private double soundFrequency = 5;
  private double soundDecibels = 10;
  
  public Chicken(double weightKg){
      this.weightKg = weightKg;
  } 

  public String toString(){
      return "This is a chicken that weights: " + this.weightKg + "kg";
  }

  public void makeNoise(){
      System.out.println("Niwatori!!");
  }

  public double soundFrequency(){
      return this.soundFrequency;
  }

  public double soundLevel(){
      return this.soundDecibels;
  }

  public String howToPrepare(){
      return "Grill !!";
  }

  public double calories(){
      return this.weightKg * 1;
  }
}

class Fish implements Edible{
  private double weightKg;
  
  public Fish(double weightKg){
      this.weightKg = weightKg;
  } 

  public String toString(){
      return "This is a fish that weights: " + this.weightKg + "kg";
  }

  public String howToPrepare(){
      return "Grill !!";
  }

  public double calories(){
      return this.weightKg * 1;
  }
}



class Main{
  public static void personInteractsWithObject(Person p, Audible noiseObject){
      System.out.println(p + " will interact with " + noiseObject + " and cause it to make a noise");
      noiseObject.makeNoise();
      System.out.println("The noise was made at " + noiseObject.soundFrequency() + "Hz at a level of " + noiseObject.soundLevel() + "dB");
      System.out.println();
  }

  public static void personEatsEdible(Person p, Edible rawFood){
      System.out.println(p + " will prepare and eat :" + rawFood + ". They do the following:" + rawFood.howToPrepare());
      System.out.println("The person prepared and ate the meal. " + rawFood.calories() + " calories consumed.");
      System.out.println();
  }

  public static void main(String[] args){
      Person ashley = new Person("Ashley", "William", 1.8, 110, 29);

      Chicken obj1 = new Chicken(15);
      Fish obj2 = new Fish(15);

      personInteractsWithObject(ashley, obj1);
      personEatsEdible(ashley, obj1);
      personEatsEdible(ashley, obj2);
  }
}