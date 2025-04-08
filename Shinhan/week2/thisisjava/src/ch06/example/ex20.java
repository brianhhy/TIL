package ch06.example;

import java.util.Scanner;

public class ex20 {
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		while(true) {
			System.out.println("--------------------------------------");
			System.out.println("1. 계좌생성 | 2. 계좌목록 | 3. 예금 | 4. 출금 | 5. 종료");
			System.out.println("--------------------------------------");
			System.out.println("선택>");
			int choice = scanner.nextInt();
			scanner.nextLine();

			if(choice == 1) {
				System.out.println("----------");
				System.out.println("계좌생성");
				System.out.println("----------");

				System.out.print("계좌번호: ");
				String account = scanner.nextLine();

				System.out.print("계좌주: ");
				String name = scanner.nextLine();

				System.out.print("초기입금액: ");
				String addMoney = scanner.nextLine();

				System.out.print("결과: 계좌가 생성되었습니다.");
			}

			
		}
		
	}

	public BankApplication(int[] Account)

}
