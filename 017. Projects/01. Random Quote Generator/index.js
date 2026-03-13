const quotes = {
"You have to believe in yourself when no one else does.— Serena Williams",
"When you have a dream, you’ve got to grab it and never let go.— Carol Burnett",
"Spread love everywhere you go. Let no one ever come without leaving happier. —Mother Teresa",
"The only thing we have to fear is fear itself. —Franklin D. Roosevelt",
"Some people want it to happen, some wish it would happen, others make it happen. —Michael Jordan",
"It does not matter how slowly you go, as long as you do not stop. —Confucius",
"Find out who you are and do it on purpose. —Dolly Parton",
"You can be everything. You can be the infinite amount of things that people are. —Kesha",
"Always go with your passions. Never ask yourself if it’s realistic or not. —Deepak Chopra",
"Do one thing every day that scares you. —Eleanor Roosevelt",
"It is never too late to be what you might have been. —George Elliot",
"Always do your best. What you plant now, you will harvest later. —Og Mandino",
"In three words I can sum up everything I’ve learned about life: It goes on. ―Robert Frost",
"You can’t help what you feel, but you can help how you behave. ―Margaret Atwood",
"No need to hurry. No need to sparkle. No need to be anybody but oneself. ―Virginia Woolf",
"It is better to be hated for what you are than to be loved for what you are not. ―Andre Gide",
"Life has got all those twists and turns. You’ve got to hold on tight and off you go. ―Nicole Kidman",
"You define your own life. Don’t let other people write your script. —Oprah Winfrey",  
};      

const button = document.querySelector('button');
const quote = document.querrySelector('h1');

button.addEventListner('click',()=>{
const index = Math.floor(Math.random()*18);
quote.textContent = quotes[index];
});