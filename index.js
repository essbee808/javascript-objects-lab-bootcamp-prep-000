var recipes = {};
var obj = {
  prop: 1,
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({ prop2: 2 }, obj);
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
