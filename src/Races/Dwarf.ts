import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdRacesInstances = 0;

  constructor(name: string, dexteriry: number) {
    super(name, dexteriry);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;    
  }
}

export default Dwarf;