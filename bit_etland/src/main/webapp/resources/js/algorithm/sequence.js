function sequence(){
	_sequence.nav();
	_sequence.remove();
	_sequence.question();
	
		$('#right_content').prepend($$.div({id:'right_start'}))
		$('#leave_a_comment').before('<div id="right_end" />')
		$('#right_start').nextUntil('#right_end').wrapAll('<div id="new_div"></div>');
		let str = $('#new_div').html()
		$('#new_div').remove();
		$('#right_end').remove();
		
		let arr = [{id:'a',val:'등차수열의합계'},
				   {id:'b',val:'등비수열의합계'},
				   {id:'c',val:'팩토리얼수열의 합계'},
				   {id:'d',val:'피보나치수열의 합계'}
				   
		];
		$.each(arr,(x,y)=>{
			//$('#right_start').append(str);
			$(str).appendTo('#right_start')
			$('#question').attr('id','question_'+y.id)
			$('#question_'+y.id).text(y.val);
			$('#form').attr('id','form_'+y.id)
			$('.buttons').empty();
			
			$('<span class="label label-danger"></span>').text('결과').addClass('cursor').appendTo('.buttons').click(()=>{
				let data ={start:$('#start').val(),
						   end:$('#end').val(),
						   diff:$('#diff').val()};
				
				$.ajax({
					url:$.ctx()+'/algo/seq/1',
					type:'post',
					datatype:'json',
					contentType :"application/json",
					data:JSON.stringify(data),
					success:x=>{
						alert('답은'+x.result);
						$('#an1').html($$.h({id:'result1',no:'1'}).text('정답은'+x.result));
						$('#form_'+y.id).remove();
					},
					error:e=>{
						alert('실패')
					}
				});
				
				
			});//결과보기버튼
		$('<span class="label label-primary" style="margin-left: 20px"></span>')
		.text('리셋')
		.addClass('cursor')
		.appendTo('.buttons')
		.click(()=>{
			
			_sequence.inputForm();
			$('#form').empty();
			
		});
		
		});
		
}







var _sequence ={
		inputForm :()=>{
			
			$('#an1').html($$.form({id:'form'}));
			$('#form').html($$.div({id: 'div_1'}).addClass('form-group'));
			$('#div_1').html($$.label({id: 'lab_1'}).text('시작값 :'))
			.append($$.input({text:'text', id: 'start'}));
			$('#form').append($$.div({id: 'div_2'}).addClass('form-group'));
			$('#div_2').html($$.label({id: 'lab_2'}).text('마지막값 :'))
			.append($$.input({text:'text', id: 'end'}));
			$('#form').append($$.div({id:'div_3'}).addClass('form-group'));
			$('#div_3').html($$.label({id: 'lab_3'}).text('공차 :'))
			.append($$.input({text:'text', id: 'diff'}));

			
			
		},
		nav :()=>{
			$('#nav').children().eq(0).html($$.a({id:'seq',url:'#'}).text('수열'));
			$('#nav').children().eq(1).html($$.a({id:'math',url:'#'}).text('수학'));
			$('#nav').children().eq(2).html($$.a({id:'sort',url:'#'}).text('정렬'));
			$('#nav').children().eq(3).html($$.a({id:'arr',url:'#'}).text('배열'));
			$('#nav').append($$.li({id:''})).
			children().eq(4).html($$.a({id:'app'}).text('응용'));
		},
		question : x=>{
			$('#question').html($$.h({no:'2'}).text(x));
			_sequence.inputForm();
			

			
		},
		remove : ()=>{
			$('#rm_start').before('<div id="del_start"/>')
			$('#rm_end').after('<div id="del_end"/>')
			$('#del_start').nextUntil('#del_end').remove();
		}
		
	

};