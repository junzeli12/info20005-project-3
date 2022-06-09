	window.onload = function(){
				var toggle = document.getElementById("toggle");
				var ul = toggle.parentNode.getElementsByTagName("ul")[0];
				var content_right = document.getElementById('picture');
				var button = content_right.getElementsByTagName('button');
				var btn = document.getElementById('btn');
				var toggle1 = document.getElementById('toggle1');
				var filter = document.getElementById('filter');
				var checkbox = filter.getElementsByTagName('input');
				var num = 0;
				var i=0;
				/* when the user click the price, the left list will appear, and the price turn to red*/
				toggle.onclick = function(){
					i++;
					if(i%2){
						this.style.color = "red";
						this.style.display = "block";
						ul.style.display = "block";
						ul.parentNode.style.paddingBottom = "15px";
						ul.style.paddingLeft = "10px";
					}else{
						this.style.borderBottom=0;
						this.style.color = "black";
						ul.style.display = "none";
					}
				}
					/*when user click"+" button, this product will include the shopping carts, when they click "-". the product will be cancel from shopping carts */
				for(var i=0; i<button.length; i++){
					button[i].clicked = false;
					button[i].onclick = function(){   
						if(!this.clicked){
						this.style.color = "red";
							this.innerHTML = "-";
							toggle1.style.fontSize = '3em';
							toggle1.innerHTML = "."
							toggle1.style.color = "green";
							num++;
							
						}
						if(this.clicked){
							num--;
							this.style.color = "black"; 
							this.innerHTML = "+";								
						}
						if(num<1){
							toggle1.innerHTML =  "";
						}
						this.clicked = !this.clicked;

					}
				}
				/*when user choose the under price 1000, those product will show, when they click other price range, those product will disappear*/
				checked = false;
				allChecked = false;
		        for(var i=0; i<checkbox.length; i++){
					checkbox[i].onclick = function(){
						if(this.title=='show' && this.checked){
							content_right.style.display = "block";
							checked = true;
						}
						if(this.checked && this.title!='show'  && !checked){
							content_right.style.display = "none";
						}
						if(!this.checked && this.title=='show'){
							checked = false;
							content_right.style.display = "none";
						}
					}
				}
	}