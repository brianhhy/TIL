package ch01;

public class Variable {
	public static void main(String[] args) {
		// 변수 선언
		// 타입 변수명 = 값;
		int a;
		a = 10;
		System.out.println(a);
		
		// 선언 + 초기화
		int b = 20;
		System.out.println(b);
		
		//초기화하지 않으면 사용 불가
		int c;
//		System.out.println(c);
		
		//다른 타입 대입 불가
//		int d = 3.14;
		double d = 3.14;
		double e = 3;
		System.out.println(e);
		
		//타입 == 자료형(데이터 타입)
		// 기본 자료형 : 정수, 실수, 문자, 논리
		byte g = -128;
		int h = -33000;
		
		//산술 연산시 int로 전환됨
//		byte i = g+1;
		
		//정수면 기본적으로 int, 21억 이상은 long 사용
		// String은 참조 자료형
		char m = 'A';
		String n = "Hello";
		
		int o = m+1;			//아스키코드 65 + 1됨
		System.out.println(o); 
		
		//논리 타입
		boolean hi = true;
		//true, false중 하나\\
		String greet = "저는 \"홍길동\" \\입니다.";
		System.out.println(greet);
		
		String greet2 = """
						   저는
						   홍길동
						   입니다.
						""";
		
		// 타입 추론 : 변수값에 따라 타입이 추정됨
		var age = 30;
		
		
		System.out.println(age);
		// 형 변환
		// 자동 형변환 : 작은 범위의 값이 큰 범위의 변수로 대입
		double q  = a;
		
		// 강제 형변환 : 큰 범위의 값이 작은 범위의 변수로 대입
		a = (int)q;
		
		//예시
		double pi = 3.14;
		int pi_int = (int)pi;
		System.out.println(pi_int);		// 소수점 아래 값들은 사라짐
		
		
		
		// 변수의 사용 범위(scope) : 변수가 선언된 지역 내에서만 사용가능
		
	}
}

