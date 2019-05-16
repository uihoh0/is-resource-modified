export interface IfOptions {
    onModified?: (url: string, headers: any) => {}
}



export interface IfAutoOptions{
    loopInterval?: number
    onModified?: (url: string, headers: any) => {}
}