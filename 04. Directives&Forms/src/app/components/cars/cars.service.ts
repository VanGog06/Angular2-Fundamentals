import { Injectable } from "@angular/core";
import { CarsDataInfo } from "./cars.data.info";

let cars = [
  {
    id: 1,
    make: 'Opel',
    model: 'Vectra',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '1',
      name: 'Hasan',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 1,
    description: 'This ia a very fast car.',
    price: 3000,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 2,
    make: 'Opel',
    model: 'Astra',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '2',
      name: 'Stamat',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 6,
    description: 'This ia a very fast car.',
    price: 5000,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 3,
    make: 'Fiat',
    model: 'Fiat',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '1',
      name: 'Hasan',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 4,
    description: 'This ia a very fast car.',
    price: 1200,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 4,
    make: 'Opel',
    model: 'Opel',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '2',
      name: 'Stamat',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 2,
    description: 'This ia a very fast car.',
    price: 200,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 5,
    make: 'Lada',
    model: 'Lada',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '3',
      name: 'Pesho',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 15,
    description: 'This ia a very fast car.',
    price: 3589,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 6,
    make: 'Jigula',
    model: 'Jigula',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '4',
      name: 'Gosho',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 3,
    description: 'This ia a very fast car.',
    price: 9999,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 7,
    make: 'BMW',
    model: 'BMW',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '1',
      name: 'Hasan',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 4,
    description: 'This ia a very fast car.',
    price: 6541,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 8,
    make: 'Mercedes',
    model: 'Mercedes',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '2',
      name: 'Stamat',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 8,
    description: 'This ia a very fast car.',
    price: 1200,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 9,
    make: 'Peugeot',
    model: 'Peugeot',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '3',
      name: 'Pesho',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 5,
    description: 'This ia a very fast car.',
    price: 120,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 10,
    make: 'Nissan',
    model: 'Nissan',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '4',
      name: 'Gosho',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 40,
    description: 'This ia a very fast car.',
    price: 6000,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 11,
    make: 'Tesla',
    model: 'Tesla',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '2',
      name: 'Stamat',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 24,
    description: 'This ia a very fast car.',
    price: 30000,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 12,
    make: 'Kia',
    model: 'Kia',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '3',
      name: 'Pesho',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 2,
    description: 'This ia a very fast car.',
    price: 12000,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 13,
    make: 'VW',
    model: 'VW',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '4',
      name: 'Gosho',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 6,
    description: 'This ia a very fast car.',
    price: 3500,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 14,
    make: 'Porsche',
    model: 'Porsche',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '1',
      name: 'Hasan',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 8,
    description: 'This ia a very fast car.',
    price: 10000,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
  {
    id: 15,
    make: 'Opel',
    model: 'Astra',
    image: 'https://static.pexels.com/photos/50704/car-race-ferrari-racing-car-pirelli-50704.jpeg',
    owner: {
      id: '5',
      name: 'Gichka',
      image: 'http://www.michaelemerson.net/wp-content/uploads/2012/08/michael_emerson.png'
    },
    date: Date.now() + 3,
    description: 'This ia a very fast car.',
    price: 5000,
    engine: 'Mnou qk',
    comments: [
      {
        id: 1,
        owner: 'Bai Petko',
        message: 'Mega burzata brat'
      },
      {
        id: 2,
        owner: 'Stamat',
        message: 'Ne me kefi men!'
      }
    ]
  },
];

@Injectable()
export class CarsService {
  getCarsData(): Promise<CarsDataInfo[]> {
    return new Promise((resolve, reject) => {
      resolve(cars);
    })
  }

  addCar(car) {
    cars.push(car);
  }

  editCar(newCar) {
    cars = cars.filter(car => {
      return Number(car.id) !== Number(newCar.id);
    });

    cars.push(newCar);
  }
}
