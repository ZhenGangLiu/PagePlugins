/** html文件插入<div id="insertPage"></div>;引入css,pagePlugin.js需要请求的js文件插入cuPage.a(19);//插入总页数; $('.nexPbtn,.prePbtn,.searchPbtn').click(function(){var current=cuPage.a();console.log(current)})//返回当前页	**/
var cuPage;
$(function() {
	var pageHtml = '<div id="paging">' + '<button class="prePbtn commonstyle backstyle">上一页</button> ' + ' <span class="prepage">1</span> / <span class="nexpage">1</span> ' + ' <button class="nexPbtn commonstyle surestyle">下一页</button> 到 ' + ' <input type="text" class="searchpage commonstyle surestyle"> 页 ' + ' <button class="searchPbtn commonstyle surestyle">确认</button> ' + '</div>';
	document.getElementById("insertPage").innerHTML = pageHtml;
	/*var pageHead = document.getElementsByTagName('HEAD').item(0);
	var style = document.createElement('link');
	style.href = './pagePlugin.css';
	style.rel = 'stylesheet';
	style.type = 'text/css';
	pageHead.appendChild(style);*/
	var pre, nex, search, pageNum = 1;
	cuPage = {
		a: function(total) {
			$('.nexpage').text(total)
			return pageNum;
		}
	}
	$('.nexPbtn').click(function() {
		pre = parseInt($('.prepage').text());
		nex = parseInt($('.nexpage').text());
		if(pre < nex) {
			$(".prePbtn").addClass("surestyle").removeClass("backstyle");
			pre++;
			$('.prepage').text(pre);
			pageNum = pre;
			//drawLists()
		} else {
			$(this).addClass("backstyle").removeClass("surestyle")
		}
	});
	$('.prePbtn').click(function() {
		pre = parseInt($('.prepage').text());
		nex = parseInt($('.nexpage').text());
		if(1 < pre) {
			$(".nexPbtn").addClass("surestyle").removeClass("backstyle");
			pre--;
			$('.prepage').text(pre);
			pageNum = pre;
		} else {
			$(this).addClass("backstyle").removeClass("surestyle")
		}
	});
	$('.searchPbtn').click(function() {
		search = parseInt($('.searchpage').val());
		nex = parseInt($('.nexpage').text());
		if(search <= nex && 0 < search) {
			$(".prePbtn").addClass("surestyle").removeClass("backstyle");
			$('.prepage').text($('.searchpage').val());
			pageNum = search;
		} else {
			$('.searchpage').val(nex);
			$('.prepage').text(nex);
			pageNum = nex;
		}
	});

})