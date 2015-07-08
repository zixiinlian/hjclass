/*
2009-4-13日，zeng根据lingye的Version:1.0&#13日期控件进行了完善
2009-12-3日，改进版Version:1.0&#14日期控件
调用方式一：
点击文本框激活控件
<input type="text" onclick="MyCalendar.SetDate(this)"/>
调用方式二：
点击按纽激活控件
<input type="text" id="time1"/><input type="button" onclick="MyCalendar.SetDate(this,document.getElementById('time1'))" value="选择"/>
*/
function L_calendar(){}
L_calendar.prototype={
	_VersionInfo:"Version:1.1",
	Moveable:true,
	NewName:"",
	insertId:"",
	ClickObject:null,
	InputObject:null,
	InputDate:null,
	IsOpen:false,
	L_TheColor_temp:"",	 		//临时保存日期的颜色
	L_TheColor_cur:"#cccccc",	//当前月背景色
	L_TheColor_else:"#eeeeee",	//前月和后月的背景色
	L_TheColor_input:"#ff00ff",	//输入框日期对应的背景色
	L_TheColor_today:"#ffd700",	//输入框日期对应的背景色
	L_TheColor_active:"#ffd700",//鼠标活动色
	GetDateLayer:function(){
		return window.L_DateLayer;
		},
	L_TheYear:new Date().getFullYear(), //定义年的变量的初始值
	L_TheMonth:new Date().getMonth()+1,	//定义月的变量的初始值
	L_WDay:new Array(39),//定义写日期的数组
	MonHead:new Array(31,28,31,30,31,30,31,31,30,31,30,31),    		   //定义阳历中每个月的最大天数
	GetY:function(){
		var obj;
		if (arguments.length > 0){
			obj==arguments[0];
			}
		else{
			obj=this.ClickObject;
			}
		if(obj!=null){
			var y = obj.offsetTop;
			while (obj = obj.offsetParent) y += obj.offsetTop;
			return y;}
		else{return 0;}
		},
	GetX:function(){
		var obj;
		if (arguments.length > 0){
			obj==arguments[0];

		}
		else{
			obj=this.ClickObject;
		}
		if(obj!=null){
			var y = obj.offsetLeft;
			while (obj = obj.offsetParent) y += obj.offsetLeft;
			return y;}
		else{return 0;}
		},
	CreateHTML:function(){
		var htmlstr="";
		htmlstr+="<div id=\"L_calendar\">\r\n";
		htmlstr+="<span id=\"SelectYearLayer\" style=\"z-index: 9999;position: absolute;top: 3; left: 25;display: none\"></span>\r\n";
		htmlstr+="<span id=\"SelectMonthLayer\" style=\"z-index: 9999;position: absolute;top: 3; left: 90;display: none\"></span>\r\n";
		htmlstr+="<div id=\"L_calendar-year-month\"><div id=\"L_calendar-PrevM\" onclick=\"parent."+this.NewName+".PrevM()\" title=\"前一月\" onmouseover=\"parent."+this.NewName+".L_TheColor_temp=this.style.backgroundColor;this.style.backgroundColor=parent."+this.NewName+".L_TheColor_active;\" onmouseout=\"this.style.backgroundColor=parent."+this.NewName+".L_TheColor_temp\"><b>&lt;</b></div>";
		htmlstr+="<div id=\"L_calendar-year\" onmouseover=\"style.backgroundColor='#FFD700'\" onmouseout=\"style.backgroundColor='white'\" onclick=\"parent."+this.NewName+".SelectYearInnerHTML('"+this.L_TheYear+"')\"></div><div id=\"L_calendar-month\"  onmouseover=\"style.backgroundColor='#FFD700'\" onmouseout=\"style.backgroundColor='white'\" onclick=\"parent."+this.NewName+".SelectMonthInnerHTML('"+this.L_TheMonth+"')\"></div>";
		htmlstr+="<div id=\"L_calendar-NextM\" onclick=\"parent."+this.NewName+".NextM()\" title=\"后一月\" onmouseover=\"parent."+this.NewName+".L_TheColor_temp=this.style.backgroundColor;this.style.backgroundColor=parent."+this.NewName+".L_TheColor_active;\" onmouseout=\"this.style.backgroundColor=parent."+this.NewName+".L_TheColor_temp\"><b>&gt;</b></div></div>\r\n";
		htmlstr+="<div id=\"L_calendar-week\"><ul><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul></div>\r\n";
		htmlstr+="<div id=\"L_calendar-day\">\r\n";
		htmlstr+="<ul>\r\n";
		for(var i=0;i<this.L_WDay.length;i++){
			htmlstr+="<li id=\"L_calendar-day_"+i+"\" onmouseover=\"parent."+this.NewName+".L_TheColor_temp=this.style.background;this.style.background=parent."+this.NewName+".L_TheColor_active;\" onmouseout=\"this.style.background=parent."+this.NewName+".L_TheColor_temp\"></li>\r\n";
		}
		htmlstr+="</ul>\r\n";
		htmlstr+="<span id=\"L_calendar-today\" onclick=\"parent."+this.NewName+".Today()\" onmouseover=\"parent."+this.NewName+".L_TheColor_temp=this.style.backgroundColor;this.style.backgroundColor=parent."+this.NewName+".L_TheColor_active;\" onmouseout=\"this.style.backgroundColor=parent."+this.NewName+".L_TheColor_temp\"><b>今天</b></span>\r\n";
		htmlstr+="</div>\r\n";
		htmlstr+="</div>\r\n";

		var stylestr="";
		stylestr+="<style type=\"text/css\">";
		stylestr+="body{background:#fff;font-size:12px;margin:0px;padding:0px;text-align:left}\r\n";
		stylestr+="#L_calendar{border:1px solid blue;width:158px;padding:1px;height:180px;z-index:9998;text-align:center}\r\n";
		stylestr+="#L_calendar-year-month{height:23px;line-height:23px;z-index:9998;}\r\n";
		stylestr+="#L_calendar-year{line-height:23px;width:60px;float:left;z-index:9998;position: absolute;top: 2; left: 25;cursor:default}\r\n";
		stylestr+="#L_calendar-month{line-height:23px;width:40px;float:left;z-index:9998;position: absolute;top: 2; left: 90;cursor:default}\r\n";
		stylestr+="#L_calendar-PrevM{position: absolute;top: 2; left: 3; width:20px; height:20px; cursor:pointer; text-align:center;}"
		stylestr+="#L_calendar-NextM{position: absolute;top: 2; left: 135; width:20px; height:20px; cursor:pointer; text-align:center;}"
		stylestr+="#L_calendar-week{height:23px;line-height:23px;z-index:9998;}\r\n";
		stylestr+="#L_calendar-day{height:136px;z-index:9998;}\r\n";
		stylestr+="#L_calendar-week ul{cursor:default;list-style:none;margin:0px;padding:0px;}\r\n";
		stylestr+="#L_calendar-week li{width:20px;height:20px;float:left;;margin:1px;padding:0px;text-align:center;background:#88ff88;}\r\n";
		stylestr+="#L_calendar-day ul{list-style:none;margin:0px;padding:0px;}\r\n";
		stylestr+="#L_calendar-day li{cursor:pointer;width:20px;height:20px;float:left;;margin:1px;padding:0px;}\r\n";
		stylestr+="#L_calendar-control{height:25px;z-index:9998;}\r\n";
		stylestr+="#L_calendar-today{cursor:pointer;float:left;width:63px;height:20px;line-height:20px;margin:1px;text-align:center;background:#cccccc}"
		stylestr+="</style>";

		var TempLateContent="<html>\r\n";
		TempLateContent+="<head>\r\n";
		TempLateContent+="<title></title>\r\n";
		TempLateContent+=stylestr;
		TempLateContent+="</head>\r\n";
		TempLateContent+="<body>\r\n";
		TempLateContent+=htmlstr;
		TempLateContent+="</body>\r\n";
		TempLateContent+="</html>\r\n";
		this.GetDateLayer().document.writeln(TempLateContent);
		this.GetDateLayer().document.close();
		},
	InsertHTML:function(id,htmlstr){
		var L_DateLayer=this.GetDateLayer();
		if(L_DateLayer){L_DateLayer.document.getElementById(id).innerHTML=htmlstr;}
		},
	WriteHead:function (yy,mm)  //往 head 中写入当前的年与月
  	{
		this.InsertHTML("L_calendar-year",yy + " 年");
		this.InsertHTML("L_calendar-month",mm + " 月");
  	},
	IsPinYear:function(year)            //判断是否闰平年
  	{
    	if (0==year%4&&((year%100!=0)||(year%400==0))) return true;else return false;
  	},
	GetMonthCount:function(year,month)  //闰年二月为29天
  	{
    	var c=this.MonHead[month-1];if((month==2)&&this.IsPinYear(year)) c++;return c;
  	},
	GetDOW:function(day,month,year)     //求某天的星期几
  	{
    	var dt=new Date(year,month-1,day).getDay()/7; return dt;
  	},
	GetText:function(obj){
		if(obj.innerText){return obj.innerText}
		else{return obj.textContent}
		},
	PrevM:function()  //往前翻月份
  	{
    	if(this.L_TheMonth>1){this.L_TheMonth--}else{this.L_TheYear--;this.L_TheMonth=12;}
    	this.SetDay(this.L_TheYear,this.L_TheMonth);
  	},
	NextM:function()  //往后翻月份
  	{
    	if(this.L_TheMonth==12){this.L_TheYear++;this.L_TheMonth=1}else{this.L_TheMonth++}
    	this.SetDay(this.L_TheYear,this.L_TheMonth);
  	},
	Today:function()  //Today Button
  	{
		var today;
    	this.L_TheYear = new Date().getFullYear();
    	this.L_TheMonth = new Date().getMonth()+1;
    	today=new Date().getDate();
    	if(this.InputObject){
		this.InputObject.value=this.L_TheYear + "-" + this.L_TheMonth + "-" + today;
    	}
    	this.CloseLayer();
  	},
	SetDay:function (yy,mm)   //主要的写程序**********
	{
  		this.WriteHead(yy,mm);
	  	//设置当前年月的公共变量为传入值
  		this.L_TheYear=yy;
  		this.L_TheMonth=mm;
		//当页面本身位于框架中时 IE会返回错误的parent
		if(window.top.location.href!=window.location.href){
			for(var i_f=0;i_f<window.top.frames.length;i_f++){
		  		if(window.top.frames[i_f].location.href==window.location.href){L_DateLayer_Parent=window.top.frames[i_f];}
			}
		}
		else{
			L_DateLayer_Parent=window.parent;
			}
  		for (var i = 0; i < 39; i++){this.L_WDay[i]=""};  //将显示框的内容全部清空
  		var day1 = 1,day2=1,firstday = new Date(yy,mm-1,1).getDay();  //某月第一天的星期几
  		for (i=0;i<firstday;i++)this.L_WDay[i]=this.GetMonthCount(mm==1?yy-1:yy,mm==1?12:mm-1)-firstday+i+1	//上个月的最后几天
  		for (i = firstday; day1 < this.GetMonthCount(yy,mm)+1; i++){this.L_WDay[i]=day1;day1++;}
  		for (i=firstday+this.GetMonthCount(yy,mm);i<39;i++){this.L_WDay[i]=day2;day2++}
  		for (i = 0; i < 39; i++)
		{
			var da=this.GetDateLayer().document.getElementById("L_calendar-day_"+i+"");
			var year,month,day;
    		if (this.L_WDay[i]!="")
			{
				if(i<firstday){
					da.innerHTML="<b style=\"color:gray\">" + this.L_WDay[i] + "</b>";
					year=(mm==1?parseInt(yy)-1:yy);
					month=(mm==1?12:mm-1);
					day=this.L_WDay[i];
					da.style.background=this.L_TheColor_else;
				}
				else if(i>=firstday+this.GetMonthCount(yy,mm)){
					da.innerHTML="<b style=\"color:gray\">" + this.L_WDay[i] + "</b>";
					year=(mm==12?parseInt(yy)+1:yy);
					month=(mm==12?1:mm+1);
					day=this.L_WDay[i];
					da.style.background=this.L_TheColor_else;
				}
				else{
					da.innerHTML="<b style=\"color:#000\">" + this.L_WDay[i] + "</b>";
					year=yy;
					month=mm;
					day=this.L_WDay[i];
					da.style.background=(year == new Date().getFullYear()&&month==new Date().getMonth()+1&&day==new Date().getDate())? this.L_TheColor_today : this.L_TheColor_cur;
				}
				if(document.all){
					da.onclick=Function(""+this.NewName+".DayClick("+year+","+month+","+day+")");
				}
				else{
					da.setAttribute("onclick","parent."+this.NewName+".DayClick("+year+","+month+","+day+")");
				}
				da.title=year+"年"+month+"月"+day+"日";
				if(this.InputDate!=null){
					if(year==this.InputDate.getFullYear() && month== this.InputDate.getMonth() + 1 && day==this.InputDate.getDate()){
						da.style.background=this.L_TheColor_input;
						}
					}
      		}
  		}
	},
	SelectYearInnerHTML:function (strYear) //年份的下拉框
	{
 	 	if (strYear.match(/\D/)!=null){alert("年份输入参数不是数字！");return;}
		var m = this.L_TheYear;
		if (m < 1000 || m > 9999) {alert("年份值不在 1000 到 9999 之间！");return;}
  		var n = m - 10;
  		if (n < 1000) n = 1000;
  		if (n + 20 > 9999) n = 9974;
  		var s = "<select name=\"L_SelectYear\" id=\"L_SelectYear\" style='font-size: 12px' "
     		s += "onblur='document.getElementById(\"SelectYearLayer\").style.display=\"none\"' "
     		s += "onchange='document.getElementById(\"SelectYearLayer\").style.display=\"none\";"
     		s += "parent."+this.NewName+".L_TheYear = this.value; parent."+this.NewName+".SetDay(parent."+this.NewName+".L_TheYear,parent."+this.NewName+".L_TheMonth)'>\r\n";
  		var selectInnerHTML = s;
  		for (var i = n; i < n + 20; i++)
  		{
    		if (i == m)
       		{selectInnerHTML += "<option value='" + i + "' selected>" + i + "年" + "</option>\r\n";}
    		else {selectInnerHTML += "<option value='" + i + "'>" + i + "年" + "</option>\r\n";}
 		}
  		selectInnerHTML += "</select>";
		var DateLayer=this.GetDateLayer();
  		DateLayer.document.getElementById("SelectYearLayer").style.display="";
  		DateLayer.document.getElementById("SelectYearLayer").innerHTML = selectInnerHTML;
  		DateLayer.document.getElementById("L_SelectYear").focus();
		},
	SelectMonthInnerHTML:function (strMonth) //月份的下拉框
	{
  		if (strMonth.match(/\D/)!=null){alert("月份输入参数不是数字！");return;}
		var m = this.L_TheMonth;
 		var s = "<select name=\"L_SelectYear\" id=\"L_SelectMonth\" style='font-size: 12px' "
     		s += "onblur='document.getElementById(\"SelectMonthLayer\").style.display=\"none\"' "
     		s += "onchange='document.getElementById(\"SelectMonthLayer\").style.display=\"none\";"
     		s += "parent."+this.NewName+".L_TheMonth = this.value; parent."+this.NewName+".SetDay(parent."+this.NewName+".L_TheYear,parent."+this.NewName+".L_TheMonth)'>\r\n";
  		var selectInnerHTML = s;
  		for (var i = 1; i < 13; i++)
  		{
    		if (i == m)
       		{selectInnerHTML += "<option value='"+i+"' selected>"+i+"月"+"</option>\r\n";}
    		else {selectInnerHTML += "<option value='"+i+"'>"+i+"月"+"</option>\r\n";}
  		}
  		selectInnerHTML += "</select>";
		var DateLayer=this.GetDateLayer();
  		DateLayer.document.getElementById("SelectMonthLayer").style.display="";
  		DateLayer.document.getElementById("SelectMonthLayer").innerHTML = selectInnerHTML;
  		DateLayer.document.getElementById("L_SelectMonth").focus();
	},
	DayClick:function(yy,mm,dd)  //点击显示框选取日期，主输入函数*************
	{
  		if (this.ClickObject)
  		{
    		this.InputObject.value= yy + "-" + mm + "-" + dd ; //注：在这里你可以输出改成你想要的格式
    		this.CloseLayer();
 		}
  		else {this.CloseLayer(); alert("您所要输出的控件对象并不存在！");}
	},
	SetDate:function(){
		if (arguments.length <  1){alert("对不起！传入参数太少！");return;}
		else if (arguments.length >  2){alert("对不起！传入参数太多！");return;}
		this.InputObject=(arguments.length==1) ? arguments[0] : arguments[1];
		this.ClickObject=arguments[0];
		var reg = /^(\d+)-(\d{1,2})-(\d{1,2})$/;
		var r = this.InputObject.value.match(reg);
		if(r!=null){
			r[2]=r[2]-1;
			var d= new Date(r[1], r[2],r[3]);
			if(d.getFullYear()==r[1] && d.getMonth()==r[2] && d.getDate()==r[3]){
				this.InputDate=d;		//保存外部传入的日期
			}
			else this.InputDate="";
			this.L_TheYear=r[1];
			this.L_TheMonth=r[2]+1;
		}
		else{
			this.L_TheYear=new Date().getFullYear();
			this.L_TheMonth=new Date().getMonth() + 1
		}
		this.CreateHTML();
		var top=this.GetY();
		var left=this.GetX();
		var DateLayer=document.getElementById("L_DateLayer");
		DateLayer.style.top=top+this.ClickObject.clientHeight+5+"px";
		DateLayer.style.left=left+"px";
		DateLayer.style.display="block";
		if(document.all){
			this.GetDateLayer().document.getElementById("L_calendar").style.width="160px";
			this.GetDateLayer().document.getElementById("L_calendar").style.height="180px"
		}
		else{
			this.GetDateLayer().document.getElementById("L_calendar").style.width="154px";
			this.GetDateLayer().document.getElementById("L_calendar").style.height="180px"
			DateLayer.style.width="158px";
			DateLayer.style.height="184px";
		}
		this.SetDay(this.L_TheYear,this.L_TheMonth);
		},
	CloseLayer:function(){
		try{
			var DateLayer=document.getElementById("L_DateLayer");
			if((DateLayer.style.display=="" || DateLayer.style.display=="block") && arguments[0]!=this.ClickObject && arguments[0]!=this.InputObject){
				DateLayer.style.display="none";
			}
		}
		catch(e){}
		}
	}

document.writeln('<div><iframe id="L_DateLayer" name="L_DateLayer" frameborder="0" style="position:absolute;width:160px; height:190px;z-index:9998;display:none;"></iframe></div>');
var L_DateLayer_Parent=null;
var MyCalendar=new L_calendar();
MyCalendar.NewName="MyCalendar";
document.onclick=function(e)
{
	e = window.event || e;
  	var srcElement = e.srcElement || e.target;
	MyCalendar.CloseLayer(srcElement);
}