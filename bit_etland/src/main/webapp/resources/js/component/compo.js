var $$ = $$||{};

$$={
		
		div:x=>{
			return $('<div id='+x.id+'/>');
		},
		a:x=>{
			return $('<a href="'+x.url+'"id='+x.id+'/>');
		},
		li:x=>{
			return $('<li id='+x.id+'class='+x.clazz+'/>');
		},
		h : x=>{
			return $('<h'+x.no+' id='+x.id+'/>');
		},
		form:x=>{
			return $('<form id='+x.id+'/>')
		},
		label:x=>{
			return $('<label id='+x.lavel+'/>')
		},
		input:x=>{
			return $('<input type='+x.text+' id='+x.id+' >')
		}
		
				
		
		
};