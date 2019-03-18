<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--
	@Author: 김창하 changha0321@gmail.com
	@Date: 2019. 3. 12. 오후 12:00:01
	@File Name: *.jsp
	@Desc:
	-->
	
	
	    <!-- Sidebar -->
        

          <div class="inner">

            <!-- Search Box -->
            <section id="search" class="alt">
              <form method="get" action="#">
                <input type="text" name="search" id="search" placeholder="Search..." />
              </form>
            </section>
              
            <!-- Menu -->
            <nav id="menu">
              <ul>
                <li><a href="index.html">Homepage</a></li>
                <li><a href="simple_page.html">Simple Page</a></li>
                <li><a href="shortcodes.html">Shortcodes</a></li>
                <li>
                  <span class="opener">Dropdown One</span>
                  <ul>
                    <li><a href="#">First Sub Menu</a></li>
                    <li><a href="#">Second Sub Menu</a></li>
                    <li><a href="#">Third Sub Menu</a></li>
                  </ul>
                </li>
                <li>
                  <span class="opener">Dropdown Two</span>
                  <ul>
                    <li><a href="#">Sub Menu #1</a></li>
                    <li><a href="#">Sub Menu #2</a></li>
                    <li><a href="#">Sub Menu #3</a></li>
                  </ul>
                </li>
                <li><a href="https://www.google.com">External Link</a></li>
              </ul>
            </nav>

            <!-- Featured Posts -->
            <div class="featured-posts">
              <div class="heading">
                <h2>Featured Posts</h2>
              </div>
              <div class="owl-carousel owl-theme">
                <a href="#">
                  <div class="featured-item">
                    <img src="${img}/galaxy.jpg" alt="featured one">
                    <p>Aliquam egestas convallis eros sed gravida. Curabitur consequat sit.</p>
                  </div>
                </a>
                <a href="#">
                  <div class="featured-item">
                    <img src="${img}/iphone.jpg" alt="featured two">
                    <p>Donec a scelerisque massa. Aliquam non iaculis quam. Duis arcu turpis.</p>
                  </div>
                </a>
                <a href="#">
                  <div class="featured-item">
                    <img src="${img}/double.jpg" alt="featured three">
                    <p>Suspendisse ac convallis urna, vitae luctus ante. Donec sit amet.</p>
                  </div>
                </a>
              </div>
            </div>

            <!-- Footer -->
            <footer id="footer">
              <p class="copyright">Copyright &copy; 2019 Company Name
              <br>Designed by <a rel="nofollow" href="https://www.facebook.com/templatemo">Template Mo</a></p>
            </footer>

          </div>
        