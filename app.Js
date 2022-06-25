var waterLevel = 0
var waterLimit = 4000
var add=true

function addMode(mode) {
    add = mode;
}

function addWater() {
    // waterLevel += 500;
    let bigGlass = document.getElementById('big-glass')
    let water = document.getElementById('water')
    if(add==true){
        if(((waterLevel/waterLimit)*100)>=100) return
        waterLevel+=500
    }else{
        waterLevel-=500
    }
    let waterPercent = (waterLevel/waterLimit)*100
    
    water.style.height = waterPercent+"%"
}