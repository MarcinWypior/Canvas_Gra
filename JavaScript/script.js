var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var grafikaPlatformy = new Image();
grafikaPlatformy.src = 'platforma.png';
var platormy = [];
platormy[0]= new Platforma(0,500,750,80);
platormy[1]= new Platforma(730,500,750,80);
platormy[2]= new Platforma(100,250,100,40);
platormy[3]= new Platforma(240,360,100,40);
platormy[4]= new Platforma(500,430,100,40);
platormy[5]= new Platforma(380,180,100,40);
platormy[6]= new Platforma(730,300,100,40);
platormy[7]= new Platforma(670,100,100,40);
platormy[8]= new Platforma(1000,390,100,40);
platormy[9]= new Platforma(200,70,100,40);
platormy[10]= new Platforma(1160,320,100,40);
platormy[11]= new Platforma(910,160,100,40);

var grafikaMonety = new Image();
grafikaMonety.src = 'moneta.png';
var monety = [];
monety[0] = new Moneta(130,190,35,35);
monety[1] = new Moneta(270,300,35,35);
monety[2] = new Moneta(530,330,35,35);
monety[3] = new Moneta(410,120,35,35);
monety[4] = new Moneta(760,240,35,35);
monety[5] = new Moneta(700,40,35,35);
monety[6] = new Moneta(1030,330,35,35);
monety[7] = new Moneta(230,30,35,35);
monety[8] = new Moneta(1190,260,35,35);

var przeszkody=[];
przeszkody[0]= new Przeszkoda(40,170,35,40,5,'grzyb.png')
przeszkody[1]= new Przeszkoda(420,340,35,40,10,'ogien.png')


var Grafikapostaci = new Image();
Grafikapostaci.src = 'postac.png';
var xPos = 10;
var yPos= 20;
var szerPos=50;
var wysPos=50;
var hp=100;

var dy=0;



function rysuj()
{
    context.clearRect(0,0,canvas.width,canvas.height)
    rysujPlatformy();
    rysujMonety();
    rysujPrzeszkody();
    context.drawImage(Grafikapostaci,xPos,yPos,szerPos,wysPos);
    grawitacja();   
    
    xPos = xPos + dx;
}

var dx=0;
function ruchPostaci(e){
    if(e.keyCode == 37)
       {
            dx = -2;
       }
       else if(e.keyCode == 39)
    {
        dx = 2;
    }    
}

function stop(e)
{
        if(e.keyCode == 37)
       {
            dx = 0;
       }
       else if(e.keyCode == 39)
    {
        dx = 0;
    }    
}

document.addEventListener('keydown',ruchPostaci,false);
document.addEventListener('keyup',stop,false);



function grawitacja()
{
    dy = 3;
    
    for(var i=0; i <platormy.length;i++)
    {
        if(yPos + wysPos > platormy[i].y &&
          yPos + 0.8*wysPos < platormy[i].y &&
          xPos + szerPos/2 >platormy[i].x &&
          xPos + szerPos/2< platormy[i].x +platormy[i].szer)
           {
           dy=0;           
           }
    }
    
    yPos = yPos +dy;
}

setInterval(rysuj,10);


function Platforma (px,py,pszer,pwys)
{
    this.x=px;
    this.y=py;
    this.szer=pszer;
    this.wys=pwys;
}

function Moneta (px,py,pszer,pwys)
{
    this.x=px;
    this.y=py;
    this.szer=pszer;
    this.wys=pwys;
    this.czywidoczna=true;
}

function Przeszkoda (px,py,pszer,pwys,pzabiera,pnazwa)
{
    this.x=px;
    this.y=py;
    this.szer=pszer;
    this.wys=pwys;
    this.czywidoczna=true;
    this.zabiera=pzabiera;
    this.nazwa=pnazwa;
    this.GrafikaPrzeszkody = new Image();
    this.GrafikaPrzeszkody.src = pnazwa;
}

function rysujPlatformy()
{
    for( var i =0; i<platormy.length;i++)
    {
                context.drawImage(grafikaPlatformy
                       ,platormy[i].x
                       ,platormy[i].y
                       ,platormy[i].szer
                       ,platormy[i].wys)   
    }
}


function rysujMonety()
{
    for( var i =0; i<monety.length; i++)
    {
        if(monety[i].czywidoczna==true)
        {

        context.drawImage(grafikaMonety
                           ,monety[i].x
                           ,monety[i].y
                           ,monety[i].szer
                           ,monety[i].wys)   
        }
    }
}

function rysujPrzeszkody()
{
    for( var i =0; i<przeszkody.length; i++)
    {
        if(przeszkody[i].czywidoczna==true)
        {

        context.drawImage(przeszkody[i].GrafikaPrzeszkody
                           ,przeszkody[i].x
                           ,przeszkody[i].y
                           ,przeszkody[i].szer
                           ,przeszkody[i].wys)   
        }
    }
}




// font-family: "Times New Roman", Times, serif;
/* dsaf*/
//'SourceCodePro-Medium', ＭＳ ゴシック, 'MS Gothic', monospace

