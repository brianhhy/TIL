package ch11;

public class ExceptionEx {

	public static void main(String[] args) {
		System.out.println("시작");
		int a = 3;
		int b = 1;
		int arr[] = {1,2,3};
		try {
			// 예외 발생 가능성이 있는 코드, ArithmeticException
			System.out.println(arr[3]);
			int c = a / b;		
			
			
		} catch(ArithmeticException e) {	// 예외발생시 실행 블록
			System.out.println("예외 발생");
			System.out.println(e.getMessage());
		} catch(ArrayIndexOutOfBoundsException e) {
			e.printStackTrace();
		} catch(Exception e) {
			System.out.println("그외 예외");
		}
		System.out.println("끝");

	}
	
	public static void test() throws Exception{
		try {
			Class.forName("java.lang.String");
			
		}catch(Exception e) {
			
		}
	}

}
