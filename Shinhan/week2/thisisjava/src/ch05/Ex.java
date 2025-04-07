package ch05;

import java.util.Scanner;

public class Ex {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        int numOfStudents = 0;
        int[] scores = null; // 점수 저장 배열 선언

        while (true) {
            System.out.println("---------------------------------------------------");
            System.out.println("1. 학생수 | 2. 점수입력 | 3. 점수리스트 | 4. 분석 | 5. 종료");
            System.out.println("---------------------------------------------------");
            System.out.print("선택> ");
            int choice = scanner.nextInt();

            if (choice == 1) {
                System.out.print("학생 수: ");
                numOfStudents = scanner.nextInt();
                scores = new int[numOfStudents]; // 점수 배열 생성
            } else if (choice == 2) {
                if (scores == null) {
                    System.out.println("먼저 학생 수를 입력하세요.");
                    continue;
                }
                for (int i = 0; i < scores.length; i++) {
                    System.out.print("scores[" + i + "] = ");
                    scores[i] = scanner.nextInt();
                }
            } else if (choice == 3) {
                if (scores == null) {
                    System.out.println("점수가 입력되지 않았습니다.");
                    continue;
                }
                for (int i = 0; i < scores.length; i++) {
                    System.out.println("scores[" + i + "] = " + scores[i]);
                }
            } else if (choice == 4) {
                if (scores == null) {
                    System.out.println("점수가 입력되지 않았습니다.");
                    continue;
                }
                int max = scores[0];
                int sum = 0;
                for (int score : scores) {
                    if (score > max) {
                        max = score;
                    }
                    sum += score;
                }
                double avg = (double) sum / scores.length;
                System.out.println("최고 점수: " + max);
                System.out.println("평균 점수: " + avg);
            } else if (choice == 5) {
                System.out.println("프로그램 종료");
                break;
            } else {
                System.out.println("잘못된 입력입니다. 다시 선택해주세요.");
            }
        }

        scanner.close();
    }
}
