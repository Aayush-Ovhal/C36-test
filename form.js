class Form{

    constructor(){

        this.input = createInput("name");
        this.button = createButton('Submit');
        this.title2 = createElement('h3');

    }

    hide(){
        this.title2.hide();
        this.input.hide();
        this.button.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME made by noob");
        title.position(130,0);

        this.input.position(130,160);

        this.button.position(130,250);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();

            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            this.title2.html("NOMOSKAR " + player.name);
            this.title2.position(130,160);
        })
    }

}