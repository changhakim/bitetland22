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
function common(){
	
	_commo.nav();

	
 
}

var _commo={
		nav :()=>{
			$('#nav').children().eq(0).html($$.a({id:'seq',url:'#'}).text('수열'));
			$('#nav').children().eq(1).html($$.a({id:'math',url:'#'}).text('수학'));
			$('#nav').children().eq(2).html($$.a({id:'sort',url:'#'}).text('정렬'));
			$('#nav').children().eq(3).html($$.a({id:'arr',url:'#'}).text('배열'));
			$('#nav').append($$.li({id:''})).
			children().eq(4).html($$.a({id:'app'}).text('응용'));
		}

		
		
}
