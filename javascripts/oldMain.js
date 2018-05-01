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

$('#show-sale').click(() => {
  changeButtonText();
  filterFish();
});

// Add fish to "Basket"
const moveToCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  // console.log(fishCard);
  $('#snagged').append(fishCard);
};

$('button.add').click(moveToCart);