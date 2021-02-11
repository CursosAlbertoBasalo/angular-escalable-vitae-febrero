import { BehaviorSubject } from 'rxjs';

export class StoreService<StateType> {
  protected readonly stateSubject$ = new BehaviorSubject<StateType>(
    this.initialState
  );

  readonly state$ = this.stateSubject$.asObservable();

  get state(): StateType {
    return this.getState();
  }
  set state(state: StateType) {
    this.setState(state);
  }

  getState() {
    const currentValue = this.stateSubject$.value;
    return this.needsDeepClone
      ? this.deepClone(currentValue)
      : { ...currentValue };
  }
  setState(state: StateType) {
    const newState = this.needsDeepClone ? this.deepClone(state) : { ...state };
    this.stateSubject$.next(newState);
  }

  constructor(
    private readonly initialState: StateType,
    protected readonly needsDeepClone = false
  ) {}

  private deepClone(source: StateType): StateType {
    // ToDo: optimize deep clone
    const sourceJson = JSON.stringify(source);
    return JSON.parse(sourceJson);
  }
}
