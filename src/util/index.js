const moment = require('moment');
const STATUS = 'status';
const ID = 'id';
const CREATED_DATE_TIME = 'createdDateTime';

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
    const currentDateTime = moment(new Date()).format('DD/MM/YY HH:mm:ss')
    return currentDateTime;
}

const uuidv4 = () => {
    let d = new Date().getTime();
    if(Date.now){
        d = Date.now(); //high-precision timer
    }
    let uuid = 'xxxxyxxxxyyxxxyyxxxyxxxx'.replace(/[xy]/g, function(c) {
        let r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

const setProjectStatus = (data, status) =>{
    switch(status){
        case 'OPEN' :
            data[STATUS] = 'OPEN'
        case 'IN-PROGRESS' :
            data[STATUS] = 'IN-PROGRESS'
        case 'CANCELLED' :
            data[STATUS] = 'CANCELLED'
        case 'OPEN_FOR_BIDDING' :
            data[STATUS] = 'OPEN_FOR_BIDDING'
        case 'CLOSED_FOR_BIDDING' :
            data[STATUS] = 'CLOSED_FOR_BIDDING'
        case 'COMPLETED' :
            data[STATUS] = 'COMPLETED'
    }
    return;
}

const setGUID = (data) => {
    data[ID] = uuidv4();
}

const setDateTime = ( data ) => {
    data[CREATED_DATE_TIME] = getCurrentDateTime();
}

module.exports = {
    setDateTime, setProjectStatus, setGUID
}
