package ch13.sec02.exam02;

public class GenericExample {

	public static void main(String[] args) {
		HomeAgency homeAgency = new HomeAgency();
		Home home = homeAgency.rent();			// new Home();
		home.turnOnLight();
		
		CarAgency carAgency = new CarAgency();	// new Car();
		Car car = carAgency.rent();
		car.run();

	}

}
