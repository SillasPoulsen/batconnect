var Twit = require('Twit');

console.log("the twitter api is beeing called");
var T = new Twit({
  consumer_key : 'gW2Mq21vDftiAuza7GShwciNp',
  consumer_secret: 'RJGPjzpU5CXgUUgu0EY9iIK9Cmpd5rLqQ5H8zHDgluKyrvSNxV',
  app_only_auth:        true
});
T.get('search/tweets', { q: 'banana since:2011-07-11', count: 1 }, function(err, data, response) {
  console.log(data)
})
T.get('user/show/', { screen_name: 'fracashawg' }, function (err, data, response) {
console.log(data);
console.log(err);
//console.log(response);
})


