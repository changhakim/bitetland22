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
		title : x=>{
			return $('<h+'+x.no+'+ id="title"/>');
		}
}