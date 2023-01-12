// create a object method where you need to write the  length and widht of the rectangle.
// length=5;
// width=2;

//In this object write 2 funtion, 
// 1. to check the area of the rectangle.
//  2. to check the perimeter of the rectangle.

let object={

    length:5,
    width:2,
    area: function(){
      console.log("area-", (this.length*this.width));
    },
    perimeter: function (){
      console.log("perimeter",2*(this.length+ this.width));
    }
  }
  
  object.area();
  object.perimeter();