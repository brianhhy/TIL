package ch03;

public class Operate {

	public static void main(String[] args) {
		// 증감 연산
		int x = 1;
		int y = 1;
		int res1 = ++x + 10; // x = 2 -> 2 + 10
		int res2 = y++ + 10; // 1 + 10 -> y = 2

		System.out.println(res1);
		System.out.println(res2);
		System.out.println("x = " + x);
		System.out.println("y = " + y);

		// 산술 연산 +, -, *, /, %
		int a = 10;
		int b = a / 4;
		System.out.println(b); // 2

		int score1 = 90;
		int score2 = 80;
		int score3 = 75;
		int total = score1 + score2 + score3;
		double avg = total / 3.0; // 3.0이 아닌 3으로하면 소수점이 안나옴
		System.out.println(avg);

		System.out.println(a == 11 && test()); // 양쪽항 모두 true면 true
		System.out.println(a == 10 || b < 10); // 둘중 하나 이상이 true면 true

		String name = null;
		if (name != null && name.length() > 3) {
			System.out.println("4자리 이상입니다");
		}

		int score = 80;
		String result = (score >= 60) ? "합격" : "불합격";
		System.out.println(result);

		int d = 1 + (2 * 3);
		System.out.println(d);

		// 확인 문제 3
		int pencils = 534;
		int students = 30;

		int pencilPerStudent = pencils / students;
		System.out.println(pencilPerStudent);

		int pencilsLeft = pencils % students;
		System.out.println(pencilsLeft);

		// 확인 문제 4
		int value = 356;
		System.out.println(value / 100 * 100);
	}

	public static boolean test() {
		System.out.println("메서드 실행");
		return true;
	}

}
