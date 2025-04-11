package ch15.sec04.exam03;

import java.io.IOException;
import java.util.Properties;

public class PropertiesExample {

	public static void main(String[] args) throws IOException {
		Properties properties = new Properties();
		
		properties.load(PropertiesExample.class.getResourceAsStream("database.properties"));
		
		String driver = properties.getProperty("driver");
		String url = properties.getProperty("url");
		String username = properties.getProperty("username");
		String password = properties.getProperty("password");
		String admin = properties.getProperty("admin");
		
		/* 
 		ResourceBundle rb = ResourceBundle.getBundle("database");	
		System.out.println("driver: " + rb.getString("driver"));
		System.out.println("driver: " + rb.getString("url"));
		System.out.println("driver: " + rb.getString("username"));
		System.out.println("driver: " + rb.getString("password"));
		System.out.println("driver: " + rb.getString("admin"));
		*/
		System.out.println("driver: " + driver);
		System.out.println("url: " + url);
		System.out.println("username: " + username);
		System.out.println("password: " + password);
		System.out.println("admin: " + admin);
	}

}
