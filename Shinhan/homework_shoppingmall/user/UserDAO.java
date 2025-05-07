package homework.user;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserDAO {
	
	private Connection conn;
	
	public UserDAO(Connection conn) {
	    this.conn = conn;
	}

    public void insertUser(User user) throws SQLException {
    	
    	String sql = "INSERT INTO customers (id, pw, tel, address, sex_code, age, height, weight, s_size) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, user.getId());
            pstmt.setString(2, user.getPw());
            pstmt.setString(3, user.getTel());
            pstmt.setString(4, user.getAddress());
            pstmt.setString(5, user.getSexCode());
            pstmt.setInt(6, user.getAge());
            pstmt.setInt(7, user.getHeight());
            pstmt.setInt(8, user.getWeight());
            pstmt.setInt(9, user.getSSize());
            pstmt.executeUpdate();
        }
    }
    public boolean login(String id, String pw) throws SQLException {
        String sql = "SELECT COUNT(*) FROM customers WHERE id = ? AND pw = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, id);
            pstmt.setString(2, pw);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt(1) > 0;
                }
            }
        }
        return false;
    }
    public int getUserNumById(String id) throws SQLException {
        String sql = "SELECT user_num FROM customers WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, id);
            try (ResultSet rs = pstmt.executeQuery()) {
                if (rs.next()) {
                    return rs.getInt("user_num");
                }
            }
        }
        return -1;
    }


}