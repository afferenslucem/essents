# Ursus-Utilus
Simple library with useful utils

## Menu
* [Technologies](#technologies)
* [Examples](#examples)
* [Setup](#setup)

## Technologies
Project is created with:
* typescript 3.9.7
* chai 4.2.0
* mocha 8.1.0
* ts-mocha 7.0.0

## Examples

* [Counter](#counter)
* [Repeater](#repeater)
* [Timer](#timer)

### Counter

#### Simple creation

```
import {Counter} from 'ursus-utilus';

const counter = new Counter(3, () => {console.log('Hello')}); // Creates counter with target value 3, callback value and initial value 0

counter.increment() // currentStep: 1

counter.increment() // currentStep: 2

counter.increment() // currentStep: 3
// execute callback
// Will print "Hello"
```

#### All constructor props using

```
...

const counter = new Counter(3, (name: string) => console.log(`Hello ${name}`), 2, 'Bob'); // Creates counter with target value 3, callback value, initial value 2 and optional argument "Bob" which using at callback

counter.increment() // currentStep: 3
// execute callback
// Will print "Hello Bob"
```

#### Using setters

```
...
const counter = new Counter(3); // Creates counter with target value 3 and initial value 0

counter.onFire = (name: string, surename: string) => console.log(`Yet another hello ${name} ${surename}`); // Define callback

counter.args = ['John', 'Doe'] // Define args

console.log(counter.activated) // false

counter.increment() // currentStep: 1
counter.increment() // currentStep: 2
counter.increment() // currentStep: 3
// Execute callback
// Will print "Yet another hello John Doe"
console.log(counter.activated) // true
```

### Repeater

```
import {Repeater} from 'ursus-utilus';

const repeater = new Repeater(() => console.log('Hello'), 10); // Creates repeater with callback, 10ms interval and optional argument "Bob" which using at callback

console.log(repeater.alive) // false
console.log(repeater.period) // 10ms

repeater.start();
console.log(repeater.alive) // true

repeater.kill();
console.log(repeater.alive) // false
```

### Timer

```
import {Timer} from 'ursus-utilus';

const timer = new Timer((name: string) => console.log(`Hello ${name}`), 10, true, 'Bob'); // Creates timer with callback, 10ms delay, autokill flag, and optional argument "Bob"

console.log(timer.alive) // false
console.log(timer.delay) // 10ms

timer.start();
console.log(timer.alive) // true

// wait 10 ms

// will print "Hello Bob"

console.log(timer.alive) // false | Because timer automaticaly delete timeout after triggering
```

## Setup
To use this project, install it locally using npm:

```
$npm i ursus-utilus
```