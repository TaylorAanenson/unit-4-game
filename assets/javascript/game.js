var randomNumber = (Math.floor(Math.random()*(120-19)+19));
var greenRupeeNum = (Math.floor(Math.random()*(12-1)+1));
var blueRupeeNum = (Math.floor(Math.random()*(12-1)+1));
var purpleRupeeNum = (Math.floor(Math.random()*(12-1)+1));
var silverRupeeNum = (Math.floor(Math.random()*(12-1)+1));

var wins = 0;
var losses = 0;
var counter = 0;
console.log(randomNumber);
console.log(counter);

$('#randomNumber').text(randomNumber);
$('#wins').text('Wins: ' + wins);
$('#losses').text('Losses: ' + losses);
$('#counter').text(counter);

$('#greenRupee').on('click',function(){
    counter+=greenRupeeNum;
    $('#counter').text(counter);
    console.log(greenRupeeNum);
    console.log(counter);
});
$('#blueRupee').on('click',function(){
    counter+=blueRupeeNum;
    $('#counter').text(counter);
    console.log(blueRupeeNum);
    console.log(counter);
});
$('#purpleRupee').on('click',function(){
    counter+=purpleRupeeNum;
    $('#counter').text(counter);
    console.log(purpleRupeeNum);
    console.log(counter);
});
$('#silverRupee').on('click',function(){
    counter+=silverRupeeNum;
    $('#counter').text(counter);
    console.log(silverRupeeNum);
    console.log(counter);
});
if(randomNumber == counter){
    alert('you win!');
}else{
    alert('nice try');
}