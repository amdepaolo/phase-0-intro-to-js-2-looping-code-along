// Code your solutions in this file
function writeCards(giver, event){
    const cardMessages = []
    for (let a = 0; a < giver.length; a++) {
        cardMessages.push(
            `Thank you, ${giver[a]}, for the wonderful ${event} gift!`);
    }
    return cardMessages;
}
function countDown(number){
    while (number> -1){
        console.log(number); number--;
        debugger;
    }
}