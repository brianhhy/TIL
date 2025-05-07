package homework.cart;

import lombok.Data;

@Data
public class Cart {
	private int cartId;
	private int userNum;
	private String category;
	private String brand;
	private String name;
	private int price;
	private int quantity;
	//private String payment;
	private int productNum;
	private String isSale;
}
