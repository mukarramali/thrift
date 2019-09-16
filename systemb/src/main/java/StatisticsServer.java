import org.apache.thrift.TException;
import statistics.Calculator;
import statistics.InvalidOperation;
import statistics.Statistics;
import statistics.StatisticsService;

import java.util.List;

public class StatisticsServer implements StatisticsService.Iface {
    @Override
    public boolean ping() throws TException {
        return true;
    }

    @Override
    public List<Integer> generateNums() throws TException {
        return Utils.randomNumbers();
    }

    @Override
    public Statistics calculateStat(List<Integer> numbersList) throws InvalidOperation, TException {
        int[] numbers = numbersList.stream().mapToInt(i -> i).toArray();
        double mean = Calculator.getMean(numbers);
        int median = Calculator.getMedian(numbers);
        double variance = Calculator.getVariance(numbers);
        double stdDev = Calculator.getStdDev(numbers);
        return new Statistics(
                mean,
                median,
                variance,
                stdDev
        );
    }
}
