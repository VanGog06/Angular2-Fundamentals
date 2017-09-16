export interface IAnimalState {
  animalAdded: boolean,
  animalAddedId: number,
  allAnimals: Array<object>,
  animalDetails: object,
  animalComments: Array<object>,
  myAnimals: Array<object>
}

export const initialState: IAnimalState = {
  animalAdded: false,
  animalAddedId: null,
  allAnimals: [],
  animalDetails: {},
  animalComments: [],
  myAnimals: []
};
