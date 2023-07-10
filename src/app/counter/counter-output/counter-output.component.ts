import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  // @Input() counter: any;

  // .........................................................................
  // @Input decorator are used in non-ngrx application
  // .........................................................................

  //.........................................................................
  // this below code we used to subscribe the  counter data and we use ngOnDestroy() in NgRx application....
  //But we can avoid these lines if we use observable....
  //........................................,....

  // counter: number | undefined;
  // counterSubscribe!: Subscription;

  counter$!: Observable<{ counter: number }>;
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // this.counterSubscribe = this.store.select('counter').subscribe((data) => {
    //   this.counter = data.counter;
    // });

    this.counter$ = this.store.select('counter');
  }
  // ngOnDestroy(): void {
  //   if (this.counterSubscribe) {
  //     this.counterSubscribe.unsubscribe();
  //   }
  // }
}
