# Using BehaviorSubject to improve the performance of Ionic Apps
Learn how to use the BehaviorSubject to increase the performance of Ionic Apps

## Preview
<img src="https://github.com/learn-ionic/ionic-behavior-subject/blob/main/src/assets/preview.gif?raw=true" height="500px">

## Normal way using ChangeDetection
This is the normal way of binding values in the UI. Change detection checks the whole page and every single component for changes, every time the user clicks, scrolls or move their mouse. Lots of necessary checks are made. The larger the application gets, the slower it gets!
```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  counter = 1;

  constructor() {}

  increase() {
    this.counter++;
  }

}

```

## Using BehaviorSubject
Why we use BehaviorSubjects and disable normal ChangeDetection? If all values are transported over Observables (BehaviorSubjects) we know// exactly when a value changes and could trigger the change detection. Even more, we could trigger it only in the needed parts of our application. Especially large applications benefit from a significant increase in performance!
```ts
import { ChangeDetectionStrategy, Component } from '@angular/core'; // <- Import ChangeDetectionStrategy
import { BehaviorSubject } from 'rxjs'; // <- Import BehaviorSubject

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush // <- IMPORTANT! Deactivate ChangeDetection
})
export class Tab2Page {

  counter$ = new BehaviorSubject(1); // <- Create new BehaviorSubject

  constructor() { }

  increase() {
    const newValue = this.counter$.getValue() + 1; // Get old value using .getValue()
    this.counter$.next(newValue); // Stream new value to UI using .next()
  }

}
```
Learn more:  
https://indepth.dev/posts/1313/angulars-push-pipe-part-1  
https://indepth.dev/posts/1313/angulars-push-pipe-part-2  
Thanks to [@BioPhoton](https://github.com/BioPhoton/)

## Getting startet
1. Clone the project
2. Run `yarn` or `npm i` inside the directory
3. Run `ionic serve`
