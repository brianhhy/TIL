package exam04;

public class Solution {
	public void main(String[] args) {
		
		
		
		public int[] solution(int n, int[] amounts) {
		    int[] answer = new int[n];

		    for (int round = 0; round < n; round++) {
		        int max = -1;
		        int second = -1;
		        int maxIndex = -1;
		        int maxCount = 0;

		        
		        for (int i = 0; i < amounts.length; i++) {
		            if (amounts[i] > max) {
		                second = max;
		                max = amounts[i];
		                maxIndex = i;
		                maxCount = 1;
		            } else if (amounts[i] == max) {
		                maxCount++;
		            } else if (amounts[i] > second && amounts[i] < max) {
		                second = amounts[i];
		            }
		        }

		        if (max == 0) {
		            answer[round] = 0;
		        } else if (maxCount == 1) {
		            int actAmounts = second + 10000;
		            if (actAmounts > amounts[maxIndex]) actAmounts = amounts[maxIndex];
		            amounts[maxIndex] -= actAmounts;
		            answer[round] = actAmounts;
		        } else {
		            for (int i = 0; i < amounts.length; i++) {
		                if (amounts[i] == max) {
		                    answer[round] = amounts[i];
		                    amounts[i] = 0;
		                    break;
		                }
		            }
		        }
		    }

		    return answer;
		}


	}
}
