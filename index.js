const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (){
 
  return drivers.slice (0, 2);

}

const returnLastTwoDrivers = function (){
  return drivers.slice (-2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (myMultiplier) {
  return function (value) {
    return myMultiplier * value;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnMyDrivers) {
  return returnMyDrivers(drivers);
};

