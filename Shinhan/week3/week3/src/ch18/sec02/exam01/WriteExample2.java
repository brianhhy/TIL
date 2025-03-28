package ch18.sec02.exam01;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;

public class WriteExample2 {

	public static void main(String[] args) {
		try {
			OutputStream os = new FileOutputStream("D:/temp/test3.db");
			byte[] a = {10, 20, 30, 40, 50};
			os.write(a,1,3);
			
			os.flush();
			os.close();
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
