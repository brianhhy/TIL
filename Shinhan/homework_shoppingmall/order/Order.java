package homework.order;

import lombok.Data;

@Data
public class Order {
	private int order_num;
	private String order_date;
	private int total;
	private int user_num;
	private int product_num;
	private int quantity;
	private String deliver_state; 
	
}