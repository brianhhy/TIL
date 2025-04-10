package ch13;

import java.util.ArrayList;
import java.util.List;

import ch06.sec08.exam3.Car;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


public class GenericEx {

	public static void main(String[] args) {
		// List 인터페이스
		// 여러값을 저장하는 용도, 타입제한 없음, 길이 변경 가능,
		List<Order> list = new ArrayList();
		Order o = new Order();
		o.setNumber("12345");
		list.add(o);
		o.setNumber("12346");
		list.add(o);
		o.setNumber("12347");
		list.add(o);
		
		for(int i = 0;i<list.size();i++) {
//			System.out.println(((Order)list.get(i)).getNumber());		// 일반 List
			System.out.println(list.get(i).getNumber()); 				// 제네릭
		} 
		List<Integer> list2 = new ArrayList<>[;]

	}

}
@Getter
@Setter
@ToString
class Order{
	private String number;
	private String date;
	private int price;
}
