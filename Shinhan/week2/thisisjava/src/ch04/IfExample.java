package ch04;

public class IfExample {
	public static void main(String[] args) {
		int score = 93;
		if(score >= 90) {
			System.out.println("점수가 90보다 큽니다.");
			System.out.println("등급은 A입니다.");
		}
		else {
			System.out.println("점수가 90보다 작습니다.");
			System.out.println("등급은 B입니다.");	
		}
		
		int dice = (int)(Math.random()*6)+1;
		System.out.println(dice);
		
		int coin = (int)(Math.random()*2);
		System.out.println(coin);
	}
}
