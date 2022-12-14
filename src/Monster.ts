import Fighter, { SimpleFighter } from './Fighter';

class Monster {
  protected _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public get lifePoints(): number { return this._lifePoints; }
  public get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._lifePoints;

    if (damage > 0) this._lifePoints -= damage;

    if (this._lifePoints <= 0) this._lifePoints = 1;

    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    if (enemy) enemy.receiveDamage(this._strength);
  }
}

export default Monster;