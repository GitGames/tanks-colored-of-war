


    var Game = new Phaser.Game(900, 500, Phaser.AUTO, 'blockGame');
    var statusFirst = {   
        preload:()=> {
            // CARGA TODO LOS RECURSOS
            Game.stage.backgroundColor = "#0075ea";
            Game.scale.pageAlignHorizontally = true;Game.scale.pageAlignVertically = true;
        },
        create:()=>{
            // MOSTRSR EN PANTALLA
            var cuadrado = Game.add.graphics(10,10);
            cuadrado.beginFill(0xc5c5c5);
            // cuadrado.lineStyle(10,0Xc0c0c0,2)
            // cuadrado.drawRect(1,390, 90,90)
            cuadrado.drawRect(4,200, 40,40)
            cuadrado.endFill();
        },
        update:()=>{
            // animación del juego
        }

    };
Game.state.add('firts', statusFirst);
Game.state.start('firts');
