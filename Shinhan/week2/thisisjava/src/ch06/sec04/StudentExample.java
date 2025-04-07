package ch06.sec04;

public class StudentExample {

	public static void main(String[] args) {
		Student s1 = new Student();		// 생성자 s1
		
		Student s2 = new Student();		// 생성자 s2
		
		System.out.println(s1 == s2);	// 다른 주소(false)
		
		Student s3 = s2;				// 같은 주소(true)
		System.out.println(s3 == s2);
		
		s1.method1();
	}
	
}
