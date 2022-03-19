
class Tableau1 extends Phaser.Scene {

    preload() {
        this.load.image('body', 'asset/square.png');
        this.load.image('sword', 'asset/sword.png');
    }


    create() {
        this.hauteur = 720;
        this.largeur = 1280;

        this.warrior = this.add.container(0, 0);

        this.knight = this.physics.add.sprite(0, 300, 'body', 1).setOrigin(0, 0);
        this.knight.setDisplaySize(150, 400);
        this.knight.setTintFill(0x0f00ff);
        this.knight.body.setAllowGravity(false);
        this.knight.setImmovable(true);
        this.warrior.add(this.knight);

        this.sword = this.physics.add.image(100, 100, 'sword').setOrigin(0, 0);
        this.sword.setScale(0.5);
        this.sword.body.setAllowGravity(false);
        this.sword.setImmovable(true);
        this.sword.body.setVelocityX(0);
        this.warrior.add(this.sword);

        this.target = this.physics.add.image(1000, 300, 'body').setOrigin(0, 0);
        this.target.body.setAllowGravity(false);
        this.target.setImmovable(true);


        let me = this;

        this.input.keyboard.on('keydown', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.warrior.body.setVelocityX(100);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.warrior.body.setVelocityX(-100);
                    break;
            }
        });
        this.input.keyboard.on('keyup', function (kevent) {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.warrior.body.setVelocityX(0);
                    break;
            }
        });

    }

    initKeyboard()
     {
        let me = this;

        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.D:
                    me.sword.body.setVelocityX(100);
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.sword.body.setVelocityX(-100);
                    break;
            }
        });
        this.input.keyboard.on('keyup', function(kevent)
        {
            switch (kevent.keyCode) {
                case Phaser.Input.Keyboard.KeyCodes.D:
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    me.sword.body.setVelocityX(0);
                    break;
            }
        });
    }

    disparait(obstacle){

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);
        obstacle.ombre.setVisible(false);
    }


    update() {
    }


}
