import Images from '@assets/images';

const { usd, gbp, eur, yen } = Images;

export const getLocationId = (locationsArray, locationName) => {
  const availableNames = locationsArray.map((location) => location.name);
  const nameIsValid = availableNames.includes(locationName);
  return nameIsValid ?
    locationsArray.find((location) => locationName === location.name).id :
    'Location not available';
};

export const sortRatesByDate = (rawData) => {
  if(!!rawData) {
    const mapDataByDate = rawData.reduce((acc, curr) => {
      if(!acc.hasOwnProperty(curr.date)) {
        acc[curr.date] = [curr];
      } else {
        for (let prop in acc) {
          if(prop === curr.date) {
            acc[prop] = acc[prop].concat(curr);
          }
        }
      }
      return acc;
    }, {});
    return Object.values(mapDataByDate);
  }
  return null;
};

export const getImageFromCurrency = (currency) => {
  let returnedImage;
  switch(currency) {
    case 'USD':
      returnedImage = usd;
      break;
    case 'GBP':
      returnedImage = gbp;
      break;
    case 'YEN':
      returnedImage = yen;
      break;
    case 'EUR':
      returnedImage = eur;
      break;
  }
  return returnedImage;
};

export const sortTodayRates = (data) => {
  const ratesArr = data.todaysRates;
  return ratesArr.reduce((acc, curr) => {
    const accItem = {};
    const timeofDay = curr.periodOfTheDay;
    const currLocation = curr.location.name;
    if (currLocation in acc) {
      if (timeofDay in acc[currLocation]) {
        acc[currLocation][timeofDay].push(curr);
      }
      else {
        accItem[timeofDay] = [curr];
        acc[currLocation][timeofDay] = accItem;
      }
    }
    else {
      accItem[timeofDay] = [curr];
      acc[currLocation] = accItem;
    }
    return acc;
  }, {});
};
