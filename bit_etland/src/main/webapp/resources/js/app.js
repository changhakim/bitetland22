var app = app||{};

app = (()=>{
	var init=x=>{
		app.session.init(x);
		
		onCreate();
	};
	var onCreate=()=>{
		setContentView();
	};
	var setContentView=()=>{
		// content sidebar
		$('#main').html('<h1>컨텐츠</h1>');
		$('#sidebar').html('<h1>사이드바</h1>');
	};
	return{init:init};
})();

app.session=(()=>{
	var init=x=>{
		onCreate(x);
	}
	var onCreate=x=>{
		 sessionStorage.setItem('ctx',x);
         sessionStorage.setItem('js',x+'/resource/js');
         sessionStorage.setItem('img',x+'/resource/img');
         sessionStorage.setItem('css',x+'/resource/css');
         sessionStorage.setItem('jq',x+'/resources/jquery');
         sessionStorage.setItem('font',x+'/resources/font');
	}
	return{init:init}
	
})();
app.$={
		
		   ctx : ()=>{return sessionStorage.getItem('ctx')},
		   js : ()=>{return sessionStorage.getItem('js')},
		   css : ()=>{return sessionStorage.getItem('css')},
		   img : ()=>{return sessionStorage.getItem('img')},
		   jq : ()=>{return sessionStorage.getItem('jq')},
		   font : ()=>{return sessionStorage.getItem('font')}
};