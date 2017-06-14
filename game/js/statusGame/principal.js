


    var Game = new Phaser.Game(900, 500, Phaser.AUTO, 'blockGame');
    var derecha, izquierda,arriba,abajo,cuerpo, disparo, tanque;
    var statusFirst = {   
        preload:()=> {
            // CARGA TODO LOS RECURSOS
            Game.stage.backgroundColor = "#0075ea";
            Game.scale.pageAlignHorizontally = true;
            Game.scale.pageAlignVertically = true;
        },
        create:()=>{
            // MOSTRSR EN PANTALLA 
          /*  tanque ={cuerpoTanque=cuerpo,
            cañonTanque= cañon}*/;  
            cañon=Game.add.graphics(0,0);
            cañon.beginFill(0xc5c5c5c5);
            cañon.lineStyle(10,0Xc0c0c0,2);
            cañon.drawRect(60,390.5 , 130,20);
            cañon.moveTo(50,50)
            cañon.endFill();

            cuerpo = Game.add.graphics(0,0);
            cuerpo.beginFill(0xc5c5c5);
            cuerpo.lineStyle(10,0Xc0c0c0,2);
            cuerpo.drawRect(40,380, 50,50);
            cuerpo.drawRect(1,430, 130,50);
            cuerpo.endFill();
            
            // mover el tanque
            derecha = Game.input.keyboard.createCursorKeys();   
            izquierda = Game.input.keyboard.createCursorKeys();
            arriba = Game.input.keyboard.createCursorKeys();
            abajo = Game.input.keyboard.createCursorKeys();
            // limintes del carco en canvas
            Game.physics.startSystem(Phaser.Physics.ARCADE);
            Game.physics.arcade.enable(cuerpo);
            Game.physics.arcade.enable(cañon);
            cañon.body.collideWorldBounds =true;
            // cañon.anchor.setTo(1);
            
            cuerpo.body.collideWorldBounds =true;
           },
        update:()=>{
            // animación del juego;
           if (derecha.right.isDown) {cañon.position.x +=3; cuerpo.position.x +=3}
           if (izquierda.left.isDown) {cañon.position.x -=3; cuerpo.position.x -=3}
           if (arriba.up.isDown) cañon.angle -=0.25;
           if (arriba.down.isDown) cañon.angle +=0.25;
        }
    }; 
Game.state.add('firts', statusFirst);
Game.state.start('firts');
