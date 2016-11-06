window.onload=function(){
	waterfall()
	var data={
		['''''''''']
			 }
	
	
	
	
	
	
	
	
	
	
	
	
	
}
function waterfall(parent,pin){
	var oParent=document.getElementById(parent);
	var aPin=getClassObj(oParent,pin);
	var iPinW=aPin[0].offsetWidth;
	var num=math.floor(document.documentElement.clientWidth/iPinW);
	oParent.style.cssText='width:'+num*iPinW+'px;margin:0px auto;';
	
	
	var pinHArr=[];
	for(var i=0;i<aPin.length;i++){
        var pinH=aPin[i].offsetHeight;
		 if(i<num){
            pinHArr[i]=pinH; //第一行中的num个块框pin 先添加进数组pinHArr
        }else{
            var minH=Math.min.apply(null,pinHArr);//数组pinHArr中的最小值minH
            var minHIndex=getminHIndex(pinHArr,minH);
            aPin[i].style.position='absolute';//设置绝对位移
            aPin[i].style.top=minH+'px';
            aPin[i].style.left=aPin[minHIndex].offsetLeft+'px';
            //数组 最小高元素的高 + 添加上的aPin[i]块框高
            pinHArr[minHIndex]+=aPin[i].offsetHeight;//更新添加了块框后的列高
        }
		
		
	}

	
	
	
	
	
	
	
	
	
}
