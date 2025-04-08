package ch06.example;
import java.util.Scanner;

public class BankApplication {
    private static Account[] accounts = new Account[100];
    private static Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {

        while (true) {
            System.out.println("----------------------------------------");
            System.out.println("1.계좌생성 | 2.계좌목록 | 3.예금 | 4.출금 | 5.종료");
            System.out.println("----------------------------------------");
            System.out.print("선택> ");

            String choice = scanner.nextLine();

            if (choice.equals("1")) {
                createAccount();
            } else if (choice.equals("2")) {
                accountList();
            } else if (choice.equals("3")) {
                addMoney();
            } else if (choice.equals("4")) {
                subtractMoney();
            } else if (choice.equals("5")) {
                System.out.println("프로그램 종료");
                break;
            } else {
                System.out.println("잘못된 입력입니다.");
            }

        }
    }

    private static void createAccount() {
        System.out.println("---------");
        System.out.println("계좌생성");
        System.out.println("---------");
        System.out.print("계좌번호: ");
        String accNum = scanner.nextLine();
        System.out.print("계좌주: ");
        String name = scanner.nextLine();
        System.out.print("초기입금액: ");
        int currentMoney = Integer.parseInt(scanner.nextLine());

        Account newAccount = new Account(accNum, name, currentMoney);
        for (int i = 0; i < accounts.length; i++) {
            if (accounts[i] == null) {
                accounts[i] = newAccount;
                System.out.println("결과: 계좌가 생성되었습니다.");
                break;
            }
        }
    }

    private static void accountList() {
        System.out.println("---------");
        System.out.println("계좌목록");
        System.out.println("---------");
        for (Account account : accounts) {
            if (account != null) {
                System.out.printf("%s\t%s\t%d\n", account.getAccNum(), account.getName(), account.getCurrentMoney());
            }
        }
    }

    private static void addMoney() {
        System.out.println("---------");
        System.out.println("예금");
        System.out.println("---------");
        System.out.print("계좌번호: ");
        String accNum = scanner.nextLine();
        System.out.print("예금액: ");
        int money = Integer.parseInt(scanner.nextLine());

        Account account = findAccount(accNum);
        if (account != null) {
            account.setCurrentMoney(account.getCurrentMoney() + money);
            System.out.println("결과: 예금이 성공되었습니다.");
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    private static void subtractMoney() {
        System.out.println("---------");
        System.out.println("출금");
        System.out.println("---------");
        System.out.print("계좌번호: ");
        String accNum = scanner.nextLine();
        System.out.print("출금액: ");
        int money = Integer.parseInt(scanner.nextLine());

        Account account = findAccount(accNum);
        if (account != null) {
            if (account.getCurrentMoney() >= money) {
                account.setCurrentMoney(account.getCurrentMoney() - money);
                System.out.println("결과: 출금이 성공되었습니다.");
            } else {
                System.out.println("잔액이 부족합니다.");
            }
        } else {
            System.out.println("계좌를 찾을 수 없습니다.");
        }
    }

    private static Account findAccount(String accNum) {
        for (Account account : accounts) {
            if (account != null && account.getAccNum().equals(accNum)) {
                return account;
            }
        }
        return null;
    }
}
