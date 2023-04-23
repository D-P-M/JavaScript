/*
Here’s how our registration works. There are adult runners (over 18 years of age) and youth runners (under 18 years of age). They can register early or late. Runners are assigned a race number and start time based on their age and registration.

Race number:

Early adults receive a race number at or above 1000.
All others receive a number below 1000.
Start time:

Adult registrants run at 9:30 am or 11:00 am.
Early adults run at 9:30 am.
Late adults run at 11:00 am.
Youth registrants run at 12:30 pm (regardless of registration).
*/

let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 14;

if(early && age > 18){
raceNumber += 1000;
}

if(early && age > 18){
  console.log(`Race begins @ 9:30 #${raceNumber}`); 

}else if (!early && age > 18){
  console.log(`Late race begins at 11:00 #${raceNumber}`);
}

else if(age< 18){
  console.log(`Youth race begins @ 12:30 #${raceNumber}`)
}
else{
  console.log('See registration desk');
  }