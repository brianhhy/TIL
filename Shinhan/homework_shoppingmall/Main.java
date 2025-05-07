package homework;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.Scanner;

import homework.cart.CartDAO;
import homework.cart.CartService;
import homework.order.OrderDAO;
import homework.order.OrderService;
import homework.product.ProductDAO;
import homework.product.ProductService;
import homework.user.User;
import homework.user.UserDAO;
import homework.user.UserService;

public class Main {

    public static String list(Scanner sc, int userNum) {
        System.out.println("\n=============== 7조 쇼핑몰 =================");
        System.out.println("[사용자번호 : " + userNum + "]");
        System.out.println("[메뉴 선택]");
        System.out.println("1. 회원가입");
        System.out.println("2. 로그인");
        System.out.println("3. 상품목록 조회");
        System.out.println("4. 장바구니");
        System.out.println("5. 주문 내역");
        System.out.println("0. 종료");
        System.out.print("메뉴를 입력하세요: ");
        return sc.nextLine();
    }
    public static int insertUser(Connection conn, Scanner sc) {
        try {
            User user = new User();
            System.out.println("회원가입 정보를 입력하세요");
            System.out.print("아이디: ");
            user.setId(sc.nextLine());
            System.out.print("비밀번호: ");
            user.setPw(sc.nextLine());
            System.out.print("전화번호: ");
            user.setTel(sc.nextLine());
            System.out.print("주소: ");
            user.setAddress(sc.nextLine());
            System.out.print("성별(M/F): ");
            user.setSexCode(sc.nextLine());
            System.out.print("나이: ");
            user.setAge(Integer.parseInt(sc.nextLine()));
            System.out.print("키(cm): ");
            user.setHeight(Integer.parseInt(sc.nextLine()));
            System.out.print("몸무게(kg): ");
            user.setWeight(Integer.parseInt(sc.nextLine()));
            System.out.print("신발 사이즈(mm): ");
            user.setSSize(Integer.parseInt(sc.nextLine()));

            UserService userService = new UserService(new UserDAO(conn));
            userService.register(user);
            int currentUserNum = userService.getUserNumById(user.getId());

            System.out.println("가입된 회원의 user_num: " + currentUserNum);
            return currentUserNum;

        } catch (Exception e) {
            System.out.println("회원가입 중 오류 발생: " + e.getMessage());
            return 0;
        }
    }
    public static int login(Connection conn, Scanner sc) {
        try {
            System.out.print("아이디: ");
            String userInputId = sc.nextLine();
            System.out.print("비밀번호: ");
            String userInputPw = sc.nextLine();

            UserService loginService = new UserService(new UserDAO(conn));
            boolean success = loginService.login(userInputId, userInputPw);

            if (success) {
                System.out.println("로그인 성공");
                int currentUserNum = loginService.getUserNumById(userInputId);
                return currentUserNum;
            } else {
                System.out.println("아이디 또는 비밀번호가 잘못되었습니다.");
                return 0;
            }
        } catch (Exception e) {
            System.out.println("로그인 중 오류 발생: " + e.getMessage());
            return 0;
        }
    }

    public static void exit() {
        System.out.println("프로그램을 종료합니다.");
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        boolean run = true;
        boolean isLoggedIn = false;
        int userNum = 0;
        
        String currentUserId = null;

        try {
            Class.forName("oracle.jdbc.OracleDriver");
            Connection conn = DriverManager.getConnection(
                    "jdbc:oracle:thin:@114.207.158.130:1521:xe",
                    "HOMEWORK2",
                    "homework2@"
            );

            CartDAO cart =  new CartDAO(conn);
             
            while (run) {
                String choice = list(sc, userNum);

                switch (choice) {
                    case "1":
                    	insertUser(conn, sc);
                        break;

                    case "2":
                        int loginResult = login(conn, sc);
                        if (loginResult != 0) {
                            isLoggedIn = true;
                            userNum = loginResult;
                            cart.setUserNum(userNum);
                        }
                        break;

                    case "3":
                    	ProductService productService = new ProductService(
                    		    new ProductDAO(conn),
                    		    cart
                    		);
                    		productService.detailMenu();
                        break;

                    case "4":
                        if (isLoggedIn) {
                        	//setUserNum(userNum);
                            System.out.println("=============== 장바구니에 들어오셨습니다 =================");
							try {
								CartService cartServ = new CartService(cart);
								
								cartServ.takeAllContent(); // 전체출력

								// 보조메뉴
								while (true) {
									System.out.println("----------------------------------");
									System.out
											.println("[보조메뉴] 1. 물건 삭제하기  | 2. 주문확정  | 3. 장바구니 전체 보기 | 4. 장바구니 나가기");
									String number = sc.nextLine();
									// 보조메뉴1.
									if ("1".equals(number)) {
										cartServ.deleteProduct();
										// 보조메뉴2.
									} else if ("2".equals(number)) {
										cartServ.ordersConfirmed();
										// 보조메뉴3.
									} else if ("3".equals(number)) {
										cartServ.takeAllContent();
									} else {
										// 보조메뉴4.이면
										System.out.println("--------- 장바구니를 나갔습니다. ---------");
										break;
									}
								}

							} catch (Exception e) {
								e.printStackTrace();
								System.out.println("main 4번 선택에서 error");
							}
                            
                        } else {
                            System.out.println("로그인이 필요합니다");
                        }
                        break; 

                    case "5":
                        if (isLoggedIn) {
                        	OrderService orderService = new OrderService(new OrderDAO(conn));
                        	orderService.totalLog(userNum);
                        } else {
                            System.out.println("※ 로그인이 필요합니다.");
                        }
                        break;

                    case "0":
                        exit();
                        run = false;
                        break;

                    default:
                        System.out.println("잘못된 입력입니다. 다시 선택해주세요.");
                }
            }
            conn.close();
        } catch (Exception e) {
            System.out.println("DB 연결 오류: " + e.getMessage());
        }

        sc.close();
    }
}
