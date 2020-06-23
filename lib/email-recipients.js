module.exports = [
  {
    '$unwind': {
      'path': '$headers.To', 
      'includeArrayIndex': 'string', 
      'preserveNullAndEmptyArrays': false
    }
  }, {
    '$group': {
      '_id': '$headers.To', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$sort': {
      'count': -1
    }
  }
];
