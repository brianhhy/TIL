package homework.cart;

import java.sql.Connection;
import java.util.Scanner;

public class CartService {
	Scanner sc = new Scanner(System.in);
	private CartDAO cartDAO;

	public CartService(CartDAO cartDAO) {
		this.cartDAO = cartDAO;
	}

	//모든 내역 출력
	public void takeAllContent() {
		cartDAO.getList();
	}

	//부가 메뉴1. 물건삭제
	public void deleteProduct() {
		System.out.println("[물건 삭제]" + "\n");
		System.out.print("카트번호 : ");
		int cartId = Integer.parseInt(sc.nextLine());

		cartDAO.delete(cartId);
	}

	//부가 메뉴2.주문확정
	public void ordersConfirmed() {
		//상품번호
		System.out.println("[주문확정]" + "\n");
		System.out.print("카트번호 : ");
		int cartId = Integer.parseInt(sc.nextLine());

		cartDAO.confirm(cartId);
	}
}