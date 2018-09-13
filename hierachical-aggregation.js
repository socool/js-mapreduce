var mapFunction = function() {
    var key = {
        u: this.userid,
        d: new Date(
            this.ts.getFullYear(),
            this.ts.getMonth(),
            this.ts.getDate(),
            this.ts.getHours(),
            0, 0, 0)};
    var value = {
            total: this.length,
            count: 1,
            mean: 0,
            ts: new Date() };
    emit(key,value);
};

var reduceFunction = function(key, values) {
    var r = { total: 0, count: 0, mean: 0, ts: null };
    values.forEach(function(v) {
        r.total += v.total;
        r.count += v.count;
    });
    return r;
};

var finalizeFunction = function(key, value) {
    if(value.count > 0) {
       value.mean = value.total / value.count;
    }
    value.ts = new Date();
    return value;
};

db.events.mapReduce(mapFunction, reduceFunction, {
  out:{ 'reduce': 'stats.hourly' },
  finalize: finalizeFunction
});
