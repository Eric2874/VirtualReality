class tpwarrior{
    constructor(x,y,z){
         this.x=x;
         this.y=y;
         this.z=z;
         this.obj = mech.clonenode(true);
         this.obj.setAttribute("position",{x:this.x,y:this.y,z:this.z});
         scene.append(this.obj);
  
    }
}