package homework.product;

import java.util.Scanner;

import homework.cart.CartDAO;

public class ProductService {

	private ProductDAO productDAO;
	private Scanner scanner = null;
	private CartDAO cartDAO;
	public ProductService(ProductDAO productDAO, CartDAO cartDAO) {
	    this.productDAO = productDAO;
	    this.cartDAO = cartDAO;
	    this.scanner = new Scanner(System.in);
	}


	private void printHaeder(String prefixWord) {
		System.out.println();
		System.out.println("[" + prefixWord + " 상품 목록]");
		System.out.println("----------------------------------------------------------");
		System.out.printf("%-16s%-16s%-20s%-25s%-20s\n", "product_num", "category", "sale", "brand", "PRODUCT_NAME");
		System.out.println("----------------------------------------------------------");
	}

	public void detailMenu() {
		isProduct();
		System.out.println();
		System.out.println("[상품 목록 조회: 부가 메뉴 선택]");
		System.out.println("----------------------------------------------------------");
		System.out.println("보조 메뉴: 1.세일 상품 조회 | 2.카테고리 별 조회 | 3. 장바구니 담기 | 4. 나가기");
		System.out.print("메뉴 선택: ");
		String menuNo = scanner.nextLine();

		if (menuNo.equals("1")) {
			show_sale();
		} else if (menuNo.equals("2")) {
			System.out.print("카테고리 선택: ");
			String categoryName = scanner.nextLine();
			show_cat(categoryName);
		} else if (menuNo.equals("3")) {
			//상품 번호와 수량을 입력받아야 한다. 상품번호와, 수량 넘기기
			 
			System.out.print("주문할 상품: ");
			int productNum = Integer.parseInt(scanner.nextLine());
			System.out.print("상품 수량: ");
			int quantity = Integer.parseInt(scanner.nextLine());

			put(productNum, quantity);
		} else {
			return;
		}

	}

	public void isProduct() {
		printHaeder("전체");
		productDAO.getProductList();
	}

	public void show_sale() {
		printHaeder("세일");
		productDAO.getProductList(true);
	}

	public void show_cat(String category) {
		printHaeder(category + " 카테고리");
		productDAO.getProductList(category);

	}

	public void put(int productNum, int quantity) {
		cartDAO.addCart(productNum, quantity);
	}
}
