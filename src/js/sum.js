import {Subject} from './Subject'

export const sum = function(a,b){
    return a + b;
}

export const sum1 = sum.bind(null, 1);

Subject.create('3').registOberver('3-2', function(res){
    console.log('3-2=',res)
})