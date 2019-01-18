var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
     var newFriend = req.body
     var bestFriend = {
         name: "",
         photo: "",
         totaldif: Infinity
     }
     for (var i =0; i < friends.length; i++) {
        var currentFriend = friends[i];
        var dif = 0
        console.log(currentFriend.name);

        for (var j = 0; j < currentFriend.scores.length; j ++){
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = newFriend.scores[j];
            dif = Math.abs(currentUserScore - currentFriendScore);
        }
        if (dif < bestFriend.totaldif){
            bestFriend.name = currentFriend.name
            bestFriend.photo = currentFriend.photo
            bestFriend.totaldif = dif
        }  
     }
friends.push(newFriend)
res.json(bestFriend)
     });
};
