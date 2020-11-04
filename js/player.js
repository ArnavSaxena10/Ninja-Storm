class Player{
    constructor(){
        this.sprite=createSprite(width/2-100,height/2+125,100,100);
        this.sprite.addAnimation("still",viperStill);
        this.sprite.addAnimation("walk",viperWalk);
        this.sprite.addAnimation("attack",viperAttack);
        this.sprite.addAnimation("attackExtra",viperAttackExtra);
        this.sprite.addAnimation("death",viperDeath);
        this.sprite.scale=1.5;
        //this.sprite.debug=true;
        this.sprite.setCollider("rectangle",-20,20,this.sprite.width-200,this.sprite.height-200);
    }

    control(){
        
        if(keyIsDown(UP_ARROW)){
            this.sprite.y-=5;
            this.sprite.changeAnimation("walk",viperWalk);
        }

        if(keyIsDown(DOWN_ARROW)){
            this.sprite.y+=5;
            this.sprite.changeAnimation("walk",viperWalk);
        }

        if(keyIsDown(LEFT_ARROW)){
            this.sprite.x-=5;
            this.sprite.changeAnimation("walk",viperWalk);
        }

        if(keyIsDown(RIGHT_ARROW)){
            this.sprite.x+=5;
            this.sprite.changeAnimation("walk",viperWalk);
        }

        if(keyWentUp(UP_ARROW)){
            this.sprite.changeAnimation("still",viperStill);
        }

        if(keyWentUp(DOWN_ARROW)){
            this.sprite.changeAnimation("still",viperStill);
        }
        
        if(keyWentUp(LEFT_ARROW)){
            this.sprite.changeAnimation("still",viperStill);
        }

        if(keyWentUp(RIGHT_ARROW)){
            this.sprite.changeAnimation("still",viperStill);
        }
        
    }
}