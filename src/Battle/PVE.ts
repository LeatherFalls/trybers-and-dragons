import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  constructor(player: Fighter, private monsters: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    this.monsters.forEach((monster) => {
      this.player.attack(monster);
      monster.attack(this.player);
    });

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVE;