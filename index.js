var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes.assign(object, {[key]: value});
}
