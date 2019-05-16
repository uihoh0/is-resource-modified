export class Looper {
    constructor(fn: Function, intervalTime: number) {
        this.fn = fn
        this.intervalTime = intervalTime
    }
    private fn: Function
    private intervalTime: any = 0
    run(): void {
        const { fn, intervalTime } = this
        clearTimeout(intervalTime)
        this.intervalTime = setTimeout(() => {
            fn()
            this.run()
        }, intervalTime)
    }
    stop(): void {
        clearTimeout(this.intervalTime)
    }
}