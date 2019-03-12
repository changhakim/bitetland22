<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!--
	@Author: 김창하 changha0321@gmail.com
	@Date: 2019. 3. 12. 오전 9:53:30
	@File Name: customer.jsp
	@Desc:고객 템플릿 페이지
	-->
	<jsp:include page="common.jsp"></jsp:include>
<body class="is-preload">
    <!-- Wrapper -->
    <div id="wrapper">
    <tiles:insertAttribute name="content" />
    <tiles:insertAttribute name="sidebar" />	


 </div>

  <!-- Scripts -->
  <!-- Bootstrap core JavaScript -->
    <script src="${jq}/customer/jquery.min.js"></script>
    <script src="${js}/customer/bootstrap.bundle.min.js"></script>

    <script src="${js}/customer/asset/browser.min.js"></script>
    <script src="${js}/customer/asset/breakpoints.min.js"></script>
    <script src="${js}/customer/asset/transition.js"></script>
    <script src="${js}/customer/asset/owl-carousel.js"></script>
    <script src="${js}/customer/asset/custom.js"></script>	
</body>	
</html>
