const xok: string = 'vas';
const bool: boolean = true;
const int: number = 8;
const float: number = 8.9;
const big: number = 1e12;

const arrOfNum1: number[] = [1, 1, 2, 3, 5];
const arrOfNum2: Array<number> = [1, 1, 2, 3, 5];

const arrOfWords: string[] = ['hello', 'gus'];

const arrOfTuple: [string, number, string] = ['gus', 5, 'ss']; //Tuple

let varOfAny: any = 12;
varOfAny = 'aaa';

function sayName (name: string): void {
    console.log(name)
}

//never
function throwError (msg: string): never{
    throw new Error(msg)
}

function infinite(): never {
    while (true){

    }
}

//Type
type Login = string;  //alias
const login: Login = 'admin';

type ID = string | number; //alias
const id1: ID = 'vasya';
const id2: ID = 13;

type SomeType = string | null | undefined;