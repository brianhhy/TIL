package ch14.sec03.exam01;

import java.awt.Toolkit;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString

public class BeepPrintExample {

	public static void main(String[] args) {
		Thread thread = new Thread(new Runnable() {
			@Override
			public void run() {
				Toolkit toolkit = Toolkit.getDefaultToolkit();
				for(int i = 0; i<5; i++) {
					toolkit.beep();
//					System.out.println(getName());
					try {
						Thread.sleep(500);
					} catch(Exception e) {}
				}
			}
		});
		thread.setName("beep");
		thread.start();
		Object obj;
		for(int i = 0; i<5; i++) {
			System.out.println("띵");
			try {Thread.sleep(500);} catch(Exception e) {}
		}
	}

}
