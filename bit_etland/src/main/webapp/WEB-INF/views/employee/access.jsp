<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	

	<jsp:include page="../home/top.jsp"/>
	<link rel="stylesheet" href="${css}/employee/register.css" />
	<div class="grid-item" id= "side_bar">
	<h1>사원접속</h1>
	</div>
	<div class="grid-item" id= "content">
	<h1 id="title">회원 전용 시스템</h1>
	<form id="access_form" >
	<div id="register-container">
	<div class="re1">사원번호</div>
	<div class="re2"><input type="text" id="empno" name="empno" value="1001" /></div>
	<div class="re1">이름</div>
	<div class="re2"><input type="text" id="name" name="name" value="김창하" /></div>
	<div class="re3"><input type="submit" id = "confirm_btn" value="확인" /></div>
	<div class="re4"><input type="submit" id = "cancel_btn" value="취소" /> </div>
	<input type="hidden" name="cmd" value="access" />	
	<input type="hidden" name="dir" value="customer" />
	<input type="hidden" name="page" value="customer_list" />
	
		
	</div>
	</form>
	</div>
	<jsp:include page="../home/bottom.jsp"/>			
	<script>
	$('#confirm_btn').click(function(){
		var empno = $('#empno').val();
		var name = $('#name').val();
		$('#access_form').attr('action','${ctx}/employee.do').submit();
		
	})
	</script>
