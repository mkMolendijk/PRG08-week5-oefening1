/// <reference path="gameobject.ts" />

class Chicken extends GameObject implements Observable {

    private score: number = 0;

    constructor() {
        super("bird", document.body);

        this.width = 67;
        this.height = 110;
        this.speedmultiplier = 2;

        document.getElementsByTagName("ui")[0].innerHTML = "Score: " + this.score;

        window.addEventListener("click", (e: MouseEvent) => this.onWindowClick(e));
        this.div.addEventListener("click", (e: MouseEvent) => this.onClick(e));
    }

    public subscribe() {

    }

    public unsubscribe() {
        
    }

    public update() {
        this.x += this.xspeed;
        this.y += this.yspeed;
        super.update();
    }

    // de beweegrichting aanpassen aan waar in het window is geklikt
    private onWindowClick(e: MouseEvent): void {
        Util.setSpeed(this, e.clientX - this.x, e.clientY - this.y);
        this.div.style.backgroundImage = "url('images/chickenwalking.gif')";
    }

    // er is op de kip geklikt
    private onClick(e: MouseEvent): void {
        this.div.style.backgroundImage = "url('images/chickencalling.png')";
        this.xspeed = 0;
        this.yspeed = 0;

        // hiermee voorkomen we dat window.click ook uitgevoerd wordt
        e.stopPropagation();
    }

}