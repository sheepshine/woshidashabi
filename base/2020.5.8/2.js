function Player (name, teamColor) {
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
    this.state = 'dead'
    playerDirector.reciveMessage('playerDead', this)
}

Player.prototype.remove = function () {
    this.state = 'dead'
    playerDirector.reciveMessage('removePlayer', this)
}

Player.prototype.changeTeam = function (color) {
    this.state = 'dead'
    playerDirector.reciveMessage('changeTeam', this, color)
}