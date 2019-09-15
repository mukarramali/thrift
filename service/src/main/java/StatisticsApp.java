import org.apache.thrift.server.TServer;
import org.apache.thrift.server.TSimpleServer;
import org.apache.thrift.transport.TServerSocket;
import org.apache.thrift.transport.TServerTransport;
import org.apache.thrift.transport.TTransportException;
import statistics.StatisticsService;

public class StatisticsApp {
    public static void main(String[] args) {
        StatisticsServer hwServer = new StatisticsServer();
        StatisticsService.Processor processor = new StatisticsService.Processor(hwServer);
        try {
            TServerTransport tServerTransport = new TServerSocket(9092);
            TServer server = new TSimpleServer(new TServer.Args(tServerTransport).processor(processor));
            System.out.println("Starting the server");
            server.serve();
        } catch (TTransportException e) {
            e.printStackTrace();
        }
    }
}
