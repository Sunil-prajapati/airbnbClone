// ===========prototype inheritance =========

const obj = {
    name:"Sunil",
    city:"Amritsar",
    intro:function(){
        console.log(this.name + "from" + this.city)
    }
}

const obj2 = {
    name:"Karna",
}

obj2.__proto__ = obj;

console.log(obj2.city)
console.log(obj.intro)   // obj2 has name so it will show it's name but we don't have city in obj2 it will inherit the obj city



Function.prototype.mybind = function(){
    console.log("proto type")
}

function fun(){

}

console.log(fun.__proto__.mybind)   // we can use mybind function from by any other function because of prototype

