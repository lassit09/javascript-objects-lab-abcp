var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({recipes}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes.object = {[key]: value};
  return object;
}
