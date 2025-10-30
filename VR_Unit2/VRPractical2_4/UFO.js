class Ufo{
     constructor(){
        this.ufo = document.createElement("a-entity");
        this.a = y;

        this.body = document.createElement("a-sphere");
        this.body.setAttribute("color","black");
        this.body.setAttribute("position","4,0,0");

        this.ufo.append(this.body);    
        scene.append(this.ufo);
    }
    drop(){
        
    }
}