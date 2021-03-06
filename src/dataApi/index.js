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
        acc[currLocation][timeofDay] = stripCurrencyToOneInstance(acc[currLocation][timeofDay]);
      }
      else {
        accItem[timeofDay] = [curr];
        acc[currLocation][timeofDay] = accItem[timeofDay];
      }
    }
    else {
      accItem[timeofDay] = [curr];
      acc[currLocation] = accItem;
    }
    return acc;
  }, {});
};

export const restructureRates = (dateRates) => {
  const morningRates = dateRates.filter((rates) => rates.periodOfTheDay === 'MORNING');
  const afternoonRates = dateRates.filter((rates) => rates.periodOfTheDay === 'AFTERNOON');
  const eveningRates = dateRates.filter((rates) => rates.periodOfTheDay === 'EVENING');
  const restructuredRates = [...eveningRates, ...afternoonRates, ...morningRates];
  return restructuredRates;
};

export const conversionRate = (todaysRates, inputCurrency, rateToUse) => {
  const rateItem = !!todaysRates && todaysRates.find(item => item.currency === inputCurrency);
  return !!rateItem && rateItem[rateToUse];
};

export const stripCurrencyToOneInstance = (structuredRates) => {
  const USDItem = structuredRates.find((rate) => rate.currency === 'USD');
  const GBPItem = structuredRates.find((rate) => rate.currency === 'GBP');
  const EURItem = structuredRates.find((rate) => rate.currency === 'EUR');
  const YENItem = structuredRates.find((rate) => rate.currency === 'YEN');
  const allCurrencyRates = [USDItem, GBPItem, EURItem, YENItem];
  return allCurrencyRates.filter(Boolean);
};

export const trimRates = (ratesArray) => {
  const ratesArrayCopy = ratesArray.slice();
  const reorderedRates = restructureRates(ratesArrayCopy);
  const strippedRatesArray = stripCurrencyToOneInstance(reorderedRates);
  return strippedRatesArray;
};

export const spread2DArray = (rawData) => {
  return rawData.reduce((acc, curr) => {
    return acc.concat(curr);
  });
};
