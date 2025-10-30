
class rocket{
    constructor(x,y,z){
        this.rocket = document.createElement("a-entity");
        this.a = y;
        this.da = 0.2;
        this.x = x;
        this.z = z;

        this.body = document.createElement("a-cylinder");
        this.body.setAttribute("height","5");
        this.body.setAttribute("position","0, 3, 0");

        this.orangething = document.createElement("a-cylinder");
        this.orangething.setAttribute("height","3");

        this.nose = document.createElement("a-cone");
        this.nose.setAttribute("position","0, 6, 0");

        this.rocket.append(this.body);
        this.rocket.append(this.nose);
        this.rocket.append(this.orangething);
        this.rocket.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.rocket);
    }
    fly(){
        this.a+=this.da;
        this.rocket.setAttribute("position",{x:this.x, y:this.a, z:this.z});
    }
}