import { initialState } from './cars.state';

import { ADD_CAR } from './cars.actions';
import { ALL_CARS } from './cars.actions';
import { CARS_DETAILS } from './cars.actions';
import { CARS_LIKE } from './cars.actions';
import { CAR_ADD_REVIEW } from './cars.actions';
import { ALL_REVIEWS } from './cars.actions';
import { CAR_DELETE } from './cars.actions';
import { MINE_CARS } from './cars.actions';

function addCar(state, action) {
  const result = action.result;

  return Object.assign({}, state, {
    carAdded: result.success,
    carAddedId: result.success ? result.car.id : null
  });
}

function allCars(state, action) {
  return Object.assign({}, state, {
    allCars: action.cars
  });
}

function details(state, action) {
  return Object.assign({}, state, {
    carDetails: action.car
  });
}

function carLike(state, action) {
  if (action.result.success) {
    const currentCarLikes = state.carDetails.likes;
    const carDetails = Object.assign({}, state.carDetails, {
      likes: currentCarLikes + 1
    });

    return Object.assign({}, state, {
      carDetails
    });
  }

  return state;
}

function addReview(state, action) {
  const result = action.result;

  if (result.success) {
    const review = result.review;
    const carReviews = state.carReviews;

    return Object.assign({}, state, {
      carReviews: [...carReviews, review]
    })
  }

  return state;
}

function allReviews(state, action) {
  return Object.assign({}, state, {
    carReviews: action.carReviews
  });
}

function mineCars(state, action) {
  return Object.assign({}, state, {
    myCars: action.cars
  });
}

function deleteCar(state, action) {
  const result = action.result;

  if (result.success) {
    const id = action.id;
    const carIndex = state.myCars.findIndex(c => c.id === id);

    if (carIndex >= 0) {
      const myCars = state.myCars.slice(0);
      myCars.splice(carIndex, 1);

      return Object.assign({}, state, {
        myCars
      });
    }

    return state;
  }
}

export function carsReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CAR:
      return addCar(state, action);
    case ALL_CARS:
      return allCars(state, action);
    case CARS_DETAILS:
      return details(state, action);
    case CARS_LIKE:
      return carLike(state, action);
    case CAR_ADD_REVIEW:
      return addReview(state, action);
    case ALL_REVIEWS:
      return allReviews(state, action);
    case CAR_DELETE:
      return deleteCar(state, action);
    case MINE_CARS:
      return mineCars(state, action);
    default:
      return state;
  }
}
