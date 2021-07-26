/**
 * TESTS -----------------------------------------------------------
 * Do not modify these, but use them to verify that your code works.
 */

// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let drsmith = new Doctor("Dr. Smith");
let sarahunter = new Hunter("Sara");
let maude = new Traveler("Maude");

let result = wagon.getAvailableSeatCount();
console.assert(result === 4, {
  test: "There should be four available seats left in the empty wagon",
  expected: 4,
  result: result
});

wagon.join(henrietta);
result = wagon.getAvailableSeatCount();
console.assert(result === 3, {
  test: "There should be three available seat left after henrietta joins",
  expected: 3,
  result: result
});

wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!

result = wagon.getAvailableSeatCount();
console.assert(result === 0, {
  test: "There should be no available seats left",
  expected: 0,
  result: result
});

sarahunter.hunt(); // gets 5 more food
drsmith.hunt();

result = wagon.totalFood();
console.assert(result === 12, {
  test: "There should be 12 total food.",
  expected: 12,
  result: result
});

henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)

result = wagon.shouldQuarantine();
console.assert(result === true, {
  test: "The wagon should quarantine because juan is sick",
  expected: true,
  result: result
});

result = wagon.totalFood();
console.assert(result === 7, {
  test: "The wagon should have 7 food",
  expected: 7,
  result: result
});

drsmith.heal(juan);

result = wagon.shouldQuarantine();
console.assert(result === false, {
  test: "The wagon should not quarantine because juan was healed",
  expected: false,
  result: result
});

sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick

result = wagon.shouldQuarantine();
console.assert(result === true, {
  test: "The wagon should quarantine because sarah is now sick",
  expected: true,
  result: result
});

result = wagon.totalFood();
console.assert(result === 6, {
  test: "The wagon should have 6 food",
  expected: 6,
  result: result
});
