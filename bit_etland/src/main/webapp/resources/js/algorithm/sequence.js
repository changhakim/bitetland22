function sequence(ar,str){

		$.each(ar,(i,j)=>{
		let GID =Math.floor(Math.random()*10000)+1;
		let _GID = '#'+GID;
		$('<div id="'+GID+'">'+str+'</div>').appendTo('#right_start');
		let POST = GID+"_POST";
		let _POST = '#'+POST;
		$(_GID+' h4').attr('id',POST);
		let TITLE = GID+"_TITLE";
		let _TITLE = '#'+TITLE;
		$(_GID+' h2').attr('id',TITLE);
		let DATE = GID+'_DATE';
		let _DATE = '#'+DATE;
		$(_TITLE).siblings('h5').eq(0).attr('id',DATE);
		let BTN = GID+'_BTN';
		let _BTN = '#'+BTN;
		$(_TITLE).siblings('h5').eq(1).attr('id',BTN);
		let INPUT = GID+'_INPUT';
		let _INPUT = '#'+INPUT;
		$(_GID+' p').attr('id',INPUT);
		$(_TITLE).text(j.val);
		$(_BTN).empty();
		$(_INPUT).empty();
		
		let x = [{cls:'start',txt:'시작값'},
				  {cls:'end' ,txt:'한계값'},
				  {cls:'diff',txt:'공차'}];
		$(_sequence.inputForm(x)).appendTo(_INPUT);
		$('#del_start').remove();
		$('#del_end').remove();
		$('<span class="label label-danger"></span>')
		.text('결과')
		.addClass('cursor')
		.attr('name',j.id)
		.appendTo(_BTN)
		.click(function(){
			let that = $(this).attr('name');
			
			let data = {start:$('.start').val(),
						end: $('.end').val(),
						diff: $('.diff').val()};
			$.ajax({
				url : $.ctx()+'/algo/seq/'+that,
				type:'post',
				data: JSON.stringify(data),
				dataType:'json',
				contentType:"application/json",
				success : d=>{
					$(_INPUT).empty();
					$('<h2>결과값 : '+d.result+'</h2>').appendTo(_INPUT);
				},
				error :e=>{
					alert('창하야 힘내라')
				}
			});
			
		});//결과
		$('<span class="label label-warning" style="margin-left: 20px"></span>')
		.text('리셋')
		.addClass('cursor')
		.appendTo(_BTN)
		.click(()=>{
			$(_INPUT).empty();
			$(_sequence.inputForm(x)).appendTo(_INPUT);
		});//리셋
		
		
		});
		
}







var _sequence ={
		inputForm :(x)=>{
			
			let html ='<form>';
			$.each(x,(i,j)=>{
					html +='<div class="form-group">';
					html +='<label for="">'+j.txt+':</label>';
					html +='<input type="text" class="'+j.cls+'"></div>'
					
			});
			html +='</form>';
			return html;

			
			
		}
		/*nav :()=>{
			$('#nav').children().eq(0).html($$.a({id:'seq',url:'#'}).text('수열'));
			$('#nav').children().eq(1).html($$.a({id:'math',url:'#'}).text('수학'));
			$('#nav').children().eq(2).html($$.a({id:'sort',url:'#'}).text('정렬'));
			$('#nav').children().eq(3).html($$.a({id:'arr',url:'#'}).text('배열'));
			$('#nav').append($$.li({id:''})).
			children().eq(4).html($$.a({id:'app'}).text('응용'));
		},*/
		
		
		
		
	

};