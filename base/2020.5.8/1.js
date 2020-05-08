const players = []

function Player (name, teamColor) {
    this.partners = []
    this.enemies = []
    this.state = 'live'
    this.name = name
    this.teamColor = teamColor
}

Player.prototype.win = function () {
    console.log('winner:' + this.name )
}

Player.prototype.lose = function () {
    console.log('loser:' + this.name )
}

Player.prototype.die = function () {
    let all_dead = true
    this.state = 'dead'

    for (let i = 0; i < this.partners.length; i++) {
        if (this.partners[i].state !== 'dead') {
            all_dead = false
            break
        }
    }

    if (all_dead === true) {
        this.lose()
        for(let i = 0; i < this.partners.length; i++) {
            this.partners[i].lose()
        }
        for(let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].win()
        }
    }
}

const playerFactory = function (name, teamColor) {
    const newPlayer = new Player(name, teamColor)
    for (let i = 0; i < players.length; i++) {
        if (players[i].teamColor === newPlayer.teamColor) {
            players[i].partners.push(newPlayer)
            newPlayer.partners.push(players[i])
        } else {
            players[i].enemies.push( newPlayer )
            newPlayer.enemies.push(players[i])
        }
    }
    players.push(newPlayer)
    return newPlayer
}

const player1 = playerFactory( '皮蛋', 'red' ), 
player2 = playerFactory( '小乖', 'red' ), 
player3 = playerFactory( '宝宝', 'red' ), 
player4 = playerFactory( '小强', 'red' ); 

const player5 = playerFactory( '黑妞', 'blue' ), 
player6 = playerFactory( '葱头', 'blue' ), 
player7 = playerFactory( '胖墩', 'blue' ), 
player8 = playerFactory( '海盗', 'blue' );

player1.die(); 
player2.die(); 
player4.die(); 
player3.die();