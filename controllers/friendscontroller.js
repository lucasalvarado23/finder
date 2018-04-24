var friends = require("../data/friends")

function getFriends(req, res) {
    return res.json(friends)

}

function addFriends(req, res) {
    var newFriend = {
        name: req.body.name,
        photo: req.body.photo,
        scores: req.body.scores,
    }
    var differences = []

    for (i = 0; i < friends.length; i++) {

        console.log(friends[i]);
        totalDiference = 0

        for (j = 0; j < friends[i].scores; j++) {

            totalDiference += math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

            if (totalDiference <= bestmatch.friendDifference) {

                bestmatch.name = friends[i].name;
                bestmatch.photo = friends[i].photo;
                bestmatch.friendDifference = totalDiference;
            }


        }

    }
}

friends.push(userData);

res.json(bestmatch);

module.exports = {
    getFriends,
    addFriends
}