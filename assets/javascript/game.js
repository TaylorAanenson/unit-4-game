var randomNumber = (Math.floor(Math.random()*(120-19)+19));
var greenRupeeNum = (Math.floor(Math.random()*(12-1)+1));
var blueRupeeNum = (Math.floor(Math.random()*(12-1)+1));
var purpleRupeeNum = (Math.floor(Math.random()*(12-1)+1));
var silverRupeeNum = (Math.floor(Math.random()*(12-1)+1));

var wins = 0;
var losses = 0;
var counter = 0;

$('#randomNumber').text(randomNumber);
$('#wins').text('Wins: ' + wins);
$('#losses').text('Losses: ' + losses);
$('#counter').text(counter);

$('.rupees').click(function(){
    var rupee = $(this).data('rupee');
    if (rupee == 'green'){
        counter+=greenRupeeNum;
        $('#counter').text(counter);
    }else if (rupee == 'blue'){
        counter+=blueRupeeNum;
        $('#counter').text(counter);
    }else if (rupee == 'purple'){
        counter+=purpleRupeeNum;
        $('#counter').text(counter);
    }else if (rupee == 'silver'){
        counter+=silverRupeeNum;
        $('#counter').text(counter);
    }
    if (counter === randomNumber){
        wins++;
        counter = 0;
        randomNumber = (Math.floor(Math.random()*(120-19)+19));
        greenRupeeNum = (Math.floor(Math.random()*(12-1)+1));
        blueRupeeNum = (Math.floor(Math.random()*(12-1)+1));
        purpleRupeeNum = (Math.floor(Math.random()*(12-1)+1));
        silverRupeeNum = (Math.floor(Math.random()*(12-1)+1));
    }else if (counter > randomNumber){
        losses++;
        counter = 0;
        randomNumber = (Math.floor(Math.random()*(120-19)+19));
        greenRupeeNum = (Math.floor(Math.random()*(12-1)+1));
        blueRupeeNum = (Math.floor(Math.random()*(12-1)+1));
        purpleRupeeNum = (Math.floor(Math.random()*(12-1)+1));
        silverRupeeNum = (Math.floor(Math.random()*(12-1)+1));
    }
    $('#randomNumber').text(randomNumber);
    $('#wins').text('Wins: ' + wins);
    $('#losses').text('Losses: ' + losses);
    $('#counter').text(counter);
});