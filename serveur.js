// Partie twitter
// On récupère des données sur le réseau social.

var twit = require("twit");

var T = new twit({
  consumer_key:         'zOfVXOWIKbUNgjduuJ45yymVr',
  consumer_secret:      'eaRmC5tBsX7HkGkdlZUh2jI8Dt7EhvJWu4l6KpF8iT7TWALT95',
  access_token:         '856541301025669122-Ab46tjrqtgm4mPeiY13nuk850qim6Xr',
  access_token_secret:  'YRipsvEKx5835tR2xBaOXH3WUDqPl1Vm7DzkqdpWXwPVd',
})

var params = {
	q : "France",
	count : 5
}

T.get("search/tweets", params, gotData);

var tweetHtml = []; // Je n'arrive qu'à définir une variable globale pour pouvoir afficher les msg. :-(

function gotData(err, data, response) {
	var tweets = data.statuses;
	for(var i=0; i < tweets.length; i++) {
		tweetHtml.push(tweets[i].text);
		console.log(tweetHtml); // Histoire de vérifier sur la console que ça fonctionne.
		console.log("---");
	}
}

// Partie serveur
// 1ère tentative d'affichage avec Ajax.
// On intègre les résultats obtenus ci-dessus par l'API de twitter.

var express = require("express");
var app = express();

app.use("/javascript", express.static(__dirname+"/javascript"));
app.use("/lib", express.static(__dirname+"/lib"));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/html/index.html");
});

app.get("/api/affiche", function(req, res) {
	res.json(tweetHtml);
});

app.listen(8080);
console.log("serveur en route.")