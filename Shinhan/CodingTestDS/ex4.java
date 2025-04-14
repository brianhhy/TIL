/*
 * 1 ~ n번의 서로 다른 번호 -> n개의 번호
 * 물품에 번호가 붙는 기준 -> 번호가 낮은 순서대로
 * 낙찰받는 법 : 두 번째 자본이 많은 사람 + 10000원 내고 낙찰 -> 자기 자본에서 낙찰가 빼서 자본에 저장
 * 자본이 같을 경우 : 자본이 가장 많이 남은 참가자 중 번호가 가장 낮은 참가자가 자신의 남은 자본 모두 지불 후 낙찰
 * amounts : 자금   n : 경매 물품의 수  
 * 이때 물품 번호가 낮은 순으로 낙찰된 금액을 길이가 n 인 1차원 정수 배열에 담아 return 하도록solution 함수를 완성해 주세요.
 */
public void main(String[] args){
    
    public int[] solution(int n, int[] amounts) {
        int[] answer = {0};

        int max = amounts[0];
        int second = amounts[1];
        int maxIndex = 0;
        int secondIndex = 0;
        while(n>0){
            for(int i = 1;i<amounts.length;i++){
                if(amounts[i] > max){
                    max = amounts[i];
                    maxIndex = i;
                }
            }
            for(int j = 0;j<amounts.length;j++){
                if(amounts[j] > second && amounts[j] < max){
                    second = amounts[j];
                    secondIndex = j;
                }
            }
            
            if(max > second){
                answer += amounts[maxIndex] + 100000;
                amounts[maxIndex] = amounts[maxIndex] - (10000 + amounts[secondIndex]);
            } else if(max == second){
                answer += amounts[maxIndex];
                amounts[maxIndex] = 0;
            } else{
                break;
            }
            n--;
        }
        return answer;
    }
}


1000000 490000 700000 290000
290000 490000 700000 290000    710000
290000 490000 200000 290000    500000
290000 190000 200000 290000    300000
0      190000 200000 290000    290000