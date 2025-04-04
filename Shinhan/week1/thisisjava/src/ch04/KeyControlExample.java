package ch04;

import java.util.Scanner;

public class KeyControlExample {

	public static void main(String[] args) {
		
		for(int i =0;i<7;i+=2) {
			int space = (7-i)/2;
			
			for(int j=0;j<space;j++) {
				System.out.print(" ");
				
			}
			for(int j = 1;j<i;j++) {
				System.out.print("*");
			}
			System.out.println();
		}
		
	}

}
