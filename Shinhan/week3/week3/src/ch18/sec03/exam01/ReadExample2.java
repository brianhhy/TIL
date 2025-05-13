package ch18.sec03.exam01;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

public class ReadExample2 {

	public static void main(String[] args) {
		try {
			InputStream is = new FileInputStream("D:/temp/test3.db");
			
			byte[] data = new byte[100];
			while(true) {
				int num = is.read(data);
				if(num == -1) break;
				for(int i = 0;i<num;i++) {
					System.out.println(data[i]);
				}
			}
			is.close();
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
