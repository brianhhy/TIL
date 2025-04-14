package asd;

import java.util.Scanner;

public class Omok {
    public static void main(String[] args) {
        
        Player user = new Player("사용자", "O");
        Player computer = new Player("컴퓨터", "X");
        Board board = new Board(19);
        
        play(board, user, computer);
    }

    private static void play(Board board, Player user, Player computer) {
        Scanner sc = new Scanner(System.in);
        board.print();

        while (true) {
            
            boolean success;
            do {
                System.out.print(user.name + ">");
                int[] userInput = changeToNum(sc.nextLine(), 1);
                success = board.putStone(userInput);
            } while (!success);

            board.print();

            if (board.checkWinner()) {
                System.out.println(user.name + " 승리!");
                break;
            }

            
            do {
                System.out.print(computer.name + ">");
                int[] comInput = changeToNum(sc.nextLine(), 2);
                success = board.putStone(comInput);
            } while (!success);

            board.print();

            if (board.checkWinner()) {
                System.out.println(computer.name + " 승리!");
                break;
            }
        }

        sc.close();
    }



    
    private static int[] changeToNum(String input, int who) {
        
    	input = input.toUpperCase().trim(); 
        int col = input.charAt(0) - 'A';        
        int row = Integer.parseInt(input.substring(2).trim());

        return new int[]{row, col, who}; 

    }
}
