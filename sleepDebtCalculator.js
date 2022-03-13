/* Sleep Debt calculator
*/
const getSleepHours = day => {
  if (day === 'monday') {
    return 8;
  }
  else if (day === 'tuesday') {
    return 7;
  }
  else if (day === 'wednesday') {
    return 7;
  }
  else if (day === 'thursday') {
    return 6;
  }
  else if (day === 'friday') {
    return 12;
  }
  else if (day === 'saturday') {
    return 8;
  }
  else if (day === 'sunday') {
    return 2;
  }
  else {
  }
};
const getActualSleepHours = () => 
  getSleepHours('monday') +
   getSleepHours('tuesday') +
    getSleepHours('wednesday') +
     getSleepHours('thursday') +
      getSleepHours('friday') +
       getSleepHours('saturday') +
        getSleepHours('sunday');
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours(); 
  let idealSleepHours = getIdealSleepHours();
  if(actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  }
  else if(actualSleepHours > idealSleepHours) {
    console.log(`You got ` + (actualSleepHours - idealSleepHours) + ` more hours of sleep than needed.`);
  }
  else if(actualSleepHours < idealSleepHours) {
    console.log(`You should get some rest, you need ` + (idealSleepHours - actualSleepHours) + ` more hours of sleep.`);
  } else {
    console.log('Error, something went wrong.');
  }
};
console.log(`You got `+ getActualSleepHours() + ` hours of sleep this week.`);
console.log(`You would ideally like to get ` + getIdealSleepHours() + ` hours of sleep a week.`)
calculateSleepDebt();
