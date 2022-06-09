var checked = false;
window.onload = function(){
    var payment = document.getElementById("payment");
    var aRadio = payment.getElementsByTagName('input');
    var form = document.getElementById("form");
    var aInput = form.getElementsByTagName("input");
    var check = document.getElementById("check");
    /*user can only choose one button of the top three choice*/
    for(var i=0; i<aRadio.length;i++){
        aRadio[i].onchange = function(){
            if(this.checked){
                for(var i=0; i<aRadio.length;i++){
                    aRadio[i].checked = false;
                }
                this.checked = true;
                checked = true; 
                for(var i=0; i<aInput.length; i++){
                    aInput[i].required = false;
                }            
            }
         

        }                       
      
    }
    /*if user did not choose top three choice, they have to write the input*/
    if(!checked){
        for(var i=0; i<aInput.length; i++){
            aInput[i].required = "required";
        }
        for(var i=0; i<aInput.length; i++){
            aInput[i].onblur = function(){
                if((this.type=='text' && this.value.length<=0)||(this.type=='number' && this.value.length<=0)){
                    var span = document.createElement('span');
                    span.innerHTML = "Can not be empty!";
                    this.parentNode.appendChild(span);
                    span.className = 'tip';
                }
            }
            aInput[i].onfocus = function(){
                if(this.type=='text'||this.type=='number'){
                    var tip = this.parentNode.getElementsByTagName('span')[0];
                    if(tip){
                        this.parentNode.removeChild(tip);
                    }
                }          
            }           
        }
    }
       /*to validate all of information*/
    next.onclick = function(){
        if(!check.checked){
            alert('Your must click the agreement!');
            return false;
        }

    }

  

}
