namespace java statistics
namespace js statistics

typedef i32 int

struct Statistics {
  1: double mean
  2: int median
  3: double variance
  4: double stdDev
}

exception InvalidOperation {
  1: i32 whatOp,
  2: string why
}

service StatisticsService {
    bool ping (),
    list<int> generateNums (),
    Statistics calculateStat (1: list<int> numbers) throws (1:InvalidOperation ouch)
}