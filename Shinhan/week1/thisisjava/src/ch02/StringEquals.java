package ch02;

public class StringEquals {
	public static void main(String[] args) {
		String name1 = "홍길동";
		String name2 = "홍길동";
		System.out.println(name1 == name2);	//true
		
		String name3 = new String("홍길동");
		String name4 = new String("홍길동");
		System.out.println(name3 == name4);	//false			
		System.out.println(name3.equals(name4));	//true
		
		// == : 주소값 비교	equals : 값 자체 비교
		
		// 예시 : db로부터 name을 받아와 admin이라는 문자열과 비교함
		String name = null;
		System.out.println("admin".equals(name)); // 비교할 문자열을 뒤에, 기준을 앞에 둘것
//		name.equals("");  null pointer exception
	}
}
