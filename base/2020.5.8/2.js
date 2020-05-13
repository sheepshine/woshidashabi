function Player(name, teamColor) {
    this.state = 'live'
    this.name = name
    this.teamColor = teamColor
}

Player.prototype.win = function () {
    console.log('winner:' + this.name)
}

Player.prototype.lose = function () {
    console.log('loser:' + this.name)
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

const playerFactory = function (name, teamColor) {
    var newPlayer = new Player(name, teamColor); // 创造一个新的玩家对象
    playerDirector.reciveMessage('addPlayer', newPlayer); // 给中介者发送消息，新增玩家
    return newPlayer;
};

var playerDirector = (function () {
    var players = {}, // 保存所有玩家
        operations = {}; // 中介者可以执行的操作
    /****************新增一个玩家***************************/
    operations.addPlayer = function (player) {
        var teamColor = player.teamColor; // 玩家的队伍颜色
        players[teamColor] = players[teamColor] || []; // 如果该颜色的玩家还没有成立队伍，则
        新成立一个队伍
        players[teamColor].push(player); // 添加玩家进队伍
    };
    /****************移除一个玩家***************************/
    operations.removePlayer = function (player) {
        var teamColor = player.teamColor, // 玩家的队伍颜色
            teamPlayers = players[teamColor] || []; // 该队伍所有成员
        for (var i = teamPlayers.length - 1; i >= 0; i--) { // 遍历删除
            图灵社区会员 轩辕 专享 尊重版权
            14.2 中介者模式的例子—— 泡泡堂游戏 197
            1
            2
            3
            4
            5
            13
            6
            7
            8
            9
            10
            11
            if (teamPlayers[i] === player) {
                teamPlayers.splice(i, 1);
            }
        }
    };
    
    operations.changeTeam = function (player, newTeamColor) {
        operations.removePlayer(player);
        player.teamColor = newTeamColor;
        operations.addPlayer(player);
    };
    operations.playerDead = function (player) {
        var teamColor = player.teamColor,
            teamPlayers = players[teamColor];
        var all_dead = true;
        for (var i = 0, player; player = teamPlayers[i++];) {
            if (player.state !== 'dead') {
                all_dead = false;
                break;
            }
        }
        if (all_dead === true) {
            for (var i = 0, player; player = teamPlayers[i++];) {
                player.lose();
            }
            for (var color in players) {
                if (color !== teamColor) {
                    var teamPlayers = players[color];
                    for (var i = 0, player; player = teamPlayers[i++];) {
                        player.win();
                    }
                }
            }
        }
    };
    var reciveMessage = function () {
        var message = Array.prototype.shift.call(arguments);
        operations[message].apply(this, arguments);
    };
    return {
        reciveMessage: reciveMessage
    }
})();