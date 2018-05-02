const loadFishes = require('./fishes');
const writeFishes = require('./fishDom');

const whenFishesLoad = (data) => {
  console.log('data:', data);
  $('#available').append(writeFishes(data.fishes));
};

const whenFishesDontLoad = (error) => {
  console.error('fail');
};

const initializer = () => {
  loadFishes(whenFishesLoad, whenFishesDontLoad);
};

module.exports = initializer;
