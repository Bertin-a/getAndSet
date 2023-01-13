//setters


//getter

const obj =
{
    _name: 'Bertina',
    _surname: 'Ayuure',
    get nameOfPerson(){
        if(this._name && this._surname){
            return `${this._name} ${this._surname}`
        }
    },
    set nameOfPerson(name){
        if(typeof name=='string'){
            this._name=name
        }

    }

}
obj.nameOfPerson = 'Alphonsa'
console.log(obj.nameOfPerson)

const menu=
{
    _dish:'fried Rcie',
    get dish(){
        if(this._dish){
        return `${this._dish} is available`
        }
        else{
            return 'This dish is not available'
        }

    },
    set dish(newDish){
        if(typeof newDish=='string'){
            this._dish=newDish
        }
        else{
            return 'please provide a dish'
        }

    }


}
menu.dish='Banku with fish'

console.log(menu.dish)

const friends=
{
    _friend: 'Bertina',

    get newFriend(){
        if(this._friend){
            return `Your new friend is ${this._friend}`
        }
        else{
            return "You don't have any friends"
        }

    },
    set newFriend(friend){
        if(typeof friend =='string'){
            this._friend = friend
        }
        else{
            return "you haven't gotten any friends"
        }
    }

}
friends.newFriend = 'Henry'
console.log(friends.newFriend)

const music=
{
    _currentListening: 'Karma',
    get currentListening (){
        if(this._currentListening){
            return `You are currently listenning to ${this._currentListening}`
        }
        else{
            return "You aren't listening to any music"
        }
        
    },
    set currentListening (newMusic){
        if(typeof newMusic=='string'){
            this._currentListening=newMusic
        }
    }

}

music.currentListening = 'Happy'
console.log(music.currentListening)
