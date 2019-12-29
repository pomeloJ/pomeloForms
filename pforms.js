/*
    pomeloForms
    Author : pomeloJ
    description : just easy to use
*/
let pforms=(function(){
	return {
		'getDatas':function(obj){
			if(typeof(jQuery)=='undefined'){
				console.error('jQuery lib needs');
				return false;
			}
			if(typeof(obj)!='object')return false;
			let data={}
			obj.find('input,select,textarea').each(function(i,v){
				let t=$(v);
				let tagName=t.prop("tagName").toLowerCase();
				let val='';

				switch(tagName){
					case 'select':
						val=t.find('option:selected').val();
					break;
					case 'textarea':
						val=t.val();
					break;
					case 'input':
						let t2=t.attr('type');

						switch(t2){
							case 'radio':
								if(t.prop('checked')===true){
									val=t.val();
								}else{
									return true;
								}
							break;
							case 'checkbox':
								if(t.prop('checked')===true){
									val=t.val();
									break;
								}
								val=false;
							break;
							case 'text':
							default:
								val=t.val();
							break;
						}
					break;
				}

				if(val===false)return ;
				
				let chk_inx=typeof(data[t.attr('name')]);
				if(chk_inx!='undefined'){
					if(chk_inx=='object'){
						data[t.attr('name')].push(val);
					}
					if(chk_inx=='string'){
						let td=data[t.attr('name')];
						data[t.attr('name')]=[td,val];
					}
				}else{
					data[t.attr('name')]=val;
				}
			});

			return data;
		}
	}
}());
