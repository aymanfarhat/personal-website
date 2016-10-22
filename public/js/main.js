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
			$('.gitrepos .loader').css('display','none');
			$.each(result,function(){
				$('.gitrepos ul').append("<li><a href='"+this.clone_url+"' target='_null'>"+this.name+"</a> "+ this.description+"</li>");
			});
		}
	});
}

function showBlogPosts()
{
	$.ajax({
		url:document.location.protocol+"//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q="+encodeURIComponent("http://thecodeship.com/feed/latest"),
		dataType:"GET",
		dataType:"json",
		success:function(data)
		{
			if(data.responseData.feed && data.responseData.feed.entries)
			{
				$('.blogposts .loader').css('display','none');
				$.each(data.responseData.feed.entries,function(i,post){
					$('.blogposts ul').append("<li><a href='"+post.link+"' target='_null'>"+post.title+"</a></li>");
				});
			}
		}
	});
}
