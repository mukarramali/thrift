import org.apache.thrift.TException;
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
        double mean = Utils.getMean(numbers);
        int median = Utils.getMedian(numbers);
        double variance = Utils.getVariance(numbers);
        double stdDev = Utils.getStdDev(numbers);
        return new Statistics(
                mean,
                median,
                variance,
                stdDev
        );
    }
}
