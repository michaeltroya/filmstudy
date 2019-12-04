import numeral from 'numeral';

const calculate = ({ revenues, runtimes, genres, directors, producers }) => {
  let totalRevenue = 0;
  let favouriteGenres = '';
  let favouriteDirectors = '';
  let favouriteProducers = '';
  let totalRuntimeDays = '';
  let totalRuntimeHours = '';
  let totalRuntimeMinutes = '';

  let results = {};

  const getModes = array => {
    var frequency = {};
    var maxFreq = 0;
    var modes = [];

    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1;

      if (frequency[array[i]] > maxFreq) {
        maxFreq = frequency[array[i]];
      }
    }

    for (var k in frequency) {
      if (frequency[k] === maxFreq) {
        modes.push(k);
      }
    }

    return modes.slice(0, 2);
  };

  const getTotal = array => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  };

  const convertTime = value => {
    let days = Math.floor(value / 1440);
    let minutes = value % 60;
    let hours = Math.floor(value / 60) % 24;
    let time = { days, hours, minutes };
    return time;
  };

  totalRevenue = numeral(getTotal(revenues)).format('$0,0');

  totalRuntimeDays = convertTime(getTotal(runtimes)).days;
  totalRuntimeHours = convertTime(getTotal(runtimes)).hours;
  totalRuntimeMinutes = convertTime(getTotal(runtimes)).minutes;

  favouriteGenres = getModes(genres);
  favouriteDirectors = getModes(directors);
  favouriteProducers = getModes(producers);

  results = {
    totalRevenue,
    totalRuntimeMinutes,
    totalRuntimeHours,
    totalRuntimeDays,
    favouriteGenres,
    favouriteDirectors,
    favouriteProducers
  };

  return results;
};

export default calculate;
