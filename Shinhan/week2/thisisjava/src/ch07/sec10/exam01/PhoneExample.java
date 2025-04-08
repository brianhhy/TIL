package ch07.sec10.exam01;

public class PhoneExample {

	public static void main(String[] args) {
		
		SmartPhone smartPhone = new SmartPhone("홍길동");
		
		smartPhone.turnOn();
		smartPhone.internetSearch();
		smartPhone.turnOff();
		
		Phone phone = new SmartPhone("홍길동");
		phone.turnOn();
//		phone.internetSearch();			// smartphone에만 있기에 쓸 수 없다
		phone.turnOff();
		
	}

}
