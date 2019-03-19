var $$ = $$||{};

$$={
		div:x=>{
			return $('<div id='+x.id+'/>');
		},
		a:x=>{
			return $('<a href="'+x.url+'"id='+x.id+'/>');
		},
		li : x=>{
			
			return $('<li id='+x.id+'class='+x.clazz+'/>');
		},
		h : x=>{
			return $('<h'+x.no+' id="'+x.id+'"/>');
		},
		form : x=>{
			return $('<form/>');
		},
		lavel :x=>{
			return $('<label for='+x.name+'/>');
		},
		input :x=>{
			return $('<input type="'+x.type+'"id="'+x.id+'"/>')
		}
		
}