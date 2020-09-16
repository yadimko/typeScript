const arrOfNum: Array<number> = [1, 2, 3]
const arrOfStr: Array<string> = ['1', '2', '3']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrOfNum)
reverse(arrOfStr)
