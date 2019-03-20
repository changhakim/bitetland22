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
			nav();
			remove();
			question();
			$('#right_content').prepend($$.div({id:'right_start'}));
			$('#leave_a_comment').before('<div id="right_end"/>')
			$('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
			var str = $('#new_div').html();
			
			let arr =[
					{id:'a',val:'등차수열'},
					{id:'b',val:'등비수열'},
					{id:'c',val:'팩토리얼수열'},
					{id:'d',val:'피보나치수열'}
			];
			
			
			$.each(arr,(i,j)=>{
				
				$('#right_start').append(str);
				$('#question').attr('id','question_'+j.id);
				$('#question_'+j.id).text(j.val)
					
				
				
				
				
				
			});
			
				
				
		})
	};
	let inputForm =x=>{
		$('#an1').html($$.form({}).append($$.lavel({name:'first'}).text('시작값')).append('<br />')
				.append($$.input({type:'text',id:'start'})).append('<br />')
				.append($$.lavel({name:'end'}).text('마지막')).append('<br />')
				.append($$.input({type:'text',id:'end'})).append('<br />')
				.append($$.lavel({name:'end'}).text('공차')))
				.append($$.input({type:'text',id:'diff'})
				);
	  
	};
	let question =()=>{
		$('#question').html($$.h({no:'2',id:'h'}).text());
		inputForm();
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
		reset();
			
	};
	let nav=()=>{
		$('#nav').children().eq(0).html($$.a({id:'seq',url:'#'}).text('수열'));
		$('#nav').children().eq(1).html($$.a({id:'math',url:'#'}).text('수학'));
		$('#nav').children().eq(2).html($$.a({id:'sort',url:'#'}).text('정렬'));
		$('#nav').children().eq(3).html($$.a({id:'arr',url:'#'}).text('배열'));
		$('#nav').append($$.li({id:''})).
		children().eq(4).html($$.a({id: 'app'}).text('응용'));
	};
	let remove=()=>{
		
		$('#rm_start').before('<div id="del_start"/>')
		$('#rm_end').after('<div id="del_end"/>')
		$('#del_start').nextUntil('#del_end').wrap().remove();
	};
	let reset=()=>{
		$('#answer_btn_2').text('리셋').addClass('cursor').click(()=>{
			inputForm();
			})
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
