class Clouds{
    constructor(x,y,z){
        let cloud = document.createElement("a-entity");

        let stsphere = document.createElement("a-sphere");
        stsphere.setAttribute("position","0 0 0");
        stsphere.setAttribute("height","1");
        cloud.append( stsphere );

        cloud.setAttribute("position",{x:x,y:y,z:z});
        scene.append (cloud);
    }
}