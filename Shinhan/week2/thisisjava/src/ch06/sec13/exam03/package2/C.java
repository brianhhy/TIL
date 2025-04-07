package ch06.sec13.exam03.package2;

import ch06.sec13.exam03.package1.A;
import ch06.sec13.exam03.package1.B;

public class C {
	public C() {
		A a = new A();
		
		a.field1 = 1;
//		a.field2 = 2;
//		a.field3 = 3;
		
		a.method1();
//		a.method2();
//		a.method3();
	}
	
}
