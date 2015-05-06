
var arc_x = 0;
var arc_y = 0;
var l_x = 0;
var l_y = 0;
function init() {
    var canvas = document.getElementById("pic");
    var ctx = canvas.getContext("2d");
    
        //небо
        if (arc_x >= 20 && arc_x < 60) {
            ctx.fillStyle = "#589dd0";
            ctx.fill();
            ctx.beginPath();
            ctx.fillRect(0, 0, 1000, 400);
        }
        else if (arc_x >= 50 && arc_x < 100) {
            ctx.fillStyle = "#296999";
            ctx.fill();
            ctx.beginPath();
            ctx.fillRect(0, 0, 1000, 400);
        }
        else if (arc_x >= 100 && arc_x < 150) {
            ctx.fillStyle = "#1a4780";
            ctx.fill();
            ctx.beginPath();
            ctx.fillRect(0, 0, 1000, 400);
        }
        else if (arc_x >= 150 && arc_x < 200) {
            ctx.fillStyle = "#003366";
            ctx.fill();
            ctx.beginPath();
            ctx.fillRect(0, 0, 1000, 400);
        }
        else if (arc_x >= 200 && arc_x < 250) {
            ctx.fillStyle = "#001524";
            ctx.fill();
            ctx.beginPath();
            ctx.fillRect(0, 0, 1000, 400);
        }
        else if (arc_x >= 250 && arc_x < 500) {
            ctx.fillStyle = "#0e1824";
            ctx.fill();
            ctx.beginPath();
            ctx.fillRect(0, 0, 1000, 400);
        }
        else {
            ctx.fillStyle = "black";
            ctx.fill();
            ctx.beginPath();
            ctx.fillRect(0, 0, 1000, 400);
        }
        //мЭсяц
        if (arc_x >= 750 && arc_y >= 200) {
            
            ctx.beginPath();
            ctx.arc(l_x, l_y, 50, 0, Math.PI * 2, true);
            l_x += 5;
            l_y += 2;
            ctx.fillStyle = "LemonChiffon";
            ctx.fill();
        }
        //Солнце
        ctx.beginPath();
        ctx.arc(arc_x, arc_y, 100, 0, Math.PI * 2, true);
        arc_y += 1;
        arc_x += 5;
        ctx.fillStyle = "#f9fb51";
        ctx.fill();
        //дома
        //2
        ctx.lineWidth = 2;
        ctx.strokeRect(50, 150, 80, 350);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(50, 150, 80, 350);
        //4
        ctx.lineWidth = 2;
        ctx.strokeRect(200, 200, 100, 300);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(200, 200, 100, 300);
        //1
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 300, 100, 200);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(0, 300, 100, 200);
        //3
        ctx.lineWidth = 2;
        ctx.strokeRect(100, 220, 150, 280);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(100, 220, 150, 280);
        //7
        ctx.lineWidth = 2;
        ctx.strokeRect(320, 170, 150, 330);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(320, 170, 150, 330);
        //10 
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        ctx.moveTo(650, 500);
        ctx.lineTo(650, 200);
        ctx.lineTo(700, 150);
        ctx.lineTo(750, 200);
        ctx.lineTo(750, 500);
        ctx.fillStyle = 'grey';
        ctx.fill();
        ctx.stroke();
        //9
        ctx.lineWidth = 2;
        ctx.strokeRect(570, 280, 100, 220);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(570, 280, 100, 220);
        //8
        ctx.lineWidth = 2;
        ctx.strokeRect(450, 300, 150, 200);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(450, 300, 150, 200);
        //6
        ctx.lineWidth = 2;
        ctx.strokeRect(270, 250, 80, 250);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(270, 250, 80, 250);
        //5
        ctx.lineWidth = 2;
        ctx.strokeRect(250, 350, 50, 150);
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'grey';
        ctx.fillRect(250, 350, 50, 150);
    //////////////////
        setTimeout("init()", 25);
        if (l_y == 350) {
            arc_y = 0;
            arc_x = 0;
            l_x = 0;
            l_y = 0;
        }
    }


addEventListener("load", init);