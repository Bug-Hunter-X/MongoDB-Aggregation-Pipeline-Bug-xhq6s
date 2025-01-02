```javascript
// Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {
    $match: { /*some condition*/ }
  },
  {
    $group: {
      _id: "$field", //Grouping by a field that's not indexed
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10 } //Limiting results without considering the sort
])
```