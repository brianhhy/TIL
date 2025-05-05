package homework.cart;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

public class CartDAO {
	private Connection conn;
	private int userNum;

	public CartDAO(Connection conn) {
		this.conn = conn;
	}

	public void setUserNum(int userNum) {
		this.userNum = userNum;
	}

	public void getList() {

		try {
			String sql = "SELECT c.CART_ID as CART_ID, p.CATEGORY as CATEGORY, p.BRAND as BRAND, p.PRODUCT_NAME as PRODUCT_NAME, p.PRICE as PRICE, c.QUANTITY as QUANTITY, p.SALE as SALE, p.PRODUCT_NUM as PRODUCT_NUM "
					+ "FROM product p JOIN cart c ON p.PRODUCT_NUM = c.PRODUCT_NUM " + "WHERE USER_NUM=? AND PAYMENT=?";

			PreparedStatement pstmt = conn.prepareStatement(sql);
			System.out.println("getList() : " + userNum);
			pstmt.setInt(1, userNum);
			pstmt.setString(2, "false"); // 결제 안한것만

			ResultSet rs = pstmt.executeQuery();

			System.out.println("--------------## 장바구니 내역 ##--------------");
			System.out.println(" [ 사용자 : " + userNum + "]");

			System.out.printf("%-10s%-12s%-12s%-12s%-12s%-10s%-10s%-6s%n", "카트아이디", "카테고리", "브랜드", "상품번호", "상품명",
					"할인여부", "가격", "수량");
			System.out.println("----------------------------------------------------------------------------------");

			while (rs.next()) {
				Cart cart = new Cart();
				cart.setCartId(rs.getInt("CART_ID"));
				// cart.setPayment(rs.getString("PAYMENT"));
				cart.setCategory(rs.getString("CATEGORY"));
				cart.setBrand(rs.getString("BRAND"));
				cart.setName(rs.getString("PRODUCT_NAME"));
				cart.setPrice(rs.getInt("PRICE"));
				cart.setQuantity(rs.getInt("QUANTITY"));
				cart.setIsSale(rs.getString("SALE"));
				cart.setProductNum(rs.getInt("PRODUCT_NUM"));

				System.out.printf("%-10d%-12s%-12s%-12d%-12s%-10s%-10d%-6d%n", cart.getCartId(), cart.getCategory(),
						cart.getBrand(), cart.getProductNum(), cart.getName(), cart.getIsSale(), cart.getPrice(),
						cart.getQuantity());
			}

			rs.close();
			pstmt.close();
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("CartDAO의 getList()에서 error");
		}
	}

	public void delete(int cartId) {
		try {
			String sql = "DELETE FROM cart WHERE CART_ID=? and USER_NUM=?";
			PreparedStatement pstmt = conn.prepareStatement(sql);

			System.out.println("delete : " + userNum);

			pstmt.setInt(1, cartId);
			pstmt.setInt(2, userNum);
			pstmt.executeUpdate();

			pstmt.close();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("CartDAO의 delete()에서 error");
		}
	}

	public void confirm(int cartId) {
		int total = 0;
		int quantity = 0;
		int price = 0;
		int prodNum = 0;

		try {
			String sql2 = "SELECT c.QUANTITY AS quantity, p.PRICE AS price, c.PRODUCT_NUM AS proNum "
					+ "FROM cart c JOIN product p ON c.PRODUCT_NUM = p.PRODUCT_NUM " + "WHERE CART_ID = " + cartId;
			Statement stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery(sql2);

			while (rs.next()) {
				quantity = rs.getInt("quantity");
				price = rs.getInt("price");
				prodNum = rs.getInt("proNum");
			}

			String sql = "INSERT INTO orders (orders_num, orders_date, total, user_num, product_num, quantity, delivery_state) "
					+ "VALUES (ORDERS_SEQ.NEXTVAL, SYSDATE, ?, ?, ?, ?, ?)";

			PreparedStatement pstmt = conn.prepareStatement(sql);

			total = quantity * price;
			pstmt.setInt(1, total);

			pstmt.setInt(2, userNum);
			pstmt.setInt(3, prodNum); // 가져온 product_num
			pstmt.setInt(4, quantity);
			pstmt.setString(5, "배송 준비중");

			pstmt.executeUpdate();
			pstmt.close();

		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("CartDAO의 confirm()에서 error");
		}
	}

	// 장바구니에 담기
	// 상품번호 와 수량을 매개변수로
	// 장바구니아이디는 자동부여, 사용자번호, 상품수량(매개) 결제여부는 false, 상품번호(매개) INSERT
	public void addCart(int productNum, int quantity) {
		try {
//			String sql = "INSERT INTO cart (\"cart_id\", \"user_num\", \"quantity\", \"payment\", \"product_num\") "
//			           + "VALUES (CART_SEQ.NEXTVAL, ?, ?, ?, ?)";
			String sql = "INSERT INTO cart (CART_ID, USER_NUM, QUANTITY, PAYMENT, PRODUCT_NUM) "
					+ "VALUES (CART_SEQ.NEXTVAL, ?, ?, ?, ?)";

			PreparedStatement pstmt = conn.prepareStatement(sql);

			pstmt.setInt(1, userNum);
			pstmt.setInt(2, quantity);
			pstmt.setString(3, "false");
			pstmt.setInt(4, productNum);

			pstmt.executeUpdate();
			pstmt.close();

			System.out.println("장바구니에 상품을 담았습니다.");
			getList();
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("CartDAO의 addCart()에서 error");
		}
	}

}