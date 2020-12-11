function getTime(){
	var now = new Date();
          var year = now.getFullYear(); //得到年份
          var month = 1 + now.getMonth();//得到月份
          if(month < 10) month = '0'+month;
          var date = now.getDate();//得到日期
          if(date < 10) date = '0'+date;
          var hour = now.getHours();//得到小时
          if(hour < 10) hour = '0'+hour;
         var minu = now.getMinutes();//得到分钟
         if(minu < 10) minu = '0'+minu;
         var sec = now.getSeconds();//得到秒
         if(sec < 10) sec = '0'+sec;
         return year+'-'+month+'-'+date+' '+hour+':'+minu+':'+sec+' ';
}


function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for(var i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0]]=decodeURI(strs[i].split("=")[1]);
        }
    }
    return theRequest;
} 

function tocode(){
  document.getElementById('tocodebtn').disabled = true
  setTimeout(() => {
    document.getElementById('app').style.display = "none"
    document.getElementsByTagName('body')[0].style.height = "100vh"
    document.getElementById('qrcode').style.display = 'block'
    let time = 300
    setInterval(function(){
        document.getElementById('time-qr').innerText = --time
    }, 1200)
  }, 1000);
}
var Request =GetRequest();
var text_type = parseInt(Request["type"]);
now = getTime();
document.getElementById('marquee').innerHTML = now + now + now + now + now + now + now + now;
document.getElementById('copy').innerHTML = now;
document.getElementById('node').innerHTML = now;

var RequestName = Request["name"];

if(RequestName == null) 
  document.getElementById('user_name').innerHTML = "孙润望";
else 
  document.getElementById('user_name').innerHTML = Request["name"];

if(isNaN(text_type))
	document.getElementById('text_type').innerHTML = "授权有效！";
else if(text_type == 1) {
  document.getElementById('text_type').innerHTML = "本科用户，授权有效！";
  document.getElementById('user_style').innerHTML = "本科生";
}
else if(text_type == 2){
  document.getElementById('text_type').innerHTML = "访客用户，授权有效！";
  document.getElementById('user_style').innerHTML = "访客用户";
}
else document.getElementById('text_type').innerHTML = "授权有效！";

var area=document.getElementById("box");
var regObj = /\d+/;
var tmpX = parseInt(regObj.exec(area.style.transform)[0])*-1;
var speed = 30;
var delay = 200;
function starMove(){
  time=setInterval("scroll()",speed);
}
function scroll(){
  if(tmpX==-1200){
  	tmpX = 0;
	area.style.transform = "translateX(" + tmpX +"px)";
  clearInterval(time);
  setTimeout("starMove()",delay);
  }else{
 	tmpX--;
 	area.style.transform = "translateX(" + tmpX +"px)";
  }
}
setTimeout("starMove()",delay);


