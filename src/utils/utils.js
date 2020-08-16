import checkPropTypes from 'check-prop-types';

const deleteUndefinedValuesFromObject = (obj) => {
  for (var propName in obj) {
    if (obj[propName] === null || obj[propName] === undefined) {
      delete obj[propName];
    }
  }
};

const transformObjectIntoArray = (obj) => {
  return Object.values(obj).map((item) => ({
    name: item,
    id: Date.now() + Math.floor(Math.random() * 1000),
  }));
};

const generateRandomId = () => Date.now() + Math.floor(Math.random() * 1000);

const checkProps = (component, expectedProps, propTypes) => {
  const propsErr = checkPropTypes(
    propTypes,
    expectedProps,
    'props',
    component.name
  );
  return propsErr;
};

export {
  deleteUndefinedValuesFromObject,
  transformObjectIntoArray,
  generateRandomId,
  checkProps,
};
