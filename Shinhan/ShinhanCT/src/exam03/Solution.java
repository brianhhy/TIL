package exam03;
/*고객들의 가입 기간을 담은 1차원 정수 배열 perind
고객들의 납부 내역을 담은 2차원 정수 배열 payments
고객들의 납부 예정 금액을 담은 1차원 정수 배열 estimates
이번 달에는 VIP가 아니지만 다음 달에 VIP가되는 고객의 수와
이번 달에는 VIP지만 다음 달에는 VIP가 아니게 되는 고객의 수를 정수 배열에 담아 return
vip 조건
가입기간 24개월 이상 + 납부 금액 90만원 이상
(특수 조건) 5년이상 + 60 ~ 90만원 사이
기간은 22이하 컷,
23일 때 payments 정수로 변환해서 총합, 총합에 estimates 더해서 다음달 할 수 있는지 확인(가능하면 다음 달 가능)
24일 때 : 조건은 위와 같고 가능하면 이번 달 가능
60일 때 : payments 정수로 변환해서 총합(60 이상), 총합에 estimates 더해서 다음달 할 수 있는지 확인

 * */


public class Solution {
	public static void main(String[] args) {
		
	}
	public int[] Solution(int[] periods, int[][] payments, int[] estimates) {
		int[] answer = {0,0};
		int[] currentPayments = {0};
		
		for (int i = 0; i < payments.length; i++) {
		    for (int j = 0; j < payments[i].length; j++) {
		        currentPayments[i] += payments[i][j];
		    }
		}
		
		return answer;
	}
}
	