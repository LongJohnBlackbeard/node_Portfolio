function RollDice() {
    var one = Math.floor(Math.random() *6) + 1
    var two = Math.floor(Math.random() *6) + 1
    var three = Math.floor(Math.random() *6) + 1
    var four = Math.floor(Math.random() *6) + 1
    var five = Math.floor(Math.random() *6) + 1
    var six = Math.floor(Math.random() *6) + 1
    document.getElementById("dice_1").innerHTML = one;
    document.getElementById("dice_2").innerHTML = two;
    document.getElementById("dice_3").innerHTML = three;
    document.getElementById("dice_4").innerHTML = four;
    document.getElementById("dice_5").innerHTML = five;
    document.getElementById("dice_6").innerHTML = six;

    document.getElementById("Total").innerHTML = one + two + three + four + five + six;
}