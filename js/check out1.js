/*After the page is loaded, get the specified tag*/
window.onload = function(){
    var form = document.getElementById("form");
    var next = document.getElementById("next");
    var aInput = form.getElementsByTagName("input");
    var check = document.getElementById("check");
    /*if user click the table without write anything, the validation hint will appear*/
    for(var i=0; i<aInput.length; i++){
        aInput[i].onblur = function(){
            if(this.type=='text'&& this.value.length<=0){
                var span = document.createElement('span');
                span.innerHTML = "Can not be empty!";
                this.parentNode.appendChild(span);
                span.className = 'tip';
            }
        }
    /*when they click again, the hint will remove*/
        aInput[i].onfocus = function(){
            if(this.type=='text'){
                var tip = this.parentNode.getElementsByTagName('span')[0];
                if(tip){
                    this.parentNode.removeChild(tip);
                }
            }          
        }           
    }
    /*when all of information is validate and correnct, it will link to next page when he click it */
    next.onclick = function(){
        if(!check.checked){
            alert('Your must click the agreement!')
            return false;
        }
    }
}
