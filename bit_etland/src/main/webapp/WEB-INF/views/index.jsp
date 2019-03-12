<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!--
	@Author: 김창하 changha0321@gmail.com
	@Date: 2019. 3. 12. 오후 4:48:18
	@File Name: *.jsp
	@Desc:
	-->
	<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700" rel="stylesheet">

    <title>창하의비트랜드</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="${css}/customer/bootstrap.min.css "/>

<!--
Ramayana CSS Template
https://templatemo.com/tm-529-ramayana
-->

    <!-- Additional CSS Files -->
    <link rel="stylesheet" href="${css}/customer/asset/fontawesome.css "/>
    <link rel="stylesheet" href="${css}/customer/asset/templatemo-style.css "/>
    <link rel="stylesheet" href="${css}/customer/asset/owl.css "/>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap-theme.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
<script src="${js}/app.js"></script>


</head>
<body class="is-preload">
    <!-- Wrapper -->
    <div id="wrapper">
<div id="content"></div>
<div id="sidebar"></div>

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
<script>
app.context.init('${ctx}')
</script>
</html>