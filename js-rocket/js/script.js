var car = {
    make: 'Chevy',
    type: 'hillbilly',
    color: 'bläk',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: ['seat1','seat2','seat3','seat4','backseat'],
    turnOn: function (){
        this.isTurnedOn = true;
     },
fly: function () {
        alert('fly');},
    switchCar: function (isOn) {
            console.log ('turn car' + isOn);
            if (isOn == true){
                    this.isTurnedOn = true;
            } else {
                    this.isTurnedOn = false;
            }
    }
       
};



