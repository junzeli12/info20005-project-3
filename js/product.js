window.onload=function()
{  
	var reduce = document.getElementById('reduce');
	var add = document.getElementById('add');
	var number = document.getElementById('number');
	reduce.onclick = function(){
        number.value = Number(number.value)-1;
        if(Number(number.value)<=0){
            number.value = 0;
        }
    }
    add.onclick = function(){
        number.value = Number(number.value)+1;
    }
			
}     /*when user click the number increase or decrease, the number will also change by different button*/