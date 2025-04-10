package ch12;

import java.text.DecimalFormat;

public class DateEx {

	public static void main(String[] args) {
		double a = 123456789.123456789;
		DecimalFormat df = new DecimalFormat("#,###");
		System.out.println(df.format(a));
		
	}

}
