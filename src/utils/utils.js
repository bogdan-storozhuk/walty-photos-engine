const deleteUndefinedValuesFromObject = (obj) => {
    for (var propName in obj) { 
        if (obj[propName] === null || obj[propName] === undefined) {
          delete obj[propName];
        }
      }
}
const transformObjectIntoArray = (obj) =>{
    return Object.values(obj).map((item) => 
    {
        return {
            name: item,
            id: Date.now()+Math.floor(Math.random()*1000)
        }
    });
}
export {deleteUndefinedValuesFromObject,
        transformObjectIntoArray}