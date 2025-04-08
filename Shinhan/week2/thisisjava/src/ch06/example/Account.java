package ch06.example;

public class Account {
    private String accNum;     // 계좌번호
    private String name;   			// 예금주
    private int currentMoney;    // 잔액

    public Account(String accNum, String name, int currentMoney) {
        this.accNum = accNum;
        this.name = name;
        this.currentMoney = currentMoney;
    }

    public String getAccNum() {
        return accNum;
    }

    public String getName() {
        return name;
    }

    public int getCurrentMoney() {
        return currentMoney;
    }

    public void setCurrentMoney(int currentMoney) {
        this.currentMoney = currentMoney;
    }
}
