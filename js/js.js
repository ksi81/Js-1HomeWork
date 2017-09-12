///////////////Задание 1.
document.getElementById('start').onclick=f1;
function f1(){
	var a=document.getElementById('data').value;
	a=parseInt(a);
	var c;
	if(a>17){
		c=2017-a;
		document.getElementById('rez').innerHTML=c;
	}
	if(a<17){
		c=17-a;
		document.getElementById('rez').innerHTML=c;
	}
}

///////////////Задание 2.
document.getElementById('start2').onclick=f2;

function f2(){
	var a=document.getElementById('num1').value;
	var b=document.getElementById('num2').value;
	a=parseInt(a);
	b=parseInt(b);
	if (a>b) {
		alert (a);
	}
	else if (a<b){

		alert (b);
	} else {
		alert("числа равны");
	}

}
////////Задание 3.
document.getElementById('find').onclick=f3;

function f3(){
	
	var flat=document.getElementById('flat').value;
	if (flat>=1 && flat<=20) {
		alert ('подъезд #1');
	}
	else if (flat>=21 && flat<=64){
		alert ('подъезд #2');
	}
	else if (flat>=65 && flat<=80){
		alert ('подъезд #3'); 
	}
	else {
		alert ('нет такой');
	}
}
////////Задание 4.

var logins=new Array('ivan', 'ssss', 'gibs');
var parols=new Array('333', '666', '0000');

function print()
{
	var log=document.forma_1.login.value;
	var par=document.forma_1.parol.value;

	for (i=0; i<logins.length; i++)
	{
		if (logins[i]==log && parols[i]==par) {alert('Добро пожаловать - Вы вошли как ' + logins[i]); break}
		else if (i==logins.length-1) {alert('Пароль неверный'); document.forma_1.login.value=''; document.forma_1.parol.value=''}
	}

}
///////////////Задание 5.
document.getElementById('max').onclick=f4;

function f4(){
	var a=document.getElementById('n1').value;
	var b=document.getElementById('n2').value;
	var c=document.getElementById('n3').value;
	a=parseInt(a);
	b=parseInt(b);
	c=parseInt(c);
	if (a>b && a>c) {
		alert ('Максимальное ' +a);
	}
	else if (a<b && b>c){

		alert ('Максимальное ' +b);
	} 
	else if (a<c && b<c){

		alert ('Максимальное ' +c);
	}
	else {
		alert ('есть два равных числа');
	}
}


///////////////Задачи на цикл for - Задание 1.	

function f5(){
	var p;
	p = document.getElementById('out2');
	for (var i = 2; i <= 100; i += 2){
		p.innerHTML += i+' ';
	}
}
///////////////Задачи на цикл for - Задание 2.	

function f51(){
	var p;
	p = document.getElementById('out3');
	for (var i = 200; i >= 0; i--){
		p.innerHTML += i+' ';
	}
}
///////Задачи на цикл for - Задание 3.	

function f53(){
	var p;
	p = document.getElementById('out4');
	var sum = 0;
	for (var i = 0; i <= 100; i++) {
		sum += i;
	}
	p.innerHTML += sum;
}
///////Задачи на цикл for - Задание 4.	
document.getElementById('step').onclick=f54;
function f54(){
	var p;
	p = document.getElementById('out5');
//x число, которое возводится в степень
// n степень, должна быть целым числом больше 1
function pow(x, n) {
	var result = x;
	for (var i = 1; i < n; i++) {
		result *= x;
	}
	return result;
}
var x=document.getElementById('number1').value;
var n=document.getElementById('number2').value;
if (n <= 1) {
	alert('Степень ' + n +
		'не поддерживается, введите целую степень, большую 1'
		);
} else {
	// alert( pow(x, n) );
	p.innerHTML +='Результат ' + ( pow(x, n) );
}
}
///////Задачи на цикл for - Задание 5.	
var tab = document.getElementById("tab7");
var tab2 = document.getElementById("tab8");
tab.innerHTML="<h1>Таблица умножения</h1>";
for (j = 7; j <= 7; j++){  
	for (i = 1; i <=9; i++)  
	{ 
		tab2.innerHTML +=(i + "*" + j + "=" +(i*j) + "<br>")
	}  
} 
///////Задачи на цикл for - Задание 5-1	
function fn1(){
	var sum=1;
	for (var i=1; i<=50; i++){  
		sum=sum*i; 
		document.getElementById('one').innerHTML=sum;
	}
}
///////Задачи на цикл for - Задание 5-1	
function fPoisk(){
	var p;
	p = document.getElementById('outRez');
	for (var i = 1000; i <= 2000; i += 2){
		p.innerHTML +='&#' + i+' ';
	}
}


