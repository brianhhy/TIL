package homework.product;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import homework.cart.CartDAO;

public class ProductDAO {
	private Connection conn;

	// 수정 매개변수로 userNum 받기
	public ProductDAO(Connection conn) {
		this.conn = conn;
	}

	// 모든 상품 조회
	public void getProductList() {
		try {
			// String sql = "SELECT \"product_num\", \"category\", \"price\", \"sale\",
			// \"brand\", \"PRODUCT_NAME\" FROM product";
			String sql = "SELECT PRODUCT_NUM, CATEGORY, PRICE, SALE, BRAND, PRODUCT_NAME FROM product";

			PreparedStatement pstmt = conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				Product product = new Product();
				product.setProduct_num(rs.getInt("PRODUCT_NUM"));
				product.setCategory(rs.getString("CATEGORY"));
				product.setPrice(rs.getInt("PRICE"));
				product.setSale(rs.getString("SALE"));
				product.setBrand(rs.getString("BRAND"));
				product.setPRODUCT_NAME(rs.getString("PRODUCT_NAME"));

				System.out.printf("%-10s%-16s%-20s%-25s%-20s\n", product.getProduct_num(), product.getCategory(),
						product.getPrice(), product.getSale(), product.getBrand(), product.getPRODUCT_NAME());
			}

			rs.close();
			pstmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
			System.out.println("error");
		}
	}

	// 세일 하는 상품
	public void getProductList(Boolean sale) {
		try {
//	        String sql = "SELECT \"product_num\", \"category\", \"price\", \"sale\", \"brand\", \"PRODUCT_NAME\" " +
//	                     "FROM product " +
//	                     "WHERE \"sale\" = 'Y'";
			String sql = "SELECT PRODUCT_NUM, CATEGORY, PRICE, SALE, BRAND, PRODUCT_NAME FROM product "
					+ "WHERE SALE='Y'";

			PreparedStatement pstmt = conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				Product product = new Product();
				product.setProduct_num(rs.getInt("PRODUCT_NUM"));
				product.setCategory(rs.getString("CATEGORY"));
				product.setPrice(rs.getInt("PRICE"));
				product.setSale(rs.getString("SALE"));
				product.setBrand(rs.getString("BRAND"));
				product.setPRODUCT_NAME(rs.getString("PRODUCT_NAME"));

				System.out.printf("%-10s%-16s%-20s%-25s%-20s\n", product.getProduct_num(), product.getCategory(),
						product.getPrice(), product.getSale(), product.getBrand(), product.getPRODUCT_NAME());
			}
			rs.close();
			pstmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	// 카테고리별
	public void getProductList(String category) {
		try {
//			String sql = "SELECT \"product_num\", \"category\", \"price\", \"sale\", \"brand\", \"PRODUCT_NAME\" FROM product WHERE \"category\" = ?";

			String sql = "SELECT PRODUCT_NUM, CATEGORY, PRICE, SALE, BRAND, PRODUCT_NAME FROM product "
					+"WHERE CATEGORY=?";

			PreparedStatement pstmt = conn.prepareStatement(sql);
			ResultSet rs = pstmt.executeQuery();

			while (rs.next()) {
				Product product = new Product();
				product.setProduct_num(rs.getInt("PRODUCT_NUM"));
				product.setCategory(rs.getString("CATEGORY"));
				product.setPrice(rs.getInt("PRICE"));
				product.setSale(rs.getString("SALE"));
				product.setBrand(rs.getString("BRAND"));
				product.setPRODUCT_NAME(rs.getString("PRODUCT_NAME"));

				System.out.printf("%-10s%-16s%-20s%-25s%-20s\n", product.getProduct_num(), product.getCategory(),
						product.getPrice(), product.getSale(), product.getBrand(), product.getPRODUCT_NAME());
			}
			rs.close();
			pstmt.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	public void getCartDAO(int productNum, int quantity) {
		CartDAO cartDAO = new CartDAO(conn);
		cartDAO.addCart(productNum, quantity);
	}
}