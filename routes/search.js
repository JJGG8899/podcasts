var express = require('express');
var superagent = require('superagent');
var router = express.Router();

/* GET home page. */
router.get('/:term', function(req, res, next) {
  var term = req.params.term
  var url = 'http://itunes.apple.com/search'

  // request to iTunes API
  superagent
  .get(url)
  .query({media:'podcast', term: term})
  .set('Accept','application/json')
  .end(function(err, response){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
    }

    var data = JSON.parse(response.text)
    res.json({
      confirmation: 'success',
      response: data.results
    })
  })

});

module.exports = router;
