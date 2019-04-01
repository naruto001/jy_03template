/**
 * Created by Administrator on 2017/10/27.
 */
document.addEventListener('DOMContentLoaded',function(){
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
	function resize() {
		var html = document.documentElement;
		if(html.clientWidth > 320){
			if(html.clientWidth < 640){
				html.style.fontSize = (html.clientWidth / 15) + 'px'
			}else{
				html.style.fontSize = '100px'
			}
		}else{
			html.style.fontSize = '36px'
		}
	};
	resize()
	window.addEventListener(resizeEvt, resize, false)
})


