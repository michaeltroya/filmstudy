import numeral from 'numeral';

const calculate = ({ revenues, runtimes, genres, directors, producers }) => {
  let totalRevenue = 0;
  let totalRuntime = 0;
  let favouriteGenres = '';
  let favouriteDirectors = '';
  let favouriteProducers = '';

  let results = {};

  const getModes = array => {
    var frequency = {}; // array of frequency.
    var maxFreq = 0; // holds the max frequency.
    var modes = [];

    for (var i in array) {
      frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.

      if (frequency[array[i]] > maxFreq) {
        // is this frequency > max so far ?
        maxFreq = frequency[array[i]]; // update max.
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

  totalRevenue = numeral(getTotal(revenues)).format('$0,0.00');
  totalRuntime = numeral(getTotal(runtimes)).format('00:00:00');
  favouriteGenres = getModes(genres);
  favouriteDirectors = getModes(directors);
  favouriteProducers = getModes(producers);

  results = { totalRevenue, totalRuntime, favouriteGenres, favouriteDirectors, favouriteProducers };

  return results;
};

export default calculate;
