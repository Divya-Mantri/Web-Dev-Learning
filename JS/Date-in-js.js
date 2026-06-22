//To create a Date
const dat=new Date();
console.log(dat)
console.log(dat.toDateString())
console.log(dat.toString())
console.log(dat.toISOString())

console.log(typeof dat)

//To get only Date
console.log(dat.getDate())

//To get Day
console.log(dat.getDay())

//To get Month
console.log(dat.getMonth())
 
//To know the current Year
console.log(dat.getFullYear())

//To get current Milliseconds
console.log(dat.getMilliseconds( ))

//To get minutes
console.log(dat.getMinutes())

//To get time in milliseconds
console.log(dat.getTime())

//Another way to create Date in milliseconds
const dat1=Date.now();
console.log(dat1)

const dat2=new Date("2025-11-03T10:10:10")
console.log(dat2.toDateString())

//Format will be = Year/Month/Day/Hour/Minute/Second/Millisecond
const dat3=new Date(2025,11,7)  //First two values are compulsory
console.log(dat3)
console.log(dat3.toString())

const dat4=new Date();
dat4.setDate(20);
dat4.setFullYear(2021)
dat4.setMonth(3)
console.log(dat4.toDateString())

console.log(dat4.toLocaleDateString())

//Date calculation
const date1=new Date();
const date2=new Date("2026-04-21");
console.log(date2-date1)

//Countdown timer for olympics
// Days,Hour,Minutes,Seconds Left 
const date3=new Date();
const date4=new Date("2028-07-14T00:00:00")
const date5=date4-date3;
const days=Math.floor(date5/(1000*60*60*60*24));
console.log(days) 
const hour=Math.floor((date5/1000*60*60)%24)
console.log(hour)
const minute=Math.floor((date5/(1000*60))%60)
const seconds=Math.floor((date5/(1000))%60);
const year=Math.floor((date5)/(1000*60*60*24*365))
console.log(`Olympics CountDownTimer:Year:${year} Days:${days} hour:${hour} minute:${minute}  seconds:${seconds}`);
