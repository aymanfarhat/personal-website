$(document).ready(function(){
	showGitRepos("aymanfarhat","fork","created","desc");
});

function showGitRepos(username,type,sort,direction)
{
	$.ajax({
		type:"GET",
		url:"https://api.github.com/users/"+username+"/repos?type="+type+"&sort="+sort+"&direction="+direction,
		dataType:"json",
		success:function(result)
		{
			$.each(result,function(){
				$('.gitrepos').append("<li><a href='"+this.clone_url+"' target='_null'>"+this.name+"</a>"+ this.description+"</li>");
			});
		}
	});
}

function showBlogPosts()
{

}