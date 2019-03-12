<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--
	@Author: 김창하 changha0321@gmail.com
	@Date: 2019. 3. 12. 오전 11:59:17
	@File Name: *.jsp
	@Desc:
	-->
	
	      <!-- Main -->
        <div id="main">
          <div class="inner">

            <!-- Header -->
            <header id="header">
              <div class="logo">
                <a href="#">창하의 비트전자랜드</a>
              </div>
            </header>

           <!-- Banner -->
            <section class="main-banner">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <div class="banner-content">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="banner-caption">
                            <h4>Hello, this is your <em>Ramayana</em> Theme.</h4>
                            <span>AWESOME HTML5 &amp; CSS3 TEMPLATE</span>
                            <p>Do you know that <strong>Ramayana</strong> is a free to use Bootstrap 4 CSS template by <strong>templatemo</strong>? You can edit and add more pages as you wanted for your personal or corporate websites.</p>
                            <div class="primary-button">
                              <a href="#">Read More</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            

            <!-- Top Image -->
            <section class="top-image">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-md-12">
                    <img src="${img}/top-image.jpg" alt="">
                    <div class="down-content">
                      
     <div class="mypage">
	<div class="mypage1">아이디</div>
	<div class="mypage2" id="customerID">${user.customerID}</div>
	<div class="mypage1">이름</div>
	<div class="mypage2" id="customerName">${user.customerName}</div>
	<div class="mypage1">생년월일</div>
	<div class="mypage2" id="ssn">${user.ssn}</div>
	<div class="mypage1">성별</div>
	<div class="mypage2" id="gender">남</div>
	<div class="mypage1">전화번호</div>
	<div class="mypage2" id="phone">${user.phone}</div>
	<div class="mypage1">주소</div>
	<div class="mypage2" id="city">${user.city}</div>
	<div class="mypage1">상세주소</div>
	<div class="mypage2" id="address">${user.address}</div>
	<div class="mypage1">우편번호</div>
	<div class="mypage2" id="postalCode">${user.postalCode}</div>
	</div>
<div class="grid-item update_cus" >
	<button type="button" id = "update_btn" class="btn btn-default btn-lg">
 		<span class="glyphicon glyphicon-ok" aria-hidden="true"></span> 정보수정 
	</button>
	<button type="button" id = "cancel_btn" class="btn btn-default btn-lg">
	 		<span class="glyphicon glyphicon-remove" aria-hidden="true"></span> 회원탈퇴
	</button>
</div>
                      
                      <div class="primary-button">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            

            

          </div>
        </div>
        <script>
$('#update_btn').click(function(){
	location.assign('${ctx}/cusmove/customer/update');
});
$('#delete_btn').click(function(){
	location.assign('${ctx}/customer.do?'
+'cmd=cust_remove&dir=home&page=main&customer_id=${cust.customerID}');
});
$('#file_upload_btn')
	.attr('style','cursor:pointer')
	.attr('style',"width: 300px; margin-top:10px")
	.click(function(){
		$('#form')
		.attr('method','post')
		.attr('action','${ctx}/customer/filechange')
		.attr('enctype','multipart/form-data')
		.submit();
});  
</script>