package homework.order;

import java.util.List;

public class OrderService {
    private final OrderDAO orderDAO;

    public OrderService(OrderDAO orderDAO) {
        this.orderDAO = orderDAO;
    }

    public void totalLog(int userNum) {
        List<Order> orders = orderDAO.findOrdersByUserNum(userNum);

        System.out.println("[주문 내역]");
        System.out.println("------------------------------------------------------------------------------------------------------------");
        System.out.printf("%-10s %-15s %-10s %-10s %-10s %-10s %-15s\n",
                "주문번호", "주문일시", "주문금액", "사용자번호", "상품번호", "수량", "배송상태");
        System.out.println("------------------------------------------------------------------------------------------------------------");

        if (orders.isEmpty()) {
            System.out.println("주문 내역이 없습니다.");
            return;
        }

        for (Order order : orders) {
            System.out.printf("%-10d %-15s %-10d %-10d %-10d %-10d %-15s\n",
                    order.getOrder_num(),
                    order.getOrder_date(),
                    order.getTotal(),
                    order.getUser_num(),
                    order.getProduct_num(),
                    order.getQuantity(),
                    order.getDeliver_state());
        }
    }
}
