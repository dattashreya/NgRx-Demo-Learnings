import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppStore } from './store/counter.reducer';
import { decrement,increment } from './store/counter.action';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.css'
})
export class AppComponent {
  protected readonly title = signal('ngstore');
  counterVal: Observable<number> = new Observable<number>();
  constructor(private store: Store<AppStore>) {
    this.counterVal = this.store.pipe(select('count'));
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }
  onIncrement() {
    this.store.dispatch(increment());
  }
}
