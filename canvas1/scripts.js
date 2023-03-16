/* 
const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

// var color = getBGColor(pink);

// pink.addEventListener("mouseenter", () => {
//   center.style.background = color;
// });

const magicColorChanger = (element, color) => {
    return element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(cyan, getBGColor(cyan));
magicColorChanger(violet, getBGColor(violet));
magicColorChanger(orange, getBGColor(orange));
magicColorChanger(pink, getBGColor(pink));


// // Custom Cursor
// let cursor = document.getElementById('cursor');
// const onMouseMove = (e) =>{
//   cursor.style.left = e.pageX + 'px';
//   cursor.style.top = e.pageY + 'px';
// }
// document.addEventListener('mousemove', onMouseMove);
*/

//  Canvas Practice
/** @type {HTMLCanvasElement} */
const canvas = document.querySelector('#canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');


// Squares 
/*
c.fillStyle = 'rgba(255 , 0 , 0 , 0.5)';
c.fillRect(100, 100, 150, 150)

c.fillStyle = 'rgba(0 , 255 , 0 , 0.5)';
c.fillRect(300, 300, 100, 100)

c.fillStyle = 'rgba(0 , 0 , 255, 0.5)';
c.fillRect(700, 100, 100, 100)
*/


// Line

/*
c.beginPath();
c.moveTo(50,300);
c.strokeStyle = '#fff';
c.stroke();
c.lineTo(700,0);
c.strokeStyle = '#ddd';
c.stroke();
c.lineTo(900,650);
//c.strokeStyle = 'rgb(255, 0, 0)';
c.stroke();
c.lineTo(600,750);
*/

// Circle

function randomCircles(){
	c.clearRect(0, 0, canvas.width, canvas.height);
	const n = Math.random() * 250;

	for(let i = 0; i < n; i++){
		var x = Math.random() * window.innerWidth;
		var y = Math.random() * window.innerHeight;
		var size = Math.random() * 200;

		c.beginPath()
		c.strokeStyle = '#fa33a3';
		c.arc(x , y , size , 0 , Math.PI * 2, false);

		var r = Math.random() * 255;
		var g = Math.random() * 255;
		var b = Math.random() * 255;
		var col = `rgba(${r},${g},${b},0.5)`

		c.fillStyle = col;
		c.fill()
	}
}

function randomLines(){
	
}