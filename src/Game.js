let gameConfig = {
    type: Phaser.AUTO,
    width: 500,
    height: 500,
    backgroundColor: '#000000',
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new Tableau()
};
let game = new Phaser.Game(gameConfig);

class Tableau extends Phaser.scene{

    preload()
    {
        this.load.image('body','asset/square.png');
        this.load.image('sword','asset/sword.png');
    }
    create()
    {

    }
    update()
    {}
}