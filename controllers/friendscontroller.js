var friends = require("../data/friends")

function getFriends(req, res) {
    return res.json(friends)

}

function addFriends(req, res) {
    console.log(req.body);
    var newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores,
    }
    var differences = []

    var bestmatch = {};
    for (i = 0; i < friends.length; i++) {

        totalDiference = 0

        for (j = 0; j < friends[i].scores.length; j++) {

            totalDiference += Math.abs(5 - parseInt(friends[i].scores[j]));
                console.log(totalDiference)
                console.log(friends.length)
                console.log(friends)
            if (totalDiference <= friends.length) {
                console.log('Yes')
                bestmatch.name = friends[i].name;
                bestmatch.photo = friends[i].photo;
                bestmatch.friendDifference = totalDiference;
            }


        }

    }
    res.send(bestmatch);
   
}





module.exports = {
    getFriends,
    addFriends
}