import Images from '@assets/images';

const { usd, gbp, eur, yen } = Images;

export const findLocationById = (locationsArray, locationId) => {
  return locationsArray.find((location) => locationId === location.Id);
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
