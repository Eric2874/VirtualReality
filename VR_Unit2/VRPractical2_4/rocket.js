
class rocket{
    constructor(x,y,z){
        this.rocket = document.createElement("a-entity");
        this.a = y;
        this.da = 0.2;
        this.x = x;
        this.z = z;

        this.body = document.createElement("a-cylinder");
        this.body.setAttribute("height","6");
        this.body.setAttribute("position","0, 2.5, 0");

        this.orangething = document.createElement("a-cylinder");
        this.orangething.setAttribute("height","12");
        this.orangething.setAttribute("position","1, 2.5, -1");
        this.orangething.setAttribute("scale","0.5 0.5 0.5");
        this.orangething.setAttribute("color","orange");

        this.orangething2 = document.createElement("a-cylinder");
        this.orangething2.setAttribute("height","12");
        this.orangething2.setAttribute("position","-1, 2.5, -1");
        this.orangething2.setAttribute("scale","0.5 0.5 0.5");
        this.orangething2.setAttribute("color","orange");

        this.nose = document.createElement("a-cone");
        this.nose.setAttribute("position","0, 7, 0");
        this.nose.setAttribute("color","black");
        this.nose.setAttribute("scale","1");
        this.nose.setAttribute("height","3");
        
        this.thruster = document.createElement("a-cone");
        this.thruster.setAttribute("position","0, -0.4, 0");
        this.thruster.setAttribute("height","1");
        this.thruster.setAttribute("color","black");
        this.thruster.setAttribute("scale","1 2 1");

        this.block = document.createElement("a-box");
        this.block.setAttribute("position","0, 4, 0.6");
        this.block.setAttribute("color","black");

        
        this.glass= document.createElement("a-sphere");
        this.glass.setAttribute("segments-radial","3");
        this.glass.setAttribute("position","0, 4, 1");
        this.glass.setAttribute("phi-length","180");
        this.glass.setAttribute("color","cyan");
        this.glass.setAttribute("opacity","0.4");
        this.glass.setAttribute("scale","0.5, 0.5, 0.5")

        this.rocket.append(this.body);
        this.rocket.append(this.thruster);
        this.rocket.append(this.nose);
        this.rocket.append(this.orangething);
        this.rocket.append(this.orangething2);
        this.rocket.append(this.block);
        this.rocket.append(this.glass);
        this.rocket.setAttribute("position", {x:x, y:5, z:z});
        scene.append(this.rocket);

        
    }
    fly(){
        this.a+=this.da;
        this.rocket.setAttribute("position",{x:this.x, y:this.a, z:this.z});
    }
}