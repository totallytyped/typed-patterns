export class Subject {
    private observers: Array<Function> = [];
    private state: any;

    constructor(state?: any) {
        this.state = state;
    }

    public setState(state: any) {
        this.state = state;
        this.Notify(this.state);
        return this.state;
    }

    public getState() {
        return this.state;
    }

    public Attach(observerUpdateFunction: Function) {
        this.observers.push(observerUpdateFunction);
    }

    public Detach(observerUpdateFunction: Function) {
        this.observers = this.observers.filter(observer => observer !== observerUpdateFunction);
    }

    private Notify(state: any) {
        this.observers.forEach(observer => observer(this.state));
    }
}

export class Observer {

}
