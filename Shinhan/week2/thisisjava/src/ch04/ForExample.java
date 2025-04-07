package ch04;

public class ForExample {
	public static void main(String[] args) {
		
		for(int a = 0; a < 10; a++) {
			System.out.println("반복");
		}
		System.out.println("바깥");
		
		int[] score = {90, 80, 70};
		for(int i = 0; i<score.length;i++) {
			System.out.println(score[i]);
		}
		
		for(int i =2;i<10;i++) {
			for(int j = 1;j<10;j++) {
				System.out.println(i * j);
			}
		}
		

		
	}
}
