var algo = algo||{};

algo=(()=>{
	let init=x=>{
		
		algo.$.init(x);
		};
	let onCreate=()=>{
		setContentView();
	};
	let setContentView=()=>{
		$.getScript($.js()+'/compo.js',()=>{
			//$('body').html($$.div({id:'test',clazz:'clazz'}))
			$('#nav').children().eq(0).html($$.a({id:'seq',url:'#'}).text('수열'));
			$('#nav').children().eq(1).html($$.a({id:'math',url:'#'}).text('수학'));
			$('#nav').children().eq(2).html($$.a({id:'sort',url:'#'}).text('정렬'));
			$('#nav').children().eq(3).html($$.a({id:'arr',url:'#'}).text('배열'));
			$('#nav').append($$.li({id:''})).
			children().eq(4).html($$.a({id: 'app'}).text('응용'));
			$('#que_1').html($$.h({no:'2',id:'h'}).text('등차수열의 합계 '));
			
			inputForm('공차');
			/*$('#an1').html($$.form({id:'form'}));
			$('#form').html($$.div({id:'div_1'})).addClass('form-group');
			$('#div_1').html($$.label({name:'lab_1'}).text('시작값'))
							.append($$.input({id:'start',type:'text'}));
			$('#form').html($$.div({id:'div_2'})).addClass('form-group');
			$('#div_2').html($$.label({name:'lab_2'}).text('종료값'))
							.append($$.input({id:'end',type:'text'}));
			$('#form').html($$.div({id:'div_3'})).addClass('form-group');
			$('#div_3').html($$.label({name:'lab_3'}).text('증가값'))
							.append($$.input({id:'diff',type:'text'}));*/
			
			
			$('#que_2').html($$.h({no:'2',id:'h'}).text('등비수열의 합계'));
			$('#answer_btn_1').text('결과').addClass('cursor').click(()=>{
			
				$.ajax({
					url :$.ctx()+'/algo/seq/1',
				    type:'post',
				    datatype:'json',
				    data: JSON.stringify({start:$('#start').val(),end:$('#end').val(),diff:$('#diff').val()}),
				    contentType :"application/json",
				    success:d=>{
				    	alert('넘어온문제번호:'+d.result)
				    	$('#an1').html($$.h({id:'h_res',no:'2'}).text('결과값:'+d.result));  
				    },
				    error:e=>{
				    	alert('AJAX실패');
				    }
				  })
				  
				
			})
				
				$('#answer_btn_2').text('리셋').addClass('cursor').click(()=>{
					inputForm();
					})
		})
	};
	let inputForm =x=>{
		$('#an1').html($$.form({}).append($$.lavel({name:'first'}).text('시작값')).append('<br />')
				.append($$.input({type:'text',id:'start'})).append('<br />')
				.append($$.lavel({name:'end'}).text('마지막')).append('<br />')
				.append($$.input({type:'text',id:'end'})).append('<br />')
				.append($$.lavel({name:'end'}).text(x)))
				.append($$.input({type:'text',id:'diff'})
				);
	  
	}
	return{init:init,
		onCreate:onCreate};
	
})();


algo.$=
	{
		init:(x)=>{
			
			$.getScript(x+'/resources/js/router.js',()=>{
				$.extend(new Session(x));
				algo.onCreate();
				
			})
		}
	};
