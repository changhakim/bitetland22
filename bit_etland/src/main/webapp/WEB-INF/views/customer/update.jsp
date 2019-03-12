<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--
	@Author: 김창하 changha0321@gmail.com
	@Date: 2019. 3. 12. 오후 3:59:17
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
                      <div class="grid-item" id= "content">
<form id="form">
    <div class="mypage">
    <div class="mypage1">아이디</div>
    <div class="mypage2"><input type="text" id="customerID" name="customerID" value="${user.customerID}" readonly/></div>
    <div class="mypage1">이름</div>
    <div class="mypage2"><input type="text" id="customerName" name="customerName" value="${user.customerName}" readonly/></div>
    <div class="mypage1">생년월일</div>
    <div class="mypage2"><input type="text" id="ssn" name="ssn" value="${user.ssn}" readonly/></div>
    <div class="mypage1">성별</div>
    <div class="mypage2">남</div>
    <div class="mypage1">전화번호</div>
    <div class="mypage2"><input type="text" id="phone" name="phone" value="${user.phone}" /></div>
    <div class="mypage1">주소</div>
    <div class="mypage2"><input type="text" id="city" name="city" value="${user.city}" /></div>
    <div class="mypage1">상세주소</div>
    <div class="mypage2"><input type="text" id="address" name="address" value="${user.address}"/></div>
    <div class="mypage1">우편번호</div>
    <div class="mypage2"><input type="text" id="postalCode" name="postalCode" value="${user.postalCode}"/></div>
    <div class="mypage1">임시비밀번호</div>
    <div class="mypage2"><input type="text" id="password" name="password" value="${user.password}" /></div>
  
	</div>
</form>
	<div class="grid-item update">
		<div class= "update_btn1">
		<span id="confirm_btn" class="label label-success" >확인</span>
		</div >
		<div class= "update_btn2">
		<span id="cancel_btn" class="label label-danger" >취소</span>
		</div>
</div>
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
$('#confirm_btn').attr('style','cursor:pointer').click(function(){
	$('#form')
	.attr('action','${ctx}/customer/update')
	.attr('method','post')
	.submit();
});
$('#cancel_btn').click(function(){
	alert('취소버튼 클릭');
});
</script>