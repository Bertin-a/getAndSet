const monstersInTheCloset = (size,messageToWorld,killNumber)=>{
    return{
        size: size,
        message: 'Hello world',
        messageToWorld: messageToWorld,
        killNumber:killNumber,
        messageToTheWorld(){
            console.log(`${this.message},${messageToWorld}. I have a kill nimber of ${killNumber}`)
        }
    }
}
const newMonster = monstersInTheCloset(11,'you are all my slaves now',20)
newMonster.messageToTheWorld()

const friendlyMoster = monstersInTheCloset(20,'I am here to save you',0)
friendlyMoster.messageToTheWorld()

const breaks=(gifts, people, holiday)=>{
    return{
        holiday:holiday,
        gifts: gifts,
        people: people,
        favorite: 'It is my favorite time of the year',
        letsGo(){
            console.log(`I really love ${holiday}.${this.favorite}. This year I had${gifts} gifts. I spend this time with${people}`)
        }
    }

}
const christmas= breaks(11, 'friends', 'christmas')
christmas.letsGo()

const sendingAMessageInBits=(message1, message2, message3, message4)=>{
    return{
    message1,
    message2,
    message3,
    message4,

    finalMessageSent(){
        console.log(`${message1}, ${message2}. ${message3}, ${message4}`)
    }

}
}

const sender = sendingAMessageInBits('hello there', 'my name is patrick','I need to find someone','can you help?')
sender.finalMessageSent()

