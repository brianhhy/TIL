package ch05;

import java.util.Arrays;
import java.util.Collections;

public class ArrayEx {

	public static void main(String[] args) {
		// 정렬
		int[] arr = {3,7,4,1,9,5};
		Arrays.sort(arr);					//오름차순 정리
		
		System.out.println(Arrays.toString(arr));
		System.out.println(arr[0]);
		System.out.println(arr[arr.length-1]);
		
		
		String[] name = {"홍길동", "김길동", "최길동"};
		Arrays.sort(name);
		System.out.println(Arrays.toString(name));
		Arrays.sort(name, Collections.reverseOrder());
		System.out.println(Arrays.toString(name));
	}

}
