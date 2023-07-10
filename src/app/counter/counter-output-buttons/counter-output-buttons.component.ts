import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output-buttons',
  templateUrl: './counter-output-buttons.component.html',
  styleUrls: ['./counter-output-buttons.component.scss'],
})
export class CounterOutputButtonsComponent {
  // @Output() increment = new EventEmitter<void>();
  // @Output() decrement = new EventEmitter<void>();
  // @Output() reset = new EventEmitter<void>();

  constructor(private store: Store<{ counter: CounterState }>) {}

  onIncrement() {
    this.store.dispatch(increment());
    // this.increment.emit();
  }

  onDecrement() {
    this.store.dispatch(decrement());
    // this.decrement.emit();
  }
  onReset() {
    this.store.dispatch(reset());
    // this.reset.emit();
  }
}
