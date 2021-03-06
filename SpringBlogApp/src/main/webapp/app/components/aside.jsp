
<!--Start Header-->
<div id="screensaver">
	<canvas id="canvas"></canvas>
	<i class="fa fa-lock" id="screen_unlock"></i>
</div>

<header class="navbar">
	<div class="container-fluid expanded-panel">
		<div class="row">
			<div id="logo" class="col-xs-12 col-sm-2">
				<a ui-sref="app.dashboard" href="#/app/dashboard">Jarvis Z</a>
			</div>
			<div id="top-panel" class="col-xs-12 col-sm-10">
				<div class="row">
					<div class="col-xs-8 col-sm-4">
						<a href="#" class="show-sidebar"> <i class="fa fa-bars"></i>
						</a>
						<div id="search">
							<input type="text" placeholder="search" /> <i
								class="fa fa-search"></i>
						</div>
					</div>
					<div class="col-xs-4 col-sm-8 top-panel-right">
						<ul class="nav navbar-nav pull-right panel-menu">
							<li class="hidden-xs"><a href="#" class="modal-link"> <i
									class="fa fa-bell"></i> <span class="badge">7</span>
							</a></li>
							<li class="hidden-xs"><a class="ajax-link" href="#"> <i
									class="fa fa-calendar"></i> <span class="badge">7</span>
							</a></li>
							<li class="hidden-xs"><a href="#" class="ajax-link"> <i
									class="fa fa-envelope"></i> <span class="badge">7</span>
							</a></li>
							<li class="dropdown"><a href="#"
								class="dropdown-toggle account" data-toggle="dropdown">
									<div class="avatar">
										<img src="assets/img/avatarprimary.ico" class="img-rounded"
											alt="avatar" />
									</div> <i class="fa fa-angle-down pull-right"></i>
									<div class="user-mini pull-right">
										<span class="welcome">Welcome,</span> <span>Jarvis</span>
									</div>
							</a>
								<ul class="dropdown-menu">
									<li><a href="#"> <i class="fa fa-user"></i> <span
											class="hidden-sm text">Profile</span>
									</a></li>
									<li><a href="ajax/page_messages.html" class="ajax-link">
											<i class="fa fa-envelope"></i> <span class="hidden-sm text">Messages</span>
									</a></li>
									<li><a href="ajax/gallery_simple.html" class="ajax-link">
											<i class="fa fa-picture-o"></i> <span class="hidden-sm text">Albums</span>
									</a></li>
									<li><a href="ajax/calendar.html" class="ajax-link"> <i
											class="fa fa-tasks"></i> <span class="hidden-sm text">Tasks</span>
									</a></li>
									<li><a href="#"> <i class="fa fa-cog"></i> <span
											class="hidden-sm text">Settings</span>
									</a></li>
									<li><a ui-sref="login" href="#/login"> <i
											class="fa fa-power-off"></i> <span class="hidden-sm text">Logout</span>
									</a></li>
								</ul></li>
						</ul>
					</div>
				</div>
			</div>

		</div>
	</div>
</header>
<!--End Header-->
<!--Start Container-->
<div id="main" class="container-fluid">
	<div class="row">
		<div id="sidebar-left" class="col-xs-2 col-sm-2">
			<div id="dynamic-sidebar">
				<ul class="nav main-menu">
					<li><a ui-sref="app.dashboard" href="#/app/dashboard"
						class="active ajax-link"> <i class="fa fa-dashboard"></i> <span
							class="hidden-xs">Dashboard</span>
					</a></li>
					<li><a ui-sref="app.blogger" href="#/app/blogger"><i class="fa fa-list-alt"></i> <span
							class="hidden-xs">Blogger</span>
					</a></li>
				</ul>
			</div>
		</div>
		<!--Start Content-->
		<div id="content" class="col-xs-12 col-sm-10">

			 <%@include file="/app/components/blogger.html" %>
<!-- 			<div id="bottom-panel" class="col-xs-12 col-sm-10"> -->
<!-- 				<div class="row"> -->
<!-- 					<div class="text-left"> -->
<!-- 						<ul class="nav navbar-nav panel-menu  follow-us col-md-2 col-lg-2"> -->
<!-- 							<li class="hidden-xs"><a href="#" class="modal-link"> <i -->
<!-- 									class="fa fa-facebook-square"></i> -->
<!-- 							</a></li>							 -->
<!-- 							<li class="hidden-xs"><a href="#" class="modal-link"> <i -->
<!-- 									class="fa fa-twitter-square"></i> -->
<!-- 							</a></li> -->
<!-- 							<li class="hidden-xs"><a href="#" class="modal-link"> <i -->
<!-- 									class="fa fa-flickr"></i> -->
<!-- 							</a></li> -->
<!-- 							<li class="hidden-xs"><a href="#" class="modal-link"> <i -->
<!-- 									class="fa fa-instagram"></i> -->
<!-- 							</a></li> -->
										 
<!-- 						</ul> -->
<!-- 					</div> -->
<!-- 					<div class="text-center"> -->
<!-- 						<span class="txt-default"> Alrights Reserverd Jarvis @ ltd -->
<!-- 							2017.</span> -->
<!-- 					</div> -->
<!-- 				</div> -->
<!-- 			</div> -->
		</div>

		<!--End Content-->
	</div>
</div>


<!--End Container-->
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<!--<script src="http://code.jquery.com/jquery.js"></script>-->
