function initiate() {

	var element = document.getElementById("canvas");
    var canvas = element.getContext('2d');
    var background = document.getElementById("background");
    var tarakan = document.getElementById("tarakan");
    var GO = document.getElementById("goButton");

	
	var dx1 = 25;
	var dx2 = 25;
	var dx3 = 25;
	var dx4 = 25;
	var bug1F = 0;
	var bug2F = 0;
	var bug3F = 0;
	var bug4F = 0;
	var max = 6;
	var min = 1;
	var bug1V = true;
	var bug2V = true;
	var bug3V = true;
	var bug4V = true;
	var game = false;
	var player1;
	var player2;
	var player3;
	var tar1;
	var tar2;
	var tar3;
	var tar4;
	var cash;
	var money;

    function gameField(x, y, width, height) {
        canvas.strokeStyle = "black";
        canvas.drawImage(background, 0, 0);
        canvas.beginPath();
        canvas.moveTo(0, 150);
        canvas.lineTo(1026, 150);
        canvas.lineWidth = 5;
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(0, 300);
        canvas.lineTo(1026, 300);
        canvas.lineWidth = 5;
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(0, 450);
        canvas.lineTo(1026, 450);
        canvas.lineWidth = 5;
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(110, 0);
        canvas.lineTo(110, 600);
        canvas.lineWidth = 5;
        canvas.stroke();
        canvas.beginPath();
        canvas.moveTo(1026, 0);
        canvas.lineTo(1026, 600);
        canvas.lineWidth = 5;
        canvas.stroke();
    }

    function resetGame() {
        gameField(0, 0, 1024, 600);
        canvas.drawImage(tarakan, 0, 20);
        canvas.drawImage(tarakan, 0, 170);
        canvas.drawImage(tarakan, 0, 320);
        canvas.drawImage(tarakan, 0, 470);
        dx1 = 25;
        dx2 = 25;
        dx3 = 25;
        dx4 = 25;
        bug1F = 0;
        bug2F = 0;
        bug3F = 0;
        bug4F = 0;
    }

    function drawMedal(position, bug) {
        if (position == 1) {
            if (bug == 1) canvas.fillText("Первый!", 300, 75);
            if (bug == 2) canvas.fillText("Первый!", 300, 225);
            if (bug == 3) canvas.fillText("Первый!", 300, 375);
            if (bug == 4) canvas.fillText("Первый!", 300, 525);
        }
        if (position == 2) {
            if (bug == 1) canvas.fillText("Второй!", 300, 75);
            if (bug == 2) canvas.fillText("Второй!", 300, 225);
            if (bug == 3) canvas.fillText("Второй!", 300, 375);
            if (bug == 4) canvas.fillText("Второй!", 300, 525);
        }
        if (position == 3) {
            if (bug == 1) canvas.fillText("Третий!", 300, 75);
            if (bug == 2) canvas.fillText("Третий!", 300, 225);
            if (bug == 3) canvas.fillText("Третий!", 300, 375);
            if (bug == 4) canvas.fillText("Третий!", 300, 525);
        }
        if (position == 4) {
            if (bug == 1) canvas.fillText("Четвертый!", 300, 75);
            if (bug == 2) canvas.fillText("Четвертый!", 300, 225);
            if (bug == 3) canvas.fillText("Четвертый!", 300, 375);
            if (bug == 4) canvas.fillText("Четвертый!", 300, 525);
        }
        canvas.font = "italic 50pt Arial";
    }

    

	resetGame();

	var draw = function () {
	    if (game == true) {

				gameField(0,0,1024,600);
				
				canvas.drawImage(tarakan,dx1,20);
				canvas.drawImage(tarakan,dx2,170);
				canvas.drawImage(tarakan,dx3,320);
				canvas.drawImage(tarakan,dx4,470);

				if (dx1 < 1024) {
				    if (bug1V == true) dx1 += Math.floor(Math.random() * max) + min;
				    if (bug1V == false) dx1 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx1>400) bug1V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug1V = true;
				} else if (bug1F == 0) {
	                if (bug2F == 0 && bug3F == 0 && bug4F == 0) {
	                    bug1F = 1;
	                }
	                if (bug2F != 0 || bug3F != 0 || bug4F != 0) {
	                    bug1F = 2;
	                }
	                if ((bug2F != 0 && bug3F != 0) || (bug2F != 0 && bug4F != 0) || (bug3F != 0 && bug4F != 0)) {
	                    bug1F = 3;
	                }
	                if (bug2F != 0 && bug3F != 0 && bug4F != 0) {
	                    bug1F = 4;
	                }
	            } else {
	                drawMedal(bug1F, 1);
	            }

				if (dx2 < 1024) {
				    if (bug2V == true) dx2 += Math.floor(Math.random() * max) + min;
				    if (bug2V == false) dx2 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx2>400) bug2V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug2V = true;
				} else if (bug2F == 0) {
				    if (bug1F == 0 && bug3F == 0 && bug4F == 0) {
				        bug2F = 1;
				    }
				    if (bug1F != 0 || bug3F != 0 || bug4F != 0) {
				        bug2F = 2;
				    }
				    if ((bug1F != 0 && bug3F != 0) || (bug2F != 0 && bug4F != 0) || (bug3F != 0 && bug4F != 0)) {
				        bug2F = 3;
				    }
				    if (bug1F != 0 && bug3F != 0 && bug4F != 0) {
				        bug2F = 4;
				    }
				} else {
				    drawMedal(bug2F, 2);
				}

				if (dx3 < 1024) {
				    if (bug3V == true) dx3 += Math.floor(Math.random() * max) + min;
				    if (bug3V == false) dx3 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx3>400) bug3V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug3V = true;
				} else if (bug3F == 0) {
				    if (bug1F == 0 && bug2F == 0 && bug4F == 0) {
				        bug3F = 1;
				    }
				    if (bug1F != 0 || bug2F != 0 || bug4F != 0) {
				        bug3F = 2;
				    }
				    if ((bug1F != 0 && bug2F != 0) || (bug1F != 0 && bug4F != 0) || (bug2F != 0 && bug4F != 0)) {
				        bug3F = 3;
				    }
				    if (bug1F != 0 && bug2F != 0 && bug4F != 0) {
				        bug3F = 4;
				    }
				} else {
				    drawMedal(bug3F, 3);
				}

				if (dx4 < 1024) {
				    if (bug4V == true) dx4 += Math.floor(Math.random() * max) + min;
				    if (bug4V == false) dx4 -= Math.floor(Math.random() * max) + min;
				    if (((Math.floor(Math.random() * 140) + 1) == (Math.floor(Math.random() * 50) + 1))&& dx4>400) bug4V = false;
				    if ((Math.floor(Math.random() * 15) + 1) == (Math.floor(Math.random() * 10) + 1)) bug4V = true;
				} else if (bug4F == 0) {
				    if (bug1F == 0 && bug2F == 0 && bug3F == 0) {
				        bug4F = 1;
				    }
				    if (bug1F != 0 || bug2F != 0 || bug3F != 0) {
				        bug4F = 2;
				    }
				    if ((bug1F != 0 && bug2F != 0) || (bug1F != 0 && bug3F != 0) || (bug2F != 0 && bug3F != 0)) {
				        bug4F = 3;
				    }
				    if (bug1F != 0 && bug2F != 0 && bug3F != 0) {
				        bug4F = 4;
				    }
				} else {
				    drawMedal(bug4F, 4);
				}
	            if (bug1F != 0 && bug2F != 0 && bug3F != 0 && bug4F != 0) {
	                game = false;
	            }
	    }
			else if (game == false)	{
			    drawMedal(bug1F, 1);
			    drawMedal(bug2F, 2);
			    drawMedal(bug3F, 3);
			    drawMedal(bug4F, 4);
			}



	    GO.onclick = function () {
			    if (!game) {
			        resetGame();
			        game = true;
			    } else {

			    }
			};

 //    var x11=0,x22=0,x33=0,x14=0,x24=0,x34=0,
 //    x12=0,x23=0,x31=0,x13=0,x21=0,x32=0;

	// function AddCash(){
	// 	player1=document.getElementById('p1');
	// 	player2=document.getElementById('p2');
	// 	player3=document.getElementById('p3');
	// 	tar1=document.getElementById('1nomer');
	// 	tar2=document.getElementById('2nomer');
	// 	tar3=document.getElementById('3nomer');
	// 	tar3=document.getElementById('4nomer');
	// 	cash=document.getElementById('cash');
	// 	money=document.getElementById('playercash')
	// 	if (player1.checked && tar1.checked) {
			
	// 	};
	// 	if (player2.checked && tar2.checked) {
	// 		x22=parseInt(cash.value, 10);
	// 		money.options[money.length]= new Option('2 игрок'+'2 таракан'+cash.value, 0 + '$')
	// 	};

	// }


	}
	setInterval(draw, 25); 
}

addEventListener("load", initiate);