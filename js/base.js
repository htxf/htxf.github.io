
	$(function(){


		$('.hamburger > i').on('click', function(e){
			$('body').toggleClass('bodyBlur');
			$('.hamburger').toggleClass('open');
			$('p').toggleClass('blur');
			$('#insert').toggleClass('blur');
			$('.outer').toggleClass('blur');
			// $('.lightbox').toggleClass("fadeIn");遮罩不用了
			e.stopPropagation();
		});

		$('.home').on('click', function(){
			window.sessionStorage.notes_click = false;
			window.sessionStorage.home_click = true;
			window.sessionStorage.tucaos_click = false;
			// window.sessionStorage.resume_click = false;
			// $.cookie("notes_click", false);
			// $.cookie("home_click", true);
		});

		$(document).on('click', function(){
			// $('#bg').removeClass('blur');背景不用了
			if (window.location.pathname != '/resume/') {
				$('body').removeClass('bodyBlur');
				$('.hamburger').removeClass('open');
				$('p').removeClass('blur');
				$('#insert').removeClass('blur');
				$('.outer').removeClass('blur');
				// $('.lightbox').removeClass("fadeIn");遮罩不用了
			}
		});

		$('.home_notes_showon').on('click', function(){

			$('body').removeClass('bodyBlur');
			$('.hamburger').removeClass('open');
			$('p').removeClass('blur');
			$('#insert').removeClass('blur');
			$('.outer').removeClass('blur');
			window.sessionStorage.notes_click = true;
			window.sessionStorage.home_click = false;
			window.sessionStorage.tucaos_click = false;
			// window.sessionStorage.resume_click = false;
			// $.cookie("notes_click", true);
			// $.cookie("home_click", false);
		});
		// 新增的吐槽类别
		$('.home_tucaos_showon').on('click', function(){

			$('body').removeClass('bodyBlur');
			$('.hamburger').removeClass('open');
			$('p').removeClass('blur');
			$('#insert').removeClass('blur');
			$('.outer').removeClass('blur');
			window.sessionStorage.notes_click = false;
			window.sessionStorage.home_click = false;
			window.sessionStorage.tucaos_click = true;
			// window.sessionStorage.resume_click = false;
			// $.cookie("notes_click", true);
			// $.cookie("home_click", false);
		});

		// 新增简历页面，把body背景设为模糊
		// $('.resume').on('click', function(){
		// 	alert('aa')
		// 	window.sessionStorage.resume_click = true;
		// 	window.sessionStorage.notes_click = false;
		// 	window.sessionStorage.home_click = false;
		// });

		// if (window.sessionStorage.resume_click == "true") {
		// 	$('body').addClass('bodyNotes');
		// }

		// 另一种做法 这才是正确的做法
		if (window.location.pathname !== '/resume/' && window.location.pathname !== '/') {
			$('body').addClass('bodyNotes');
		}


		//判断点击home进入首页index还是点击Notes进入首页index,根据这个来该变主题内容和header上的landmark
		if (window.sessionStorage.notes_click =="true") {
			$('.home_p').addClass('off');
			$('.home_notes_list').addClass('show');
			$('#insert').html('<a href="/categories/note">Notes</a>');
			$('#insert').addClass('landmark notes animated fadeInLeft');
			window.sessionStorage.notes_in = true;
			$('#insert').removeClass('home_logo');
			$('body').addClass('bodyNotes');

		}

		// 若是点击文章标题进到新的窗口(浏览器自带功能) 文章背景、地标都有问题
		// 通过window.location.pathname中的/的个数来判断，主页'/'，简历页面'/resume/'，剩下的都是文章和文章目录至少有三个'/'
		if (window.location.pathname.match(/\//g).length >= 3) {
			$('#insert').removeClass('home_logo');
			$('body').addClass('bodyNotes');
			if (document.referrer.match('note') !== null || window.sessionStorage.notes_click == "true") {
				$('#insert').html('<a href="/categories/note">Notes</a>');
			} else {
				$('#insert').html('<a href="/categories/tucao">Tucaos</a>');
			}
			$('#insert').addClass('landmark notes animated fadeInLeft');
		}

		
		// 新增的tucao类别
		if (window.sessionStorage.tucaos_click =="true") {
			$('.home_p').addClass('off');
			$('.home_notes_list').addClass('show');
			$('#insert').html('<a href="/categories/tucao">Tucaos</a>');
			$('#insert').addClass('landmark notes animated fadeInLeft');
			window.sessionStorage.tucaos_in = true;
			$('#insert').removeClass('home_logo');
			$('body').addClass('bodyNotes');

		}
		if (window.sessionStorage.home_click =="true") {
			$('.home_p').removeClass('off');
			$('.home_notes_list').removeClass('show');
			// $('#insert').addClass('home_logo');
		}

		//逻辑上正确，但实际操作是没必要，因为总是先点击了hamburger中的Notes，将sessionStorage中的
		//两个变量都改过了。
		$('#insert').on('click', function(){
			// window.sessionStorage.notes_click = true;
			// window.sessionStorage.home_click = false;
		});

		//判断动画完成了没有，完成了就把animated class 去掉
		window.onload=function(){
  			window.sessionStorage.remove_hamburger_animate = true;
		}

		if (window.sessionStorage.remove_hamburger_animate == "true") {
			$('.hamburger').removeClass('animated');
		}

		var insert = document.getElementById("insert");
		insert.addEventListener("webkitAnimationEnd", function(){
			window.sessionStorage.remove_landmark_animated = true;
		}, false);

		if (window.sessionStorage.remove_landmark_animated == "true") {
			$('.landmark').removeClass('animated');
		}

		// Caption
  $('.article-entry').each(function(i){
    $(this).find('img').each(function(){
      if ($(this).parent().hasClass('fancybox')) return;

      var alt = this.alt;

      if (alt) $(this).after('<span class="caption">' + alt + '</span>');

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>');
    });

    $(this).find('.fancybox').each(function(){
      $(this).attr('rel', 'article' + i);
    });
  });

  if ($.fancybox){
    $('.fancybox').fancybox();
  }


	});

