var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];
var number_elements = scores.length;

var $ = function (id) { return document.getElementById(id); };

function addScore()
{
   var name = $('name').value;
   var score = $('score').value;

   if(name == "" || score == "" || isNaN(score) || score < 0 || score > 100){
   	alert("You must enter a name and a valid score.");
	}
   else
   {	alert(number_elements);
       names[number_elements] = name;
       scores[number_elements] = parseInt(score);
       number_elements ++;
   }
   $("name").focus();
}

function displayResults()
{
   var highest_score, average, name;
   highest_score = scores[0];
   name = names[0];
   average = 0;

   for(var i = 0; i < number_elements; i++ )
   {
       if(highest_score < scores[i])
       {
		highest_score = scores[i];
        name = names[i]
       }    
       average = average + scores[i];
   }
   average = average/number_elements;
   var display_results = "<h2><b>Results</h2></b><p>Average Score = "+average+"</p> \
   <p>High Score = "+name+"with a score of "+highest_score+"</p>";
   $('results').innerHTML = display_results;
}

function displayScores()
{
	var display_scores = "<tr><td colspan='2'><h2><b>Scores</b></h2> \
	</td></tr><tr><td><b>Name</b></td><td><b>Score</b></td></tr> ";
	for(var i = 0; i < number_elements; i++ )
	{
	display_scores = display_scores+"<tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>"
	}
	$('scores_table').innerHTML = display_scores;
}

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("name").focus();
};