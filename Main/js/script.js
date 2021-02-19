// alert(123);
document.addEventListener('DOMContentLoaded', () => {

const Item1 = document.querySelector('._anim-item-1');
const Item2 = document.querySelector('._anim-item-2');

const animOnScroll = (_Item) => {
	const animItem = _Item;
	const animItemHeight = animItem.offsetHeight;
	const animItemOffset = offset(animItem).top;
	const animStart = 4;

	let animItemPoint = window.innerHeight - animItemHeight / animStart;
	if (animItemHeight > window.innerHeight) {
			animItemPoint = window.innerHeight - window.innerHeight / animStart;
		}
	if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
	
			animItem.classList.add('_active');
	} else {
		if (!animItem.classList.contains('_anim-no-hide')) {
				animItem.classList.remove('_active');
		}				
	}		
}

animOnScroll(Item1);
animOnScroll(Item2);

window.addEventListener('scroll', () => {
	animOnScroll(Item1);
	animOnScroll(Item2);
});

function offset(el) {
	const rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
});