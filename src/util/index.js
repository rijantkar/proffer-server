const moment = require('moment');

const deepClone = (object) => {
    let newObject = {};
    for(var key in object){
        if(typeof object[key] === 'object'  && object[key] !== null ){
            newObject[key] = deepClone(object[key]);
        }else{
            newObject[key] = object[key];
        }
    }
    return newObject;
}

const getCurrentDateTime = () => {
    const currentDateTime = moment(new Date()).format('DD/MM/YY HH:mm')
    return currentDateTime;
}

module.exports = {
    getCurrentDateTime
}