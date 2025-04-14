package asd;

public class Board {
    int size;
    String[][] map;

    Board(int size) {
        this.size = size;
        map = new String[size][size];
        for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {
                map[row][col] = ".";
            }
        }
    }

    public void print() {

        
        for (int row = 0; row < size; row++) {
            System.out.printf("%2d ", row);
            for (int col = 0; col < size; col++) {
                System.out.print(" " + map[row][col]);
            }
            System.out.println();
        }
        System.out.print("   ");
        for (char c = 'A'; c < 'A' + size; c++) {
            System.out.print(" " + c);
        }
        System.out.println();
    }


    public boolean putStone(int[] ans) {
        int row = ans[0];
        int col = ans[1];
        String stone = ans[2] == 1 ? "O" : "X";

        if (!map[row][col].equals(".")) {
            System.out.println("이미 돌이 있습니다");
            return false;	
        }
        map[row][col] = stone;
        return true;
    }


  
    public boolean checkWinner() {
        for (int row = 0; row < size; row++) {
            for (int col = 0; col < size; col++) {
                String current = map[row][col];
                if (current.equals(".")) continue;

                
                if (col + 4 < size &&	// 오른쪽
                    current.equals(map[row][col + 1]) &&
                    current.equals(map[row][col + 2]) &&
                    current.equals(map[row][col + 3]) &&
                    current.equals(map[row][col + 4])) {
                    return true;
                }

                
                if (row + 4 < size &&	// 아래
                    current.equals(map[row + 1][col]) &&
                    current.equals(map[row + 2][col]) &&
                    current.equals(map[row + 3][col]) &&
                    current.equals(map[row + 4][col])) {
                    return true;
                }

               
                if (row + 4 < size && col + 4 < size &&		// 우하향 대각선
                    current.equals(map[row + 1][col + 1]) &&
                    current.equals(map[row + 2][col + 2]) &&
                    current.equals(map[row + 3][col + 3]) &&
                    current.equals(map[row + 4][col + 4])) {
                    return true;
                }

               
                if (row + 4 < size && col - 4 >= 0 &&		// 좌하향 대각선
                    current.equals(map[row + 1][col - 1]) &&
                    current.equals(map[row + 2][col - 2]) &&
                    current.equals(map[row + 3][col - 3]) &&
                    current.equals(map[row + 4][col - 4])) {
                    return true;
                }
            }
        }

        return false;
    }

}
