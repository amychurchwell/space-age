## Super Galactic Age Calculator
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet.
Write an application that determines a user’s age based on a planet’s solar years.

### Objectives

* Business logic is thoroughly tested with Jasmine.
* Karma is set up correctly.
* User interface logic and business logic is separate.
* Project utilizes ES6 features including classes, let and const.
* Dependencies are managed with npm and Bower.
* App includes gulp-based asset pipeline w/ a development server.
* Website works as expected.
* Project is polished/portfolio-quality. (Clear code presentation, error free, basic styling, complete README, thoughtful UI, etc.)
* README contains functionality you'd include in the future.


### Behavior-Driven Development Workflow
_A reference._

1. Indentify the simplest possible behavior our program must exhibit.
2. *Write a coded test*
3. Before coding *make sure the test fails.*
4. Implement the behavior with the _least amount of code possible._
5. Run the automated test to confirm it passes. (If not, revisit step 4.)
6. Make sure all previous tests still pass.
7. *Check if code can be refactored. If so, refactor and repeat step 6.*
8. Repeat this entire process with the next simplest behavior.


### Specs and Calculations

Solar year on *Earth* is 365 days.
1 day = 86,400 seconds.
365 days = 31,536,000 seconds.

- [x] Take a person’s age in years and convert it into seconds.

```
Input: 2
Output: 63113904 second(s).
```

* Return the age of a human in *Mercury years*.
A Mercury year is .24 Earth years.
approx *87.6 days.*

```
Input: 2
Output: 8.333... year(s).
```
Multiply input by 365
730.
Then, divide by planet year in days.
730/87.6 = 8.333...

* Return the age of a human in *Venus years*.
A Venus year is .62 Earth years.
approx *226.3 days.*

```
Input: 2
Output: 3.22580645161 year(s).
```
* Return the age of a human in *Mars years*.
A Mars year is 1.88 Earth years.
approx *686.2 days.*

```
Input: 2
Output: 1.06382978723 year(s).
```
* Return the age of a human in *Jupiter years*.
A Jupiter year is 11.86 Earth years.
approx *4328.9 days.*

```
Input: 2
Output: 0.16863406408 year(s).
```

Take two dates and determine the difference, in seconds, between the two. (This way a user can enter a birthdate and the application can compare the birthdate against the *current time* (moment.js) to come up with an accurate age.)

Determine how many years a user has left to live on each planet… (yikes!) To do this, the application will have to calculate the user’s life expectancy. (Note that life expectancy shouldn’t be a hard-coded value. After all, it can vary from country to country and depending on various demographics.)

If a user has already surpassed the average life expectancy, your application should account for (and test) this possible outcome as well.
