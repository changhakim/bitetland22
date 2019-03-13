var app = app || {};

app.path=(()=>{
	var init = x=>{
		app.session.init(x);
		alert(app.$.ctx())
		onCreate();
	};
	var onCreate=()=>{
		
		setContentView();
	};
	var setContentView=()=>{
		
	};
	return{init:init}
})();

app.session = (()=>{
	var init = x=>{
	
		onCreate(x);
	}
	var onCreate=x=>{
		
		sessionStorage.setItem('ctx',x);
	}
	return{init:init};
})();

app.$ = {
	ctx:()=>{return sessionStorage.getItem('ctx')}
	
};//함수끼리 공유되는값이필요가없을때 기능만정의할때 객체리터럴