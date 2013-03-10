$(document).ready(function(){
	showGitRepos("aymanfarhat","fork","created","desc");
	showBlogPosts();
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
				$('.gitrepos').append("<li><a href='"+this.clone_url+"' target='_null'>"+this.name+"</a> "+ this.description+"</li>");
			});
		}
	});
}

function showBlogPosts()
{
	$.ajax({
		url:document.location.protocol+"//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q="+encodeURIComponent("http://thecodeship.com/latest/feed/"),
		dataType:"GET",
		dataType:"json",
		success:function(data)
		{
			if(data.responseData.feed && data.responseData.feed.entries)
			{
				$.each(data.responseData.feed.entries,function(i,post){
					$('.blogposts').append("<li><a href='"+post.link+"' target='_null'>"+post.title+"</a></li>");
				});
			}
		}
	});
}