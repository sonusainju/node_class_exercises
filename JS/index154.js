let player = {
    name:null,
    energy:100,
    lives:3,
    loseEnergy:function(damage){
            this.energy -= damage;
    },
    recoverEnergy:function(energyUp){
        this.energy += energyUp;
    },
    loseLife: function(){
        lives--;
    },
    recoverLife: function(){
        lives++;
    }


}