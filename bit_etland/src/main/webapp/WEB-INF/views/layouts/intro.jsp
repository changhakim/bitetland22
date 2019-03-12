<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!--
	@Author: 김창하 changha0321@gmail.com
	@Date: 2019. 3. 12. 오전 9:53:29
	@File Name: intro.jsp
	@Desc: 인트로 템플릿 페이지.로그인,회원가입화면
	-->
	<jsp:include page="common.jsp"></jsp:include>
<body>
<div class="grid-container container-fluid"  >

		<div class="grid-item" id="header">
		<tiles:insertAttribute name="top" />
      	</div>
          
         <tiles:insertAttribute name="nav" />
        
       
        
          <tiles:insertAttribute name="content" />
        <div class="grid-item" id="footer">
		<tiles:insertAttribute name="bottom" />
        </div>
 </div>
</body>
</html>