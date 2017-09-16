import { initialState } from './animals.state';

import { ADD_ANIMAL } from './animals.actions';
import { ALL_ANIMALS } from './animals.actions';
import { ANIMAL_DETAILS } from './animals.actions';
import { ANIMAL_REACT } from './animals.actions';
import { CREATE_COMMENT } from './animals.actions';
import { ALL_COMMENTS } from './animals.actions';
import { MINE_ANIMALS } from './animals.actions'
import { DELETE_ANIMAL } from './animals.actions';

function addAnimal(state, action) {
  const result = action.result;

  return Object.assign({}, state, {
    animalAdded: result.success,
    animalAddedId: result.success ? result.animal.id : null
  });
}

function allAnimals(state, action) {
  return Object.assign({}, state, {
    allAnimals: action.animals
  });
}

function animalDetails(state, action) {
  return Object.assign({}, state, {
    animalDetails: action.animal,
    reactions: action.animal.reactions
  });
}

function animalReaction(state, action) {
  const result = action.result;

  if (result.success) {
    let reaction = action.reaction.type;
    let reactions = Object.assign({}, state.animalDetails.reactions);
    reactions[reaction] = reactions[reaction] + 1;

    let animal = Object.assign({}, state.animalDetails, {
      reactions: reactions
    });

    return Object.assign({}, state, {
      animalDetails: animal
    })
  }

  return state;
}

function createComment(state, action) {
  const result = action.result;

  if (result.success) {
    const user = action.username;

    const comment = {
      user: user,
      message: action.comment.message
    };

    const comments = state.animalComments;

    return Object.assign({}, state, {
      animalComments: [...comments, comment]
    });
  }

  return state;
}

function allComments(state, action) {
  return Object.assign({}, state, {
    animalComments: action.comments
  });
}

function myAnimals(state, action) {
  return Object.assign({}, state, {
    myAnimals: action.animals
  });
}

function deleteAnimal(state, action) {
  const result = action.result;

  if (result.success) {
    const id = action.id;
    const animalIndex = state.myAnimals.findIndex(a => a.id === id);

    if (animalIndex >= 0) {
      const myAnimals = state.myAnimals.slice(0);
      myAnimals.splice(animalIndex, 1);

      return Object.assign({}, state, {
        myAnimals
      })
    }
  }

  return state;
}

export function animalsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_ANIMAL:
      return addAnimal(state, action);
    case ALL_ANIMALS:
      return allAnimals(state, action);
    case ANIMAL_DETAILS:
      return animalDetails(state, action);
    case ANIMAL_REACT:
      return animalReaction(state, action);
    case CREATE_COMMENT:
      return createComment(state, action);
    case ALL_COMMENTS:
      return allComments(state, action);
    case MINE_ANIMALS:
      return myAnimals(state, action);
    case DELETE_ANIMAL:
      return deleteAnimal(state, action);
    default:
      return state;
  }
}
