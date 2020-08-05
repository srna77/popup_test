window.addEventListener('load',function(){
	if(!window.opener) {
		Array.prototype.slice.call(document.querySelectorAll('input[type=text],input[type=date],input[type=number],input[type=date],input[type=email],input[type=tel],input[type=url]')).forEach(function(e){
			e.onfocus = function(){
				window.external.ShowInputTool("{'id': '" + this.id + "', 'type':'" + this.type + "', 'value': '" + this.value + "'}");
			}
		});	
		
		Array.prototype.slice.call(document.querySelectorAll('select')).forEach(function(e){
			e.onfocus = function(){
					var optionsText = [];
					var optionsValue = [];
					for(var i = 0; i < this.options.length; i++) {
						optionsText.push(this.options[i].text);
						optionsValue.push(this.options[i].value);
					}
				
					window.external.ShowInputTool("{'id': '" + this.id + "', 'type':'combo', 'value': '" + this.value + "', 'display':'" + optionsText.join(',') + "','actual':'" + optionsValue.join(',') + "'}");
			}
		});
	}				
});
