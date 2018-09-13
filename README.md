# js-mapreduce
## Add Data 
```
db.events.save( { userid: "a", ts: ISODate('2011-11-03 14:17:00'), length: 95 } );
db.events.save( { userid: "b", ts: ISODate('2011-11-03 14:23:00'), length: 110 } );
db.events.save( { userid: "c", ts: ISODate('2011-11-03 15:02:00'), length: 120 } );
db.events.save( { userid: "d", ts: ISODate('2011-11-03 16:45:00'), length: 45 } );

db.events.save( { userid: "a", ts: ISODate('2011-11-04 11:05:00'), length: 105 } );
db.events.save( { userid: "b", ts: ISODate('2011-11-04 13:14:00'), length: 120 } );
db.events.save( { userid: "c", ts: ISODate('2011-11-04 17:00:00'), length: 130 } );
db.events.save( { userid: "d", ts: ISODate('2011-11-04 15:37:00'), length: 65 } );
```


* https://docs.mongodb.com/ecosystem/use-cases/hierarchical-aggregation/
* https://docs.mongodb.com/manual/tutorial/perform-incremental-map-reduce/

Concern

** https://docs.mongodb.com/manual/core/map-reduce-concurrency/
