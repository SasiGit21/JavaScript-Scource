
/*const firstName ='Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;
const jonas = "I'm"+ firstName +',a '+
        (year - birthYear)+' years Old'+job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${ year -
birthYear} year old ${job}!`;
console.log(jonasNew); 


const age = 19 ;
const isOldEnough = age >=18;

if(isOldEnought)
{
    console.log('Sara ca start driving license 😊image.png')
}


// `` back tick and variable inside ${} sign 
const marks_mass = 78;
const marks_height =1.69;
const jons_mass=92 ;
const jons_height = 1.95;

const Marks_BMI = marks_mass/(marks_height**2);
const Jons_BMI = jons_mass/(jons_height**2);
console.log(Marks_BMI,Jons_BMI);

if(Marks_BMI>Jons_BMI)
{
    console.log(`Marks BMI(${Marks_BMI}) is hifger than 
    Jonas BMI ${Jons_BMI}!`);
}
else
{
    console.log(`Jonas BMI ${Jons_BMI} is greater 
    than Marks ${Marks_BMI}!`);
}


/* Gendral note about String
 ---------------------------
String always show black colour in console
number is in green colour*/

/*
//Type conversion
const inputYear = '1991';
console.log(Number(inputYear),inputYear);
console.log(Number(inputYear) + 18)

console.log(Number('Jonas')); //String is converted into number and show as 'NaN' --> not a number
console.log(typeof(NaN)); // but somehow it shows as number

console.log(String(123),23);

//Type Coversion
console.log('I am '+ 23 + ' years old');
console.log(23 + 10 +'-3' );
console.log('23'- '10' - 3);
console.log('23' * '2');
 // '' +  - will always consider as string 
 //but in  '' -,/,*,% will always consider as number
let n = '1'+1;
console.log(n);
n = n -1;
console.log(n);

*/

// 5 falsy values : 0, '' , undefined , null , NaN

/*console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 10;

if(money)
{
    console.log(`Dont't spend it at all;)`);

}
else
{
    console.log(`You should get a job!`);
}

let height=0;

if(height)
{
    console.log('YAY! Height is define');
}
else{
    console.log('Height is undefined');
}*/

const age = 18;
if(age === 18)
console.log(`You just become an adult':D (strict)`);

if (age == 18) console.log('You just become an adult :D (loose)');

const favourite = prompt("What's your favourite number");
 
console.log(favourite);
console.log(typeof favourite);

 if(favourite == 23 )
 {
    console.log('Cool! 23 is an amazing number!');
 }

 const favourite