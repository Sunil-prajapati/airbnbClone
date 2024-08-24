function* infintyAndBeyond(){
    let i = 1;
    while(true){
        yield i++
    }
}
const taken = [...take(5,infintyAndBeyond())]
console.log(taken)