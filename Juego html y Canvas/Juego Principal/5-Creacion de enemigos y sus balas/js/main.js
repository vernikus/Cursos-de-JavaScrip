const canvas = document.getElementsByTagName('canvas')[0];
const ctx = canvas.getContext('2d');
const escenary = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
];
const heightGrid = 60;
const widthGrid = 100;
const sky = 'black';
const planetsArray = [];
//Se crea el arreglo que servira para pintar a los enemigos
const enemiesArray = [];
//Se crea el arrglo que serivira para las balas 
const bullets = [];
class Planets {
    constructor(posX, posY, radio, startAngle, endAngle, color, speed) {
        this.posX = posX,
            this.posY = posY,
            this.radio = radio,
            this.startAngle = startAngle,
            this.endAngle = endAngle,
            this.color = color,
            this.speed = speed
    }
    paint() {
        ctx.beginPath();
        ctx.arc(this.posX, this.posY, this.radio, this.startAngle, this.endAngle);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    move() {
        this.posX -= this.speed;
        if (this.posX < 0) {
            this.posX = 1100;
            this.posY = Math.random() * 300;
        }
    }
}
planetsArray.push(new Planets(100, Math.random() * 300, 15, 0, 2 * Math.PI, 'rgba(68,28,97,0.5)', 0.75));
planetsArray.push(new Planets(1100, Math.random() * 300, 5, 0, 2 * Math.PI, 'rgba(32,28,97,0.25)', 1.5));
planetsArray.push(new Planets(1100, Math.random() * 300, 10, 0, 2 * Math.PI, 'rgba(92,28,97,0.5)', 1.75));
planetsArray.push(new Planets(1100, Math.random() * 300, 10, 0, 2 * Math.PI, 'rgba(32,98,97,0.5)', 2));
planetsArray.push(new Planets(1100, Math.random() * 300, 15, 0, 2 * Math.PI, 'rgba(2,2,2,0.5)', 2.25));
planetsArray.push(new Planets(1100, Math.random() * 300, 5, 0, 2 * Math.PI, 'rgba(92,28,97,0.25)', 2.50));
planetsArray.push(new Planets(1100, Math.random() * 300, 10, 0, 2 * Math.PI, 'rgba(255,5,75,0.5)', 1));
planetsArray.push(new Planets(1100, Math.random() * 300, 15, 0, 2 * Math.PI, 'rgba(183,0,42,0.5)', 0.7));
planetsArray.push(new Planets(1100, Math.random() * 300, 5, 0, 2 * Math.PI, 'rgba(92,28,97,0.25)', 0.70));
planetsArray.push(new Planets(1100, Math.random() * 300, 10, 0, 2 * Math.PI, 'rgba(22,28,97,0.5)', 1.8));
planetsArray.push(new Planets(1100, Math.random() * 300, 15, 0, 2 * Math.PI, 'rgba(197,42,42,.5)', 1.96));
planetsArray.push(new Planets(1100, Math.random() * 300, 5, 0, 2 * Math.PI, 'rgba(92,28,97,0.25)', 1.45));
planetsArray.push(new Planets(1100, Math.random() * 300, 10, 0, 2 * Math.PI, 'rgba(255,5,75,0.5)', 2.6));
planetsArray.push(new Planets(1100, Math.random() * 300, 15, 0, 2 * Math.PI, 'rgba(108,19,19,0.5)', 2.45));
planetsArray.push(new Planets(1100, Math.random() * 300, 5, 0, 2 * Math.PI, 'rgba(92,28,97,0.25)', 2.60));
planetsArray.push(new Planets(1100, Math.random() * 300, 10, 0, 2 * Math.PI, 'rgba(255,98,5,0.5)', 2.5));
planetsArray.push(new Planets(1100, Math.random() * 300, 15, 0, 2 * Math.PI, 'rgba(70,15,15,0.5)', 1.5));
planetsArray.push(new Planets(100, Math.random() * 300, 15, 0, 2 * Math.PI, 'rgba(68,28,97,0.5)', 0.75));
class Prota {
    constructor(posX, posY, width, height, color, speed) {
        this.posX = posX,
            this.posY = posY,
            this.width = width,
            this.height = height,
            this.color = color;
        this.speed = speed
    }
    paint() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}
const prota = new Prota(0, 135, 30, 30, 'coral', 15)

//Se crea la clase de los enemigos
class Enemies {
    constructor(posX, posY, width, height, color, speed) {
        this.posX = posX,
            this.posY = posY,
            this.width = width,
            this.height = height,
            this.color = color;
        this.speed = speed
    }
    paint() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}
//Creamos un variable que sea un numero aleatoreo
const random1 = Math.random() * 300
const random2 = Math.random() * 300
const random3 = Math.random() * 300
const random4 = Math.random() * 300
const random5 = Math.random() * 300
const random6 = Math.random() * 300
const random7 = Math.random() * 300
const random8 = Math.random() * 300

enemiesArray.push(new Enemies(100, random1, 30, 30, 'red', 0.5))
enemiesArray.push(new Enemies(100, random2, 30, 30, 'red', 1))
enemiesArray.push(new Enemies(100, random3, 30, 30, 'red', 1.75))
enemiesArray.push(new Enemies(100, random4, 30, 30, 'red', 2.25))
enemiesArray.push(new Enemies(100, random5, 30, 30, 'red', 1.4))
enemiesArray.push(new Enemies(100, random6, 30, 30, 'red', 3.5))
enemiesArray.push(new Enemies(100, random7, 30, 30, 'red', 1.75))
enemiesArray.push(new Enemies(100, random8, 30, 30, 'red', 0.4))

//Creamos la clase de las que seram las balas de los enemeigos (EN TEORIA LAS BALAS SON ENEMIGOS SOLO QUE MAS PEQUEÑOS)
class Bullets {
    constructor(posX, posY, width, height, color, speed) {
        this.posX = posX,
            this.posY = posY,
            this.width = width,
            this.height = height,
            this.color = color;
        this.speed = speed
    }
    paint() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.posX, this.posY, this.width, this.height);
    }
}

bullets.push(new Bullets(100+12.5,random1+12.5,5,5,'white',2))
bullets.push(new Bullets(100+12.5,random2+12.5,5,5,'white',2))
bullets.push(new Bullets(100+12.5,random3+12.5,5,5,'white',2))
bullets.push(new Bullets(100+12.5,random4+12.5,5,5,'white',2))
bullets.push(new Bullets(100+12.5,random5+12.5,5,5,'white',2))
bullets.push(new Bullets(100+12.5,random6+12.5,5,5,'white',2))
bullets.push(new Bullets(100+12.5,random7+12.5,5,5,'white',2))
bullets.push(new Bullets(100+12.5,random8+12.5,5,5,'white',2))

const refresh = () => {
    canvas.width = 1000;
    canvas.height = 300;
}
const printEscenary = () => {
    for (let indexY = 0; indexY < 5; indexY++) {
        for (let indexX = 0; indexX < 10; indexX++) {
            if (escenary[indexY][indexX] == 0) {
                ctx.fillStyle = sky
                ctx.fillRect(indexX * widthGrid, indexY * heightGrid, widthGrid, heightGrid)
            }
        }
    }
}
const printPlanets = () => {
    for (let index = 0; index < planetsArray.length; index++) {
        planetsArray[index].paint()
        planetsArray[index].move()

    }
}
const moveProta = () => {
    document.addEventListener('keydown', (event) => {
        canvas.width = 1000;
        canvas.height = 300;
        event.preventDefault()
        if (event.key === 'w' || event.key === 'W') {
            if (prota.posY > 0) {
                prota.posY -= prota.speed;
            }
        } else if (event.key === 's' || event.key === 'S') {
            if (prota.posY < canvas.height - prota.height) {
                prota.posY += prota.speed;
            }
        } else if (event.key === 'a' || event.key === 'A') {
            if (prota.posX > 0) {
                prota.posX -= prota.speed;
            }
        } else if (event.key === 'd' || event.key === 'D') {
            if (prota.posX < canvas.width - prota.width)
                prota.posX += prota.speed;
        }
    })
}
//Creamos la funcion que pinta a los enemigos
const printEnemies = () => {
    for (let index = 0; index < enemiesArray.length; index++) {
        enemiesArray[index].paint()
    }
}
const printBullets =()=>{
    for(let index =0; index<bullets.length; index++){
        bullets[index].paint()
    }
}
const principal = () => {
    requestAnimationFrame(principal);
    refresh();
    printEscenary();
    printPlanets();
    prota.paint()
    //Pintamos a los enemigos
    printEnemies()
    //Pintamos las balas
    printBullets()

};
moveProta()
principal();
