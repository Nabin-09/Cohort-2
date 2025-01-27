//JS has 7 Primitive data types and all are immutable 
/*
Number , String , boolean , Undefined , Null , Symbol and bigInt
Non Primitive ones are array , Function , Date , Objects(the key value pair ones) etc
*/
/* Classes in JS - Blueprint for creating an object(not the key value pair)
 */
class rectangle{
    constructor(width, height , color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    area(){
        const area = this.width*this.height;
        return area;
    }
    paint(){
        console.log(`Painting with color ${this.color}`);
    }
}
const rect = new rectangle(2,4);
const area = rect.area();
console.log(area);