package ch05;

import java.util.Arrays;

public class RefEx {

	public static void main(String[] args) {
		
		// 기본 자료형
		int a = 10;
		int b = a;
		a = 11;
		System.out.println(b);
		
		// 참조 자료형
		int[] a1 = {1,2,3};
		int[] b1 = a1;
		System.out.println(Arrays.toString(b1));	// 1,2,3
		a1[0] = 4;
		System.out.println(Arrays.toString(b1));	// 4,2,3
		
		String test = "안녕하세요";
		for (int i =0;i<test.length();i++) {
			System.out.println(test.charAt(i));		// charAt : 인덱스 가져오는 함수
		}
		
		test.replace("세", "시");					// replace : 새로운 문자열을 반환
		System.out.println(test);					// 기존 문자열(test)은 immutable
		System.out.println(test.replace("세", "시"));	// 새로운 문자열 반환 및 출력
		
		String test2 = "안 녕 하 세 요";									// 공백 제거
		System.out.println("공백 제거 버젼 : " + test.replace(" ", ""));
		
		System.out.println(test.substring(0,2));	// substring(a,b) : a부터 b-1까지 문자열 잘라내기
		System.out.println(test.substring(2));		// substring(a) : a부터 끝까지
		
		String board = "번호,제목,내용,성명";
		String[] arr = board.split(",");			// split("?") : ? 기준으로 분리함 
		System.out.println(Arrays.toString(arr));
		
		RefEx[] refExArr = {new RefEx(), new RefEx()};
		Integer[] arr2 = {1,2,3};
		
		int[] arr3 = new int[10];
		System.out.println(Arrays.toString(arr3));
		System.out.println(arr3[0]);
		System.out.println(c);
		
		int [][] d2 = {{1,2,3}, {4,5,6}, {7,8,9}};
		System.out.println(Arrays.toString(d2[1]));
		System.out.println(d2[1][1]);
		
		int [][] d2_m = {
						{1,2,3},
						{4,5,6},
						{7,8,9}
						};
		System.out.println(d2_m[2][2]);
		
		
		// a1 -> a2
		
		int[] a2 = new int[5];
		for(int j = 0;j<a1.length;j++) {
			a2[j] = a1[j];
		}
		System.out.println(Arrays.toString(a2));
		
		// arraycopy(원본 배열, 원본 배열 인덱스, 복사할 배열, 복사할 배열 인덱스, 복사할 길이)
		int[] a3 = new int[5];
		System.arraycopy(a1,0,a3,0,a1.length);		
		System.out.println(Arrays.toString(a3));
		
		int[] a4 = Arrays.copyOf(a1, 5);		// 메모리 주소가 다른 동일한 값을 갖는 배열
		System.out.println(Arrays.toString(a4));
	}
	static int c;
}
