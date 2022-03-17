let gameConfig = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 200},
            debug: true,
        },
    },
    scene: {
        preload,
        create,
        update,
    },
};
const game = new Phaser.Game(gameConfig);

    function preload()
    {
        this.load.image('body','asset/square.png');
        this.load.image('sword','asset/sword.png');
    }
    function create()
    {
        this.hauteur = 720;
        this.largeur = 1280;

        this.warrior = this.add.container

        this.knight = this.physics.add.image(0,300,'body').setOrigin(0,0);
        this.knight.setDisplaySize(150,400);
        this.knight.setTintFill(0x0f00ff);
        this.knight.body.setAllowGravity(false);
        this.knight.setImmovable(true);

        this.sword = this.physics.add.image(200,100,'sword').setOrigin(0,0);
        this.sword.setScale(0.5);
        this.sword.body.setAllowGravity(false);
        this.sword.setImmovable(true);

        this.target = this.physics.add.image(1000, 300, 'body').setOrigin(0,0);
        this.target.body.setAllowGravity(false);
        this.target.setImmovable(true);

    }

    function disparait(obstacle){

        obstacle.body.setEnable(false);
        obstacle.setVisible(false);
        obstacle.ombre.setVisible(false);
    }

    function update()
    {}

