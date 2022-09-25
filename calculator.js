'use strict'
function calc (){
    let currentResult = 0
    return {
        set: (value)=>currentResult=value,
        add: (value)=>currentResult=currentResult+value,
        sub: (value)=>currentResult=currentResult-value,
        mult:(value)=>currentResult=currentResult*value,
        div:(value)=>currentResult=currentResult/value,
    }
}
module.exports = calc();