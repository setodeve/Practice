abstract class Numeric{
    // 整数はbyte型(8ビット)、short型(16ビット)、long型(64ビット)のいずれかで表現されます。Numericの整数表現を取得して、byte/short/long/charに変換することができます。
    // さらに、任意のshort型をchar型(16ビット)に変換することができます。
    public byte getByte(){
        return (byte) this.getInteger();
    }

    public short getShort(){
        return (short) this.getInteger();
    }

    public long getLong(){
        return (long) this.getInteger();
    }

    public char getChar(){
        return (char) this.getInteger();
    }

    // どのようなNumericに対しても、データを整数として表現する方法を見つける必要があります。例えば、8進数で表される、Octadecimalは、アルゴリズムを使用して内部の文字列状態 "1014 "をプリミティブであるint型 524 に変換する必要があります。Numericはそれ自身を整数に変換できなければならないので、関数を実装する必要があります。
    public abstract int getInteger();

    // double型は(64ビット)を使用し、Numericはどのような変換が行われるか判断する必要があります。Numericは実際にはBigDecimalsのような文字列（例:"4.556333346"）として実装される可能性があり、アルゴリズムは精度を考慮して文字列をdoubleに変換する必要があります。 
    public abstract double getDouble();

    public String toString(){
        // 全てのオブジェクトはgetClassメソッドを持ちます。
        return this.getClass().getSimpleName() + " of int value: " + this.getInteger();
    }
}

class IntegerNumeric extends Numeric{
    // Numericが実際にどのように格納されているかの詳細は非表示にします。
    private int value;

    // intを使って、初期化できるようにします。
    public IntegerNumeric(int value){
        this.value = value;
    }

    public int getInteger(){
        return this.value;
    }

    public double getDouble(){
        return this.value + 0.0;
    }
}

class CharNumeric extends Numeric{
    private char c;

    // charかshortを使って、初期化できるようにします。
    public CharNumeric(char c){
        this.c = c;
    }

    public CharNumeric(int c){
        this.c = (char) c;
    }

    public int getInteger(){
        return this.c;
    }

    public double getDouble(){
        return this.getInteger() + 0.0;
    }
}

class Hexadecimal extends Numeric{
    private int hexvalue;
    
    public Hexadecimal(int value){
        String hex = Integer.toHexString(value);
        this.hexvalue = Integer.parseInt(hex);
    }

    public int getInteger(){
        return this.hexvalue;
    }

    public double getDouble(){
        return this.getInteger() ;
    }
}

class Octaldecimal extends Numeric{
  private int octvalue;
    
  public Octaldecimal(int value){
      String oct = Integer.toOctalString(value);
      this.octvalue = Integer.parseInt(oct);
  }

  public int getInteger(){
    return this.octvalue;
  }

  public double getDouble(){
      return this.getInteger() ;
  }
}

class BigDecimalNumeric extends Numeric{
  private Double binvalue;
    
  public BigDecimalNumeric(Double value){
      this.binvalue = value ;
  }

  public int getInteger(){
    int rtn = this.binvalue.intValue();
    return rtn;
  }

  public double getDouble(){
      return this.getInteger() ;
  }

}

class Main{
    public static void numericPrinter(Numeric num){
        System.out.println(num);
        System.out.println("Byte: " + num.getByte());
        System.out.println("Short: " + num.getShort());
        System.out.println("Long: " + num.getLong());
        System.out.println("Char: " + num.getChar());
        System.out.println("Double: " + num.getDouble());
        System.out.println();
    }

    public static void main(String[] args){
        // Numeric num1 = new IntegerNumeric(73);
        // // 大きなビットの整数をバイト(8ビット)に変換しようとすると、変換が失われる可能性があります。
        // Numeric num2 = new IntegerNumeric(23555461);
        // Numeric num3 = new CharNumeric(61);
        // Numeric num4 = new Hexadecimal(16);
        // numericPrinter(num4) ;
        Numeric num4 = new Octaldecimal(16);
        numericPrinter(num4) ;

        // numericPrinter(num1);
        // numericPrinter(num2);
        // numericPrinter(num3);
    }
}