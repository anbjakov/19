'use strict'
function calc (initialValue=0){
    let currentResult = initialValue
    return {
        set: (value)=>currentResult=value,
        add: (value)=>currentResult=currentResult+value,
        sub: (value)=>currentResult=currentResult-value,
        mult:(value)=>currentResult=currentResult*value,
        div:(value)=>currentResult=currentResult/value,
    }
}
module.exports = calc();