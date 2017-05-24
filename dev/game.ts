class Game {
    
    private chicken:Chicken;
    private zombies:Array<Zombie> = new Array<Zombie>();
 
    constructor() {
        this.chicken = new Chicken();
  
        for(let c = 0; c<10; c++){
            this.zombies.push(new Zombie(this.chicken));
        }
 
        requestAnimationFrame(() => this.gameLoop());
    }
    
    private gameLoop(){
        // beweging
        this.chicken.update();

        let hitZombie = false;
        for(let z of this.zombies){
            z.update();
            if(Util.checkCollision(z, this.chicken)){
                hitZombie = true;
            }
        }

        // loop gaat door als we geen zombie raken 
        if(!hitZombie) requestAnimationFrame(() => this.gameLoop());
    }
    
} 

window.addEventListener("load", function() {
    new Game();
});