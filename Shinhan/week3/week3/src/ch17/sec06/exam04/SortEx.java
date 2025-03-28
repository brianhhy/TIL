package ch17.sec06.exam04;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SortEx {

	public static void main(String[] args) {
		int[] arr = new int[] { 2, 5, 1, 4, 3 };

		// 기본자료형 오름차순 정렬
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));

		// 기본자료형 내림차순 정렬
		// Comparator.reverseOrder()안됨 (문자열은 됨)
//	    Arrays.sort(arr, Comparator.reverseOrder());
        
	    String[] names = {"최길동", "박길동", "홍길동", "김길동"};
        Arrays.sort(names);
        System.out.println("문자열 오름차순-----------------");
        System.out.println(Arrays.toString(names));

        System.out.println("문자열 내림차순-----------------");
        Arrays.sort(names, Collections.reverseOrder());
        System.out.println(Arrays.toString(names));
	    
	    
        // 기본자료형을 내림차순으로 정렬하기 위해 int -> Integer로 변환
		Integer[] arr2 = Arrays.stream(arr).boxed().toArray(Integer[]::new);
		System.out.println("정수 내림차순--------------------");
		Arrays.sort(arr2, Collections.reverseOrder());
		System.out.println(Arrays.toString(arr2));


		// 정렬알고리즘 응용
		// Map 배열을 정렬해서 출력
		Map<String, Object> map = new HashMap<>();
		map.put("name", "박길동");
		map.put("score", 60);
		Map<String, Object> map2 = new HashMap<>();
		map2.put("name", "김길동");
		map2.put("score", 80);
		Map<String, Object> map3 = new HashMap<>();
		map3.put("name", "이길동");
		map3.put("score", 100);
		Map<String, Object> map4 = new HashMap<>();
		map4.put("name", "최길동");
		map4.put("score", 70);

		List<Map> list = new ArrayList<>();
		list.add(map);
		list.add(map2);
		list.add(map3);
		list.add(map4);

		Collections.sort(list, new Comparator<Map>() {
			@Override
			public int compare(Map o1, Map o2) {
//	                return (int)o2.get("score") - (int)o1.get("score"); // 내림차순
				return (int) o1.get("score") - (int) o2.get("score"); // 오름차순
			}
		});
		
		list.stream().forEach(m -> System.out.println(m));
		
	}

}
