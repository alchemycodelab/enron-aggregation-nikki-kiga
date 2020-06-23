module.exports = [
  {
    '$project': {
      'formattedDay': {
        '$dateToString': {
          'format': '%Y-%m-%d', 
          'date': '$headers.Date'
        }
      }
    }
  }, {
    '$group': {
      '_id': '$formattedDay', 
      'count': {
        '$sum': 1
      }
    }
  }, {
    '$group': {
      '_id': '$formattedDay', 
      'min': {
        '$min': '$count'
      }, 
      'max': {
        '$max': '$count'
      }, 
      'avg': {
        '$avg': '$count'
      }
    }
  }];
