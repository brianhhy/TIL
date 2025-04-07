package ch06.sec04;

public class Student {
	String name;	// 필드
	
	// 생성자(리턴타입이 없고, 이름이 클래스명과 동일해야 함)
	// "생성자가 없으면" 기본 생성자 추가(컴파일 시)
	Student(String n){
		name = n;
		System.out.println("생성자 실행");
	}
	
	// 기본 생성자(매개변수가 없는)
	Student(){
		
	}
	void method1() {
		String name = "hi";	// 변수(local)
		System.out.println(name);
		System.out.println(this.name);
	}
	
	void method2() {
		System.out.println(name);
	}
}
