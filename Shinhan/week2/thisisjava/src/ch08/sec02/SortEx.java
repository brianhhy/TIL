package ch08.sec02;

import java.util.Arrays;
import java.util.Comparator;

public class SortEx {

	public static void main(String[] args) {
		int[][] arr = {{3,2},{4,1},{3,3},{1,4}};
		Arrays.sort(arr,new Comparator<int[]>(){
			@Override
			public int compare(int[] o1, int[] o2) {
				if(o1[0] == o2[0]) {
					return o2[0]-o1[0];
				}
				return o2[0] - o1[0];
			}
		});
		for(int[] a : arr) {
			System.out.println(Arrays.toString(a));
		}
	}

}
