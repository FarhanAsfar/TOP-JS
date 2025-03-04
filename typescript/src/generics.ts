type input = number | string;


function element<T>(arr: T[]){
    return arr[0];
}

const value = element<string>(["hello", "world"]);
console.log(value);