export class Looper {
    constructor(fn: Function, intervalTime: number) {
        this.fn = fn
        this.intervalTime = intervalTime
    }
    private fn: Function
    private timeout: any = 0
    private intervalTime: number = 0
    run(): void {
        const {fn, intervalTime} = this
        this.timeout = setTimeout(() => {
            fn()
            this.run()
        }, intervalTime)
    }
    stop(): void {
        clearTimeout(this.timeout)
    }
}