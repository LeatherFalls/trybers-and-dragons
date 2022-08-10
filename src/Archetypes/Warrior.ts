import { EnergyType } from '../Energy';

import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances(): number {
    this._createdArchetypeInstances += 1;
    return this._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType; 
  }
}

export default Warrior;