package ch07.sec04.exam01;

public class Tablet extends Calculator{
	public double areaCircle(double r) {
		System.out.println("Tablet 객체의 areaCircle() 실행");
		return Math.PI * r * r;
	}
}
