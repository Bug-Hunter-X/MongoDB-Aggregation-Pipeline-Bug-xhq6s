```javascript
db.collection.createIndex( { field: 1 } ); // Ensure index on the field used for grouping
db.collection.aggregate([
  {
    $match: { /*some condition*/ }
  },
  {
    $group: {
      _id: "$field",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10 }
])
```