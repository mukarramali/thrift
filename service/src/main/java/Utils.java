import java.util.ArrayList;
import java.util.List;
import java.util.Random;

class Utils {

    private static int[] odds = {1, 3, 5, 7, 9};
    private static int[] evens = {0, 2, 4, 6, 8, 10};

    static List<Integer> randomNumbers() {
        return oddsAndEvens(new Random().nextBoolean());
    }

    private static List<Integer> oddsAndEvens(boolean small) {
        int oddSize = small ? 1 : 2;
        int evenSize = small ? 3 : 6;
        List<Integer> mixedNumbers = getEvenNumbers(evenSize);
        mixedNumbers.addAll(getOddNumbers(oddSize));
        return mixedNumbers;
    }

    private static List<Integer> getOddNumbers(int size) {
        List<Integer> randomNumbers = new ArrayList<>();
        for(int i=0;i<size;i++) randomNumbers.add(getRandom(odds));
        return randomNumbers;
    }

    private static List<Integer> getEvenNumbers(int size) {
        List<Integer> randomNumbers = new ArrayList<>();
        for(int i=0;i<size;i++) randomNumbers.add(getRandom(evens));
        return randomNumbers;
    }

    private static int getRandom(int[] array) {
        int rnd = new Random().nextInt(array.length);
        return array[rnd];
    }
}
