var Game = require('../src/app/game').Game;

describe('game', function () {
    var game;

    beforeEach(function () {
        game = new Game();
    });

    it('contains the users', function () {
        game.should.have.property('users');
    });

    it('contains the board', function () {
        game.should.have.property('board');
    });

    it('contains the current games state', function (){
        game.should.have.property('state');
    });

    describe('creating a game', function () {
        it('has a state of new', function () {
            game.state.should.equal('new');
        });

        it('allows players to connect', function (){
            game.connect({});
            game.users.length.should.equal(1);
        });  

        it('allows duplicate players', function () {
            var player = {};
            game.connect(player);
            game.connect(player);

            game.users.length.should.equal(2);
        });

        it('requires at least 2 players to start', function () {
            (function () {
                game.start();
            }).should.throw();
        });

        it('changes to a playing state when started', function () {
            var player = {};
            game.connect(player);
            game.connect(player);
            game.start();

            game.state.should.equal('playing');
        });
    });

    describe('when playing', function () {
        beforeEach(function () {
            game.connect({});
            game.connect({});
            game.start();
        });
    });
});
