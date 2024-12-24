class Transport {
  constructor(type, price, brand){
      this.type = type;
      this.price = price;
      this.brand = brand;
  }
  getInfo() {
      return `Type: ${this.type}, Brand: ${this.brand}, Price: ${this.price}`;
  } 
  getPrice() {
      return this.price;
  }
};

class Car extends Transport {
  constructor(type, price, brand, door) {
      super(type, price, brand);
      this.door = door;
  } 
  getDoorsCount() {
      return this.door;
  }

};

class Bike extends Transport {
  constructor(type, price, brand, speed) {
      super(type, price, brand);
      this.speed = speed;
  }
  getMaxSpeed() {
      return this.speed;
  }
}

const data = [
{
  id: 1,
  type: 'car',
  brand: 'Audi',
  doors: 4,
  price: 4300000,
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg'
},
{
  id: 2,
  type: 'car',
  brand: 'Mercedes-Benz',
  doors: 4,
  price: 2800000,
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg'
},
{
  id: 3,
  type: 'bike',
  brand: 'Harley-Davidson',
  maxSpeed: 210,
  price: 1300000,
  image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Harley-Davidson_Road_King_in_Switzerland_%282022%29.jpg/640px-Harley-Davidson_Road_King_in_Switzerland_%282022%29.jpg'
  
},
{
  id: 4,
  type: 'bike',
  brand: 'Harley-Davidson',
  maxSpeed: 220,
  price: 1400000,
  image: 'https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png'
}
];

const container = document.querySelector('#vehicles-container')

const transportObjects = data.map(item => {
  if (item.type === 'car') {
      return new Car(item.type, item.price, item.brand, item.doors);
  } else if (item.type === 'bike') {
      return new Bike(item.type, item.price, item.brand, item.maxSpeed);
  }
});

transportObjects.forEach((obj, index) => {
  const newDiv = document.createElement('div');
  newDiv.innerHTML = `
      <img src="${data[index].image}" alt="${obj.brand}">
      <h2>${obj.brand}</h2>
      <p>Type: ${obj.type}</p>
      <p>Price: ${obj.price}</p>
      ${obj instanceof Car ? `<p>Doors: ${obj.getDoorsCount()}</p>` : `<p>Max Speed: ${obj.getMaxSpeed()} km/h</p>`}
  `;
  container.appendChild(newDiv);
});