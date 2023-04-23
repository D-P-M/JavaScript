/*
The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. 
*/

const getSleepHours = day =>{
  switch(day){
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 7
      break;
    case 'Wednesday':
      return 7
      break;
    case 'Thursday':
      return 7
      break;
    case 'Friday':
      return 9
      break;
    case 'Saturday':
      return 9
      break;
    case 'Sunday':
      return 7
      break;
    default:
      return 'Error!' 
  }
};

const getActualSleepHours = () => 
  getSleepHours('Monday')+
  getSleepHours('Tuesday')+
  getSleepHours('Wednesday')+
  getSleepHours('Thursday')+
  getSleepHours('Friday')+
  getSleepHours('Saturday')+
  getSleepHours('Sunday');
  
console.log(getSleepHours('Monday'));
console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours){
  console.log('You got the idea amount of sleep');
} else if(actualSleepHours > idealSleepHours){
  console.log("You got " + (idealSleephours - actualSleepHours) + "more hours sleep than needed!")
} else if(actualSleepHours < idealSleepHours){
  console.log('You should get some rest because you slept '+(idealSleepHours - actualSleepHours)+' hours less than you should.')
} else {
  console.log('Error! Something went wrong. Check your code!')
}

}

calculateSleepDebt()

