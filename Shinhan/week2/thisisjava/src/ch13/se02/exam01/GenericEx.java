package ch13.se02.exam01;

import ch06.sec08.exam3.Car;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class GenericEx {

	public static void main(String[] args) {
		Product<Tv, String> product1 = new Product<>();
		
		product1.setKind(new Tv());
		product1.setModel("스마트tv");
		
		Tv tv = product1.getKind();
		String tvModel = product1.getModel();
		
		Product<Car, String> product2 = new Product<>();
		
		product2.setKind(new Car());
		product2.setModel("suv 자동차");
		
		Car car = product2.getKind();
		String carModel = product2.getModel();
		
		System.out.println(tvModel);
		System.out.println(carModel);
	}

}
