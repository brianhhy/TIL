package ch04;

import java.util.Scanner;

public class KeyControlExample {

	public static void main(String[] args) {
		int targetNum = (int)(Math.random()*100 + 1);
		int cnt = 0;
		
		while(true) {
			Scanner scanner = new Scanner(System.in);
			
			System.out.print("숫자 입력 :");
			String strMyNum = scanner.nextLine();
			int myNum = Integer.parseInt(strMyNum);
			
			if(myNum > targetNum) {
				cnt++;
				System.out.println("입력하신 숫자보다 작은 숫자를 입력하세요" + "시도 횟수" + cnt);
			} else if(myNum < targetNum) {
				cnt++;
				System.out.println("입력하신 숫자보다 큰 숫자를 입력하세요" + " " + "시도 횟수" + cnt);
			} else {
				System.out.println("정답입니다" + " " + "시도 횟수" + cnt);
			}
			
		}
		
	}

}
