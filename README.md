# Essents

Simple library with useful utils

## Menu

* [Examples](#examples)
* [Setup](#setup)
* [Technologies](#technologies)

## Examples

* [Counter](#counter)
* [Cycled Counter](#cycled-counter)
* [Repeater](#repeater)
* [Timer](#timer)
* [Random](#random)
* [UUID Generator](#UUID-Generator)

### Counter

#### Simple creation

```typescript
import {Counter} from 'essents';

const counter = new Counter(3, () => {console.log('Hello')}); // Creates counter with target value 3, callback value and initial value 0

counter.increment() // currentStep: 1

counter.increment() // currentStep: 2

counter.increment() // currentStep: 3
// execute callback
// Will print "Hello"
```

#### All constructor props using

```typescript
...

const counter = new Counter(3, (name: string) => console.log(`Hello ${name}`), 2, 'Bob'); // Creates counter with target value 3, callback value, initial value 2 and optional argument "Bob" which using at callback

counter.increment() // currentStep: 3
// execute callback
// Will print "Hello Bob"
```

#### Using setters

```typescript
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

### Cycled Counter

#### Simple creation

```typescript
import {CycledCounter} from 'essents';

const counter = new CycledCounter(3, () => {console.log('Hello')}); // Creates counter with target value 3, callback value and initial value 0

counter.increment() // currentStep: 1
counter.increment() // currentStep: 2
counter.increment() // currentStep: 0
// execute callback
// Will print "Hello"

counter.increment() // currentStep: 1
counter.increment() // currentStep: 2
counter.increment() // currentStep: 0
// execute callback
// Will print "Hello"
```

#### All constructor props using

```typescript
...

const counter = new CycledCounter(3, (name: string) => console.log(`Hello ${name}`), 2, 'Bob'); // Creates counter with target value 3, callback value, initial value 2 and optional argument "Bob" which using at callback

counter.increment() // currentStep: 0
// execute callback
// Will print "Hello Bob"

counter.increment() // currentStep: 1
counter.increment() // currentStep: 2
counter.increment() // currentStep: 0
// execute callback
// Will print "Hello Bob"
```

#### Using setters

```typescript
...
const counter = new CycledCounter(3); // Creates counter with target value 3 and initial value 0

counter.onFire = (name: string, surename: string) => console.log(`Yet another hello ${name} ${surename}`); // Define callback

counter.args = ['John', 'Doe'] // Define args

counter.increment() // currentStep: 1
counter.increment() // currentStep: 2
counter.increment() // currentStep: 0
// Execute callback
// Will print "Yet another hello John Doe"
```

### Repeater

```typescript
import {Repeater} from 'essents';

const repeater = new Repeater(() => console.log('Hello'), 10); // Creates repeater with callback, 10ms interval and optional argument "Bob" which using at callback

console.log(repeater.alive) // false
console.log(repeater.period) // 10ms

repeater.start();
console.log(repeater.alive) // true

repeater.kill();
console.log(repeater.alive) // false
```

### Timer

```typescript
import {Timer} from 'essents';

const timer = new Timer((name: string) => console.log(`Hello ${name}`), 10, true, 'Bob'); // Creates timer with callback, 10ms delay, autokill flag, and optional argument "Bob"

console.log(timer.alive) // false
console.log(timer.delay) // 10ms

timer.start();
console.log(timer.alive) // true

// wait 10 ms

// will print "Hello Bob"

console.log(timer.alive) // false | Because timer automaticaly delete timeout after triggering
```

### Random

```typescript
import {Random} from 'essents';

const rd = new Random();

console.log(rd.next()) // number [0 ... 999_999]

console.log(rd.next(10)) // number [0 ... 9]
```

### UUID Generator

```typescript
import {UUIDGenerator} from 'essents';

const uuidGen = new UUIDGenerator();

console.log(uuidGen.generate()) // uuid
```

## Setup

To use this project, install it locally using npm:

`$npm i essents`

## Technologies

Project is created with:

* typescript 3.9.7
* chai 4.2.0
* mocha 8.1.0
* ts-mocha 7.0.0
