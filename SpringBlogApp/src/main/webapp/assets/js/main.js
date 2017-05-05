/**
 * 
 */
'use strict';

angular.module('app').service("BlogService", function($q, $timeout) {
	var service = {}, listener = $q.defer(), socket = {
		client : null,
		stomp : null
	}, messageIds = [];

	service.RECONNECT_TIMEOUT = 30000;
	service.SOCKET_URL = "/SpringBlogApp/chat";
	service.CHAT_TOPIC = "/topic/message";
	service.CHAT_BROKER = "/app/chat";

	service.receive = function() {
		return listener.promise;
	};

	service.send = function(message) {

		var id = Math.floor(Math.random() * 1000000);
		console.log(message, id);
		socket.stomp.send(service.CHAT_BROKER, {
			priority : 9
		}, JSON.stringify({
			message : message.title,
			desc : message.desc,
			id : id
		}));
		console.log(socket.stomp.send);
		messageIds.push(id);
		console.log(messageIds);
	};

	var reconnect = function() {
		$timeout(function() {
			initialize();
		}, this.RECONNECT_TIMEOUT);
	};
	//
	var getMessage = function(data) {
		var message = JSON.parse(data), out = {};
		out.message = message.message;
		out.desc = message.desc;
		out.time = new Date(message.time);
		if (_.contains(messageIds, message.id)) {
			out.self = true;
			messageIds = _.remove(messageIds, message.id);
		}
		return out;
	};
	//
	var startListener = function() {
		console.log("test");
		socket.stomp.subscribe(service.CHAT_TOPIC, function(data) {
			console.log("test1");
			listener.notify(getMessage(data.body));
		});
	};
	//
	var initialize = function() {
		console.log(service.SOCKET_URL);
		socket.client = new SockJS(service.SOCKET_URL);
		socket.stomp = Stomp.over(socket.client);
		socket.stomp.connect({}, startListener);
		socket.stomp.onclose = reconnect;
	};

	initialize();
	return service;
});

angular
		.module('app')
		.directive(
				'jarvisModal',
				function() {
					return {
						template : '<div id="modalbox" >'
								+ '<div class=devoops-modal>'
								+ '<div class=devoops-modal-header>'
								+ '<div class=modal-header-name>'
								+ '<span>{{title}}</span>'
								+ '</div>'
								+ '<div class="box-icons alert-danger" ng-click="$parent.showModal()">'
								+ '<a class="close-link">'
								+ '<i class="fa fa-times" >'
								+ '</i></a></div></div>'
								+ '<div class="devoops-modal-inner" ng-transclude>'
								+ '</div>',
						restrict : 'E',
						transclude : true,
						replace : true,
						scope : true,
						link : function postLink(scope, element, attrs) {
							scope.title = attrs.title;

							scope.$watch(attrs.visible, function(value) {
								if (value == true) {
									$(element).show();
								} else {
									$(element).hide();
								}

							});
							// scope.$watch(attrs.visible, function(value) {
							// if (value == true)
							// $(element).modal('show');
							// else
							// $(element).modal('hide');
							// });
							$(element).on('show', function() {
								scope.$apply(function() {
									scope.$parent[attrs.visible] = true;
								});
							});
							$(element).on('hide', function() {
								scope.$apply(function() {
									scope.$parent[attrs.visible] = false;
								});
							});
						}
					}
				});

angular.module('app').directive('fileModel', [ '$parse', function($parse) {
	return {
		restrict : 'A',
		link : function(scope, element, attr) {
			element.bind('change', function() {
				var formData = new FormData();
				formData.append('file', element[0].files[0]);

				// optional front-end logging
				var fileObject = element[0].files[0];
				if (scope.fileLog != undefined) {
					scope.fileLog = {
						'lastModified' : fileObject.lastModified,
						'lastModifiedDate' : fileObject.lastModifiedDate,
						'name' : fileObject.name,
						'size' : fileObject.size,
						'type' : fileObject.type
					};
				}
				scope.$apply();
				scope.$parent.setFormData(formData);
				// console.log(formData.get('file'));
				/*
				 * ---> post request to your php file and use $_FILES in your
				 * php file < ----
				 * httpPostFactory('your_upload_image_php_file.php', formData,
				 * function (callback) { console.log(callback); });
				 */
			});

		}
	};
} ]);

angular.module('app').controller('AppCtrl', [ '$scope', function($scope) {
	// add 'ie' classes to html
	var isIE = !!navigator.userAgent.match(/MSIE/i);
	isIE && angular.element($window.document.body).addClass('ie');
	// isSmartDevice( $window ) &&
	// angular.element($window.document.body).addClass('smart');

	// config
	// $scope.app = {
	// name: 'Test App',
	//       
	// settings: {
	//         
	// }
	// }
	// function isSmartDevice( $window )
	// {
	// // Adapted from http://www.detectmobilebrowsers.com
	// var ua = $window['navigator']['userAgent'] ||
	// $window['navigator']['vendor'] || $window['opera'];
	// // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile
	// devices
	// return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera
	// Mini|IEMobile/).test(ua);
	// }

} ]);

angular
		.module('app')
		.controller(
				'BloggerCtrl',
				[
						'$scope',
						'BlogService',
						function($scope, BlogService) {
							$scope.showJModal = false;
							$scope.formData = [];
							$scope.blogsArr = [];
							$scope.blogsArr
									.push({
										'fileName' : "logo.png",
										'message' : "Facebook",
										'desc' : "The world's most popular social networking web site, Facebook enables users to connect with friends and family by sharing status updates, personal photos and other items of interest. Founder Mark Zuckerberg created Facebook in 2004 while a student at Harvard, designing the site as a means for other university students to communicate and to socialize online. The idea quickly spread from there and has become a global phenomenon, with more than 160 million users in the United States alone. Learning to leverage Facebook's popularity can prove beneficial to your small business."
									});
							$scope.showModal = function() {
								$scope.showJModal = !$scope.showJModal;
								// console.log($scope.showJModal);
							};
							$scope.createBlog = function(obj) {
								BlogService.send(obj);
								// $scope.message = "";
								// console.log(obj);
								// var fileName = "logo.png";
								// var title = obj.title;
								// var description = obj.desc;
								//
								// if ($scope.formData.length != 0) {
								// fileName = $scope.formData.get('file').name;
								// }
								// $scope.blogsArr.push({
								// 'fileName' : fileName,
								// 'title' : title,
								// 'description' : description
								// });
								angular.copy({}, obj);
								// console.log($scope.blogsArr);
							};
							BlogService.receive().then(
									null,
									null,
									function(message) {
										console.log("received msg:"
												+ message.message + ","
												+ message.desc)
										$scope.blogsArr.push(message);
									});
							$scope.setFormData = function(data) {
								$scope.formData = data;
								// console.log($scope.formData);
							};

						} ]);
