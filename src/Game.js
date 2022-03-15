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
        this.body=this.add.image(250,250,'body').setOrigin(0,0);
        this.body.setDisplaySize(100,250);

        this.sword=this.add.image(250,250,'sword').setOrigin(0,0);

    }
    function update()
    {}

