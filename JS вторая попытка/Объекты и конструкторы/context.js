'use strict'

let a = {
name:'foo',
getName: function(){
  console.log();
  return this.name
  }

}
let b = {
name:'bar',
getName: a.getName.bind(a)

}
