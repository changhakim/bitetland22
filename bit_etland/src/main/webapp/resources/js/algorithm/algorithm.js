var algo = algo||{};

algo = (()=>{
	let init=x=>{
		
		algo.$.init(x);
		
	};
	let onCreate=()=>{
		
		setContentView();
	};
	let setContentView=()=>{
		$.when(
				
				$.getScript($.js()+'/component/compo.js'),
				$.getScript($.js()+'/algorithm/sequence.js'),
				$.getScript($.js()+'/algorithm/math.js'),
				$.getScript($.js()+'/algorithm/array.js')
		).done(()=>{
			common();
			$('#rm_start').before('<div id="del_start"/>')
			$('#rm_end').after('<div id="del_end"/>')
			$('#del_start').nextUntil('#del_end').remove();
			$('#right_end').remove();
			$('#right_content').prepend($$.div({id:'right_start'}))
			$('#leave_a_comment').before('<div id="right_end" />')
			$('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
			let str = $('#new_div').html()
			$('#new_div').remove();
			var seq = [{id:'ari',val:'등차수열의합계'},
				   {id:'geo',val:'등비수열의합계'},
				   {id:'fac',val:'팩토리얼수열의 합계'},
				   {id:'fibo',val:'피보나치수열의 합계'}
				   
				];
			
			sequence(seq,str);
			
			$('#seq').click(()=>{
	
				let copy1=$('#right_start').children().eq(0).html();
				$('#right_start').children().remove();
				sequence(seq,copy1);
				$('#right_start').find('div').children('form').remove();
				//$('.form-group').remove();
			});
			
			$('#math').click(()=>{	
				alert('수학 누름');
				let copy=$('#right_start').children().eq(0).html();
				$('#right_start').children().remove();
				let mat = [{id:'ari',val:'배열의합계'},
						  {id:'geo',val:'등비수열의합계'},
						  {id:'fac',val:'팩토리얼수열의 합계'},
						  {id:'fibo',val:'피보나치수열의 합계'}];
				
			
			
			
			math(mat,copy);
			$('#right_start').find('div').children('form').remove();
			});
			
			
		}
			
		);
		
			
	
	};
	
	return{init:init,
			onCreate:onCreate}
})();

algo.$={
	 init:(x)=>{
		
		 $.getScript(x+'/resources/js/router.js',
			 ()=>{
			 $.extend(new Session(x));
			 algo.onCreate();
			 
		 })
	 }	
};