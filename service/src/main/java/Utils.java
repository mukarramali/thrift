import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Utils {

    static List<Integer> list1 = new ArrayList<>(Arrays.asList(0, 2, 4, 6, 8, 10, 1, 5));
    static List<Integer> list2 = new ArrayList<>(Arrays.asList(0, 8, 10, 5));

    public static List<Integer> randomNumbers() {
        return System.currentTimeMillis() % 2 == 0 ? list1 : list2;
    }

    public static double getMean(int[] numbers) {
        double sum = 0;
        for(int number:numbers) {
            sum += number;
        }
        return sum/numbers.length;
    }

    public static int getMedian(int[] numbers) {
        Arrays.sort(numbers);
        if (numbers.length % 2 == 0)
            return (numbers[(numbers.length / 2) - 1] + numbers[numbers.length / 2]) / 2;
        return numbers[numbers.length / 2];
    }

    public static double getVariance(int[] numbers) {
        double mean = getMean(numbers);
        double temp = 0;
        for(double number:numbers)
            temp += (number-mean)*(number-mean);
        return temp/(numbers.length-1);
    }

    public static double getStdDev(int[] numbers) {
        return Math.sqrt(getVariance(numbers));
    }
}
