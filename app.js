const canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
const clrs = document.querySelectorAll('.clr');
console.log(clrs);
// document -> html buh code
// window -> huudas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//zuraasiin urgun
ctx.lineWidth = 6;
let prevX=null;
let prevY=null;
let draw = false;
// addEventListener-> mousemove
let clrArr = Array.from(clrs);
console.log(clrArr);
clrArr.forEach(clr=>{
	clr.addEventListener('click',()=>{
		ctx.strokeStyle = clr.dataset.clr;
	});
});
// mousedown ->mouse deer darah uyd
window.addEventListener('mousedown',(e)=>{ draw=true ;})
window.addEventListener('mouseup',(e)=>{ draw=false ;})
window.addEventListener('mousemove',(e)=>{
	if(draw==false || prevX==null || prevY==null){
		prevX=e.clientX;
		prevY=e.clientY;
	}
	console.log(e.clientX);
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	ctx.beginPath();
	ctx.moveTo(prevX,prevY);
	ctx.lineTo(mouseX,mouseY);
	ctx.stroke();
	prevX = e.clientX;
	prevY = e.clientY;
});
let clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click',()=>{
	ctx.clearRect(0,0,canvas.width,canvas.height);
});
let saveBtn = document.querySelector('.save');
saveBtn.addEventListener('click',()=>{
	let data = canvas.toDataURL('img/jpg');
	let a = document.createElement('a');
	a.href=data;
	a.downland="img.jpg";
	a.click();
});
let selectBtn = document.querySelector('.select');
let selector = document.querySelector('.selector')
selectBtn.addEventListener('click',()=>{
	ctx.lineWidth=selector.value;
});