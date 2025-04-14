package ch16.sec05.exam01;

public class MethodReferenceExample {

	public static void main(String[] args) {
		
		Person person = new Person();
		
		person.action( Computer :: staticMethod );
		
		Computer com = new Computer();
		
		person.action( com :: instanceMethod );
		

	}

}
