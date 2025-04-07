package ch06.sec04;

public class Solution {

	public int solution(int m, int[] ledger) {
		int account = 0;
		for(int request : ledger) {
			if(request >= 0) {
				account += request;
			} else {
				if(request + account >= -m) {
					account += request;
				}
			}
			
		}
		return account;
	}
	
}
