/**
 * Oregon Trail-----------------------------------------------------------
 * Test Code is in tests.js
 */

// Create your Classes here.


// Copy your Traveler and Wagon code from the code.js file in your Oregon Trail Part 1 project into the code.js file in the new repo for Part 2.

// function Traveler (name, food, isHealthy) {
//     this.name = name
//     this.food = 1
//     this.isHealthy = true
// }

// function Wagon (capacity, passengers){
//     this.capacity = capacity
//     this.passengers = []
// }

// Step One
// Follow the examples in the Class syntax lesson and the example code above to convert the Prototype-style classes in your Oregon Trail program to the Class-style syntax.

class Traveler {
    constructor (name) {
        this.name = name
        this.food = 1
        this.isHealthy = true
    }

    hunt () {
        this.food += 2
    }

    eat () {
       if (this.food >=1) {
           this.food -= 1
       } else {
          this.isHealthy = false
          this.food = 0  
       }
    }
}

// Now, extend your Oregon Trail code to use inheritance to create two new types of travelers: Doctor and Hunter. They will have all of the features of any other Traveler, but with these differences:

// Doctor:
// A Doctor is a Traveler with one additional method:

// Doctor.prototype.heal(traveler)
// If a traveler is sick, pass the sick traveler’s object as a parameter to the .heal() method, and their isHealthy property is changed to true.

class Doctor extends Traveler {
    constructor (name) {
        super (name)
    }

    heal(traveler){
        traveler.isHealthy = true
        return this
    }
}

// Hunter:
// A Hunter is a Traveler that is better at finding food, but requires more food to eat. They should start out with 2 food instead of just 1 like other travelers do. They can also give food to other travelers:

class Hunter extends Traveler {
    constructor (name){
        super(name)
        this.food = 2
    }

    // Hunter.prototype.hunt()
    // Increase the hunter's food by 5. (A normal traveler gains only 2.)

    hunt (){
        this.food += 5
    }

    // Hunter.prototype.eat()
    // Consumes 2 units of the hunter's food. If the hunter doesn't have 2 food when they are instructed to eat, they eat as much as they can (0 or 1 unit), but the hunter is no longer healthy. (A normal traveler eats only 1 unit of food.)

    eat () {
        if (this.food >=2) {
            this.food -= 2
        } else {
           this.isHealthy = false
           this.food = 0  
        }
    }


    // Hunter.prototype.giveFood(traveler, numOfFoodUnits)
    // Transfers numOfFoodUnits from the hunter to a different traveler. If the hunter has less food than they are being asked to give, then no food should be transferred.

    giveFood(traveler, numFood){
        if (numFood > this.food) {
            return "You are out of food!"
        } 
        else {
            this.food -= numFood
            traveler.food += numFood
        }
    }
}

class Wagon {
    constructor (capacity){
        this.capacity = capacity
        this.passengers = []
    }

    getAvailableSeatCount(){
        return this.capacity - this.passengers.length
    }

    join(traveler){
        if (this.passengers.length < this.capacity) {
            this.passengers.push(traveler)
        }
    }

    shouldQuarantine (){
        return !this.passengers.every((traveler) => traveler.isHealthy)
    }

    totalFood() {
        return this.passengers.reduce((a,b) => a + b.food, 0)
    }
}

