//mv页面
function mvlist(){
//动态生成轮播图
var imgul = document.getElementsByClassName("img")[0];
var imgarr = [
["img/mv1.jpg","吴亦凡-6"],
["img/mv2.jpg","弦子-当我们只剩下我"],
["img/mv3.jpg","李荣浩-裙姊"],
["img/mv4.jpg","凤凰传奇-乡关何处是"],
["img/mv5.jpg","潘玮柏-第三类接触"],
["img/mv6.jpg","那英-三生三世十里桃花"],
]
for(var i=0;i<imgarr.length;i++){
	var lis = document.createElement("li");
	lis.setAttribute("class","show")
	var imgs = document.createElement("img");
	imgs.setAttribute("src",imgarr[i][0]);
	var spans = document.createElement("span");
	var ais = document.createElement("a");
	ais.innerText=imgarr[i][1];
	var iss = document.createElement("i");
	spans.appendChild(ais);
	spans.appendChild(iss);
	lis.appendChild(spans);
	lis.appendChild(imgs);
	imgul.appendChild(lis);
}

//动态生成榜单
var songul = document.getElementsByClassName("song")[0];
var songarr = [
"筷子兄弟-小苹果","筷子兄弟-小水果","儿童歌曲-小毛驴","贾云馨-大王叫我来巡山","儿童歌曲-我的小猪","儿童歌曲-我的好妈妈","王蓉-小鸡小鸡","儿童歌曲-小水果","儿童歌曲-小跳蛙","儿童歌曲-两只老虎"
]
for(var i=0;i<songarr.length;i++){
	var lis = document.createElement("li");
	var spans = document.createElement("span");
	var fonts = document.createElement("font");
	fonts.innerText=songarr[i];
	var iss = document.createElement("i");
	lis.appendChild(spans);
	lis.appendChild(fonts);
	lis.appendChild(iss);
	songul.appendChild(lis);
}
//序号背景定位
var songlist = songul.getElementsByTagName("li");
for(var i=0;i<songlist.length;i++){
	var songspan = songlist[i].childNodes[0];
	songspan.style.backgroundPosition="-336px "+(-218-i*29)+"px";
	songlist[i].index=i;
	songlist[i].onmouseover=function(){
		var songspan1 = songlist[this.index].childNodes[0];
//		alert(songspan.style.backgroundPositionX);
		songspan1.style.backgroundPositionX="-296px";
	}
	songlist[i].onmouseout=function(){
		var songspan2 = songlist[this.index].childNodes[0];
//		alert(songspan.style.backgroundPositionX);
		songspan2.style.backgroundPositionX="-336px";
	}
}

//图片轮播
var imgindex = 0;
var imglist = document.getElementsByClassName("img")[0].getElementsByTagName("li");
var pointlist = document.getElementsByClassName("point")[0].getElementsByTagName("li");
//设置时钟
var autotime = setInterval(function(){
	//判断index
	if(imgindex>4){
		imgindex=0;
	}else{
		imgindex++;
	}
	change(imgindex);
},2200);
//切换
function change(num){
	var imgshow = document.getElementsByClassName("show")[0];
	var pointshow = document.getElementsByClassName("hov")[0];
	var uls = document.getElementsByClassName("img")[0];
	
	uls.style.transform="translateX(-"+(num*663)+"px)";
	
	pointshow.removeAttribute("class");
	pointlist[num].setAttribute("class","hov");
	
	imgindex=num;
}
//hover事件
pointhover();
function pointhover(){
	for(var i=0;i<6;i++){
		pointlist[i].index=i;
		pointlist[i].onmouseover=function(e){
			change(this.index);
			clearInterval(autotime);
		}
		pointlist[i].onmouseout=function(e){
			autotime = setInterval(function(){
				//判断index
				if(imgindex>4){
					imgindex=0;
				}else{
					imgindex++;
				}
			//	alert(imgindex);
				change(imgindex);
			},2000);
		}
	}
}

//动态生成mvlist
var mvlist = document.getElementsByClassName("mvlist")[0];
var arr = [
["img/mvlist1.jpg","卫兰-差半步"],
["img/mvlist2.jpg","卫兰-差半步"],
["img/mvlist3.jpg","卫兰-差半步"],
["img/mvlist4.jpg","卫兰-差半步"],
["img/mvlist5.jpg","卫兰-差半步"],
["img/mvlist6.jpg","卫兰-差半步"],
["img/mvlist7.jpg","卫兰-差半步"],
["img/mvlist8.jpg","卫兰-差半步"],
["img/mvlist9.jpg","卫兰-差半步"],
["img/mvlist10.jpg","卫兰-差半步"],
["img/mvlist11.jpg","卫兰-差半步"],
["img/mvlist12.jpg","卫兰-差半步"],
["img/mvlist13.jpg","卫兰-差半步"],
["img/mvlist14.jpg","卫兰-差半步"],
["img/mvlist15.jpg","卫兰-差半步"],
["img/mvlist16.jpg","卫兰-差半步"],
["img/mvlist17.jpg","卫兰-差半步"],
["img/mvlist18.jpg","卫兰-差半步"],
["img/mvlist19.jpg","卫兰-差半步"],
["img/mvlist20.jpg","卫兰-差半步"]
];

var arr1 = [
["img/mvlist4.jpg","卫兰-差半步"],
["img/mvlist5.jpg","卫兰-差半步"],
["img/mvlist6.jpg","卫兰-差半步"],
["img/mvlist7.jpg","卫兰-差半步"],
["img/mvlist8.jpg","卫兰-差半步"],
["img/mvlist1.jpg","卫兰-差半步"],
["img/mvlist2.jpg","卫兰-差半步"],
["img/mvlist3.jpg","卫兰-差半步"],
["img/mvlist9.jpg","卫兰-差半步"],
["img/mvlist10.jpg","卫兰-差半步"],
["img/mvlist11.jpg","卫兰-差半步"],
["img/mvlist17.jpg","卫兰-差半步"],
["img/mvlist18.jpg","卫兰-差半步"],
["img/mvlist19.jpg","卫兰-差半步"],
["img/mvlist12.jpg","卫兰-差半步"],
["img/mvlist13.jpg","卫兰-差半步"],
["img/mvlist14.jpg","卫兰-差半步"],
["img/mvlist15.jpg","卫兰-差半步"],
["img/mvlist16.jpg","卫兰-差半步"],
["img/mvlist20.jpg","卫兰-差半步"]
];

var arr2 = [
["img/mvlist10.jpg","卫兰-差半步"],
["img/mvlist11.jpg","卫兰-差半步"],
["img/mvlist17.jpg","卫兰-差半步"],
["img/mvlist18.jpg","卫兰-差半步"],
["img/mvlist19.jpg","卫兰-差半步"],
["img/mvlist12.jpg","卫兰-差半步"],
["img/mvlist13.jpg","卫兰-差半步"],
["img/mvlist14.jpg","卫兰-差半步"],
["img/mvlist15.jpg","卫兰-差半步"],
["img/mvlist16.jpg","卫兰-差半步"],
["img/mvlist20.jpg","卫兰-差半步"]
];

var arr3 = [
["img/mvlist8.jpg","卫兰-差半步"],
["img/mvlist1.jpg","卫兰-差半步"],
["img/mvlist2.jpg","卫兰-差半步"],
["img/mvlist3.jpg","卫兰-差半步"],
["img/mvlist9.jpg","卫兰-差半步"],
["img/mvlist10.jpg","卫兰-差半步"],
["img/mvlist15.jpg","卫兰-差半步"],
["img/mvlist16.jpg","卫兰-差半步"],
["img/mvlist20.jpg","卫兰-差半步"]
];
//创建mv列表
function createMvList(arrs){
	mvlist.innerHTML="";
	for(var i=0;i<arrs.length;i++){
		var lis = document.createElement("li");
		var imgs = document.createElement("img");
		var spans = document.createElement("span");
		var is = document.createElement("i");
		var txts=document.createTextNode(arrs[i][1]);
		imgs.setAttribute("src",arrs[i][0]);
		spans.appendChild(txts);
		lis.appendChild(imgs);
		lis.appendChild(spans);
		lis.appendChild(is);
		mvlist.appendChild(lis);
	}
}
createMvList(arr);
//菜单点击事件
var manu = document.getElementsByClassName("manu")[0].getElementsByTagName("li");
for(var i=0;i<manu.length;i++){
	manu[i].index=i;
	manu[i].onclick=function(){
		for(var j=0;j<manu.length;j++){
			manu[j].removeAttribute("class","selected");
		}
		manu[this.index].setAttribute("class","selected");
		var arry = [arr,arr1,arr2,arr3];
		createMvList(arry[this.index]);
	}
}

}


//歌单页面js
function songlist(){
var songlist = document.getElementsByClassName("songlist")[0];
var arry = [
["img/songlist1.jpg","梦然发新歌1","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist2.jpg","梦然发新歌2","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist3.jpg","梦然发新歌3","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist4.jpg","梦然发新歌4","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist5.jpg","梦然发新歌5","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist6.jpg","梦然发新歌6","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist7.jpg","梦然发新歌7","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist8.jpg","梦然发新歌7","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist9.jpg","梦然发新歌8","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist10.jpg","梦然发新歌10","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"]
];
var arry1 = [
["img/songlist11.jpg","梦然发新歌1","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist12.jpg","梦然发新歌2","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist13.jpg","梦然发新歌3","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist14.jpg","梦然发新歌4","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist15.jpg","梦然发新歌5","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist16.jpg","梦然发新歌6","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist17.jpg","梦然发新歌7","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist18.jpg","梦然发新歌7","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist19.jpg","梦然发新歌8","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"],
["img/songlist20.jpg","梦然发新歌10","制作人：蓝雨","“柔情歌后”梦然，华语乐坛最具感召力女歌手，2017完美蜕变，带来最新单曲《听我的歌不许掉眼泪》，歌曲一经发行后迅速占领各大音乐排行榜。"]
];

function createSongList(arrys){
	songlist.innerHTML="";
	for(var i=0;i<arrys.length;i++){
		var lis = document.createElement("li");
		
		var asa = document.createElement("a");
		asa.setAttribute("class","pic");
		var imgs = document.createElement("img");
		imgs.setAttribute("src",arrys[i][0]);
		asa.appendChild(imgs);
		lis.appendChild(asa);
		
		var divs = document.createElement("div");
		var divasa = document.createElement("a");
		divasa.innerText=arrys[i][1];
		divs.appendChild(divasa);
		var spans = document.createElement("span");
		spans.innerText=arrys[i][2];
		divs.appendChild(spans);
		lis.appendChild(divs);
		
		var ps = document.createElement("p");
		ps.innerText=arrys[i][3];
		lis.appendChild(ps);
		
		var a1 = document.createElement("a");
		a1.setAttribute("class","btna1");
		var i1 = document.createElement("i");
		i1.setAttribute("class","i1");
		a1.innerText="播放全部";
		a1.appendChild(i1);
		lis.appendChild(a1);
		var a2 = document.createElement("a");
		a2.setAttribute("class","btna2");
		var i2 = document.createElement("i");
		i2.setAttribute("class","i2");
		a2.innerText="分享";
		a2.appendChild(i2);
		lis.appendChild(a2);
		
		songlist.appendChild(lis);
	}
}
//初始创建歌单列表
createSongList(arry);
//点击菜单切换内容
var manu = document.getElementsByClassName("manu")[0].getElementsByTagName("li");
for(var i=0;i<manu.length;i++){
	manu[i].index=i;
	manu[i].onclick=function(){
		for(var j=0;j<manu.length;j++){
			manu[j].removeAttribute("class","selected");
		}
		manu[this.index].setAttribute("class","selected");
		var arr = [arry,arry1];
		createSongList(arr[this.index%2]);
	}
}

}

//产品页面
function productpage(){
	//置顶显示
	var scrollt = document.getElementsByClassName("productscroll")[0];
	scrollt.style.display="none";
	if(document.body.scrollTop>700){
		scrollt.style.display="block";
	}else{
		scrollt.style.display="none";
	}
	scrollt.onclick=function(){
		scrollTo(0,0);
	}
	
}
