
function Game() {
    this.users = [];
    this.board = {};

    this.extend(newgame);
}

Game.prototype = {
    extend: function (props) {
        for(var attr in props) {
            if (props.hasOwnProperty(attr)) {
                this[attr] = props[attr];
            }
        }
    },

   unextend: function (props) {
        for(var attr in props) {
            if (props.hasOwnProperty(attr)) {
                delete this[attr];
            }
        }
   } 
};

var newgame = {
    state: 'new',

    connect: function(user) {
        this.users.push(user);
    },

    start: function () {
        if(this.users.length < 2) {
            throw new Error("not enough players");
        }

        this.unextend(newgame);
        this.extend(playing);
    }
};

var playing = {
    state: 'playing'
};

exports.Game = Game;
