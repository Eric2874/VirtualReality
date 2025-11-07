class Ufo{
     constructor(x,y,z){
        this.ufo = document.createElement("a-entity");
        this.x = x;
        this.z = z;
        this.a = y;
        this.da = -.8;

        this.body = document.createElement("a-sphere");
        this.body.setAttribute("color","gray");
        this.body.setAttribute("position","4, 40, 3");
        this.body.setAttribute("scale","8 1.2 8")

        this.glass= document.createElement("a-sphere");
        this.glass.setAttribute("segments-radial","3");
        this.glass.setAttribute("position","4, 40, 3");
        this.glass.setAttribute("rotation","270 0 0")
        this.glass.setAttribute("phi-length","180");
        this.glass.setAttribute("color","blue");
        this.glass.setAttribute("opacity","0.4");
        this.glass.setAttribute("scale"," 3 3 3");

        this.ufo.append(this.body);
        this.ufo.append(this.glass);     
        scene.append(this.ufo);
    }
    fly(){
        this.a+=this.da;
        this.ufo.setAttribute("position",{x:this.x, y:this.a, z:this.z});
    }
}