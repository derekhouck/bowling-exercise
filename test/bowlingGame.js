import { expect } from 'chai';

class BowlingGame {
  constructor() {
    this.max = 3;
    this.turn = [];
    // this.rolls = totalPins;
    this.rolls = 0;
  }


  sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  /**
   * @param {Number} pins The number of pins knocked down in a roll
   * @returns {null}
   */

  roll(pins) {
    this.turn.push(pins);
    console.log("Rolls Array" + this.turn);
    return this.turn;
    // const sumArrayWithReduce = turnArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  }

  /**
   * @returns {Number} The total score for the game at that point
  */
 score() {
    return this.rolls = this.sum(this.turn)

  }
}

describe('BowlingGame', () => {
  describe('simple scoring', () => {
    it('should return the correct score after several rolls', () => {
      const game = new BowlingGame();

      game.roll(2); // 2
      game.roll(3); // 5

      expect(game.score()).to.eq(5)
    });

    it('should handle rolls with no pins knocked down', () => {
      const game = new BowlingGame();

      game.roll(6); // 6
      game.roll(0); // 6

      expect(game.score()).to.eq(6);
    })

    it('should return 0 at the start of the game', () => {
      const game = new BowlingGame();

      expect(game.score()).to.eq(0);
    });
  });

  describe('spares', () => {
    it('should add 10 to the next roll after a spare', () => {
      const game = new BowlingGame();

      game.roll(4); // 4
      game.roll(6); // spare
      game.roll(3); // 16 (10 + 3, 3)

      expect(game.score()).to.eq(16);
    })

    // it('can handle multiple spares in a row', () => {
    //   const game = new BowlingGame();

    //   game.roll(7); // 7
    //   game.roll(3); // spare
    //   game.roll(4); // 18, (10 + 4, 4)
    //   game.roll(6); // spare
    //   game.roll(7); // 38 (10 + 4, 10 + 7, 7)

    //   expect(game.score()).to.eq(38);
    // });
  });

  // describe('strikes', () => {
  //   it('should add 10 to the next two rolls after a strike', () => {
  //     const game = new BowlingGame();

  //     game.roll(10); // strike
  //     game.roll(2); // 14, (10 + 2, 2)
  //     game.roll(4); // 32, (14, 10 + 4, 4)

  //     expect(game.score()).to.eq(32);
  //   })

  //   it('can handle multiple strikes in a row', () => {
  //     const game = new BowlingGame();

  //     game.roll(10); // strike
  //     game.roll(10); // strike, (10 + 10)
  //     game.roll(10); // strike, (10 + 10, 10 + 10)
  //     game.roll(3); // 69, (30, 20 + 3, 10 + 3, 3)
  //     game.roll(2); // 73, (30, 23, 13 + 2, 3, 2)

  //     expect(game.score()).to.eq(73);
  //   });
  // });
});
