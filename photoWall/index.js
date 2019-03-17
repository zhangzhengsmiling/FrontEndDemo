

// (function(){

	let container = document.getElementsByClassName('container')[0];
	let btn = document.getElementsByClassName('btn')[0];
	let imgList = [];
	//初始化图片
	let init = function(){
		for(let i = 0; i < 10; i++){
			for(let j = 0; j < 6; j++){
				let rand = Math.floor(Math.random() * 12 + 1);
				let img = document.createElement('img');
				img.src = './imgs/' + rand + '.jpg';
				imgList.unshift(img);
				container.appendChild(img);
			}
		}
	}

	let anim = function(){
		let delayTime = Math.random() * 1000;
		let r = Math.random() * 200;
		this.style.animation = 'anim 3s ease-in infinite';
		this.style.animationDelay = delayTime + 'ms';
		this.animation = '';
	}


	btn.addEventListener('click' , function(){
		imgList.forEach(image => {
			anim.call(image);
		})
	})
	init();
// }())