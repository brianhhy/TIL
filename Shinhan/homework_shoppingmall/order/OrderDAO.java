package homework.order;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

public class OrderDAO {
    private final Connection conn;

    public OrderDAO(Connection conn) {
        this.conn = conn;
    }

    public List<Order> findOrdersByUserNum(int userNum) {
        List<Order> list = new ArrayList<>();

        String sql = """
            SELECT orders_num, orders_date, total, user_num, product_num, quantity, delivery_state
            FROM orders
            WHERE user_num = ?
        """;

        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setInt(1, userNum);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                Order order = new Order();
                order.setOrder_num(rs.getInt("orders_num"));
                order.setOrder_date(rs.getString("orders_date"));
                order.setTotal(rs.getInt("total"));
                order.setUser_num(rs.getInt("user_num"));
                order.setProduct_num(rs.getInt("product_num"));
                order.setQuantity(rs.getInt("quantity"));
                order.setDeliver_state(rs.getString("delivery_state"));
                list.add(order);
            }

            rs.close();
        } catch (Exception e) {
        	System.out.println("Order DAO > findOrdersByUserNum 에러");
            e.printStackTrace();
        }

        return list;
    }
}