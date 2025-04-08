package ch07.sec04.exam01;

public class ComputerExample {
	public static void main(String[] args) {
		int r = 10;
		
		Calculator calculator = new Calculator();
//		System.out.println("원 면적: " + calculator.areaCircle(r));
//		System.out.println();
		
		Computer computer = new Computer();
		
		System.out.println("원 면적: " + computer.areaCircle(r));
		
		Calculator cal = computer;		// 자동 형변환
		cal.areaCircle(r);	// 부모타입의 메서드가 실행 -> 자식 메서드가 실행
//		cal.game();			// 사용불가
		
		// 다형성 : 타입이 달라지는 성질 -> 실행코드는 하나인데 결과가 달라지는 것
		Tablet tab = new Tablet();
		Calculator cal2 = tab;
		
//		Calculator[] calArray = {calculator, computer, tab, new Calculator(), new Computer()};
//		for (Calculator c : calArray) {
//			c.areaCircle(r);
//		}
		
		Computer com = (Computer)cal;
//		System.out.println(com.toString());
		
		Object o1 = new String ("안녕");
		System.out.println(o1.toString());
	}
}
