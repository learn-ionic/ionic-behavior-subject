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

  // Why we use BehaviorSubjects and disable normal ChangeDetection?
  // If all values are transported over Observables (BehaviorSubjects) we know
  // exactly when a value changes and could trigger the change detection.
  // Even more, we could trigger it only in the needed parts of our application.
  // Especially large applications benefit from a significant increase in performance!

}
