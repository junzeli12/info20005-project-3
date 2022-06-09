window.onload = function(){
    var reduce = document.getElementById('reduce');
    var good = document.getElementById('good');
    var add = document.getElementById('add');
    var number = document.getElementById('number');
    var total = document.getElementById('total');
    var btnAll = document.getElementById('all');
    var cancel = document.getElementById('cancel');
    var bottom1 = document.getElementById('bottom1');
    var heart = document.getElementById('heart');
    var clicked = false;
    var input = document.getElementsByTagName('input');
    /*select all*/
    btnAll.onclick = function(){
        if(this.checked){            
            for(var i=0;i<input.length; i++){
                if(input[i].name=='checkbox'){
                    input[i].checked = true;
                }
            }
        }else{
            for(var i=0;i<input.length; i++){
                if(input[i].name=='checkbox'){
                    input[i].checked = false;
                }
            }
        }
    }
     /*if no product be selected, the "select all" will be not delete*/
    for(var i=0;i<input.length; i++){
        if(input[i].name=='checkbox' && !input[i].checked){
            input[i].onchange = function(){
                if(!this.checked){
                    btnAll.checked = false;
                }                               
            }
        }
    }
    /*when the qualitity number increase and decrease, the total price will be caculate and be changed*/
    reduce.onclick = function(){
        number.value = Number(number.value)-1;
        if(Number(number.value)<=0){
            number.value = 0;
        }
        total.innerHTML = number.value*500;
    }
    add.onclick = function(){
        number.value = Number(number.value)+1;
        total.innerHTML = number.value*500;
    }
        /*cancel product*/
    cancel.onclick = function(){
        if(confirm('Are you sure remove this product')){
            good.parentNode.removeChild(good);
            bottom1.style.display = 'none'
        }
    }
         /*user can type specific number, it also make change for total price */
    number.onchange = function(){
        total.innerHTML = this.value*500;
    }
        /*heart*/
    heart.onclick = function(){
        if(clicked){
            this.src = "picture/love2.png";
        }else{
            this.src = "picture/heart2.png";
        }
        clicked = !clicked;
    }
}
