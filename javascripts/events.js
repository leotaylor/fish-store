// Filter fish that are "on sale"

const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle();
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All Fish';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  // console.log(fishCard);
  $('#snagged').append(fishCard);
  $(e.target).text('Remove from Cart').removeClass('add').addClass('remove');
  // $(e.target).on('click', removeFromCart);
};

// Remove fish from "Basket"
const removeFromCart = (e) => {
  const fishCard = $(e.target).closest('.fish'); // finds closest parent of the button that is clicked
  $('#available').append(fishCard);
  $(e.target).text('Add to Cart').removeClass('remove').addClass('add');
  // $(e.target).on('click', moveToCart);
};

const bindEvents = () => {
  $('body').on('click', '.remove', removeFromCart);
  $('body').on('click', '.add', moveToCart);
  // $('button.add').on('click', moveToCart);
  $('#show-sale').click(() => {
    changeButtonText();
    filterFish();
  });
};

module.exports = bindEvents;
