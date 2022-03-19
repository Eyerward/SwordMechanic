


class Tab extends Phaser.scene {

    preload() {
        this.load.image('body', 'asset/square.png');
        this.load.image('sword', 'asset/sword.png');
    }

    create() {
        this.hauteur = 720;
        this.largeur = 1280;

        this.warrior = this.add.container(0, 0);

        let knight = this.physics.add.sprite(0, 300, 'body', 1).setOrigin(0, 0);
        knight.setDisplaySize(150, 400);
        knight.setTintFill(0x0f00ff);
        knight.body.setAllowGravity(false);
        knight.setImmovable(true);
        this.warrior.add(knight);

        let sword = this.physics.add.sprite(100, 100, 'sword', 1).setOrigin(0, 0);
        sword.setScale(0.5);
        sword.body.setAllowGravity(false);
        sword.setImmovable(true);
        this.warrior.add(sword);

        this.target = this.physics.add.image(1000, 300, 'body').setOrigin(0, 0);
        this.target.body.setAllowGravity(false);
        this.target.setImmovable(true);


        this.intitKeyboard();


    }

    intitKeyboard() {
        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.warrior.body.setVelocityY(100);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.warrior.body.setVelocityY(-100);
                    break;
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.A:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.gauche.body.setVelocityY(0);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                case Phaser.Input.Keyboard.KeyCodes.M:
                    me.droite.body.setVelocityY(0);
                    break;
            }
        });
    }

    disparait(obstacle) {

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);
        obstacle.ombre.setVisible(false);
    }

    update()
    {


    }


}

