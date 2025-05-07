package homework.user;

import java.sql.SQLException;

public class UserService {
    private UserDAO userDAO;
    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public void register(User user) {
        try {
            userDAO.insertUser(user);
            System.out.println("회원가입 성공");
            
        } catch (SQLException e) {
            System.out.println("회원가입 실패" + e.getMessage());
        }
    }
    public boolean login(String id, String pw) {
        try {
            return userDAO.login(id, pw);
        } catch (SQLException e) {
            System.out.println("로그인 중 오류 발생: " + e.getMessage());
            return false;
        }
	}
    public int getUserNumById(String id) {
        try {
            return userDAO.getUserNumById(id);
        } catch (SQLException e) {
            System.out.println("user_num 조회 실패: " + e.getMessage());
            return -1;
        }
    }

}



