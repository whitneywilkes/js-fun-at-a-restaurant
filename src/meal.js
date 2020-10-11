function nameMenuItem(addedAttributeOf) {
return "Delicious " + addedAttributeOf
};

function createMenuItem(name, price, type) {
  return {
  name: name,
  price: price,
  type: type
  };
};

// Would I ever utilize undefined or null here
// versus an empty string if the parameters were
// not defined in the test?

//function createMenuItem(name, price, type) {
  // name: demoProject,
  // price: null,
  // type: microSpikes
  // };

  // For example ^
  // Would this ever be something that we would see
  // or use? I was reading up on null as I thought we
  // could actually utilize it to hold a place but it
  // seems like I had the two mixed up a bit. From my
  // understanding, I could use undefined if I didn't yet
  // have a value for something and needed a placeholder;
  // I was understanding null to be defined as such.
  // it seems like this could cause  potential issues with
  // knowing if that _undefined_ was put there or correctly
  // returned from the code when working in team settings.
  // I hope this question makes sense; it's late and
  // I'm getting overly curious about when we would want
  // to use null. Back to the basics!

function addIngredients(addIns, ingredients) {
  if (ingredients.includes(addIns)) {
    return addIngredients
  } else {
    return(ingredients.push(addIns))
  };
};

function formatPrice(initialPrice) {
  return("$" + initialPrice)
};

function decreasePrice(price) {
return(price - (price / 10))
};

function createRecipe(menuItemTitle, menuItemIngredients, menuItemType) {
    var recipe = {
      title: menuItemTitle,
      ingredients: menuItemIngredients,
      type: menuItemType
    };
  return recipe
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
