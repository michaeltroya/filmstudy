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

    return modes.slice(0, 3);
  };

  const getTotal = array => {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
      total += array[i];
    }
    return total;
  };

  totalRuntimeDays = numeral(getTotal(runtimes))
    .format('00:00:00')
    .split(':')[0];
  totalRuntimeHours = numeral(getTotal(runtimes))
    .format('00:00:00')
    .split(':')[1];
  totalRuntimeMinutes = numeral(getTotal(runtimes))
    .format('00:00:00')
    .split(':')[2];

  totalRevenue = numeral(getTotal(revenues)).format('$0,0.00');
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
