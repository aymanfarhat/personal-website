$(document).ready(function(){
	showGitRepos("aymanfarhat");
});

function showGitRepos(username)
{
	$.ajax({
		type:"GET",
		url:"https://api.github.com/users/"+username+"/repos",
		dataType:"json",
		success:function(result)
		{
			console.log(result);
		}
	});
}