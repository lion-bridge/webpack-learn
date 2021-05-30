import {Subject} from './Subject'

Subject.create('2').notifyObserver('2-2', '4444')

export const sum = function(a,b){
    Subject.create('2').registOberver('2-2', function(res){
        console.log('2-2=222',res)
    })
    return a + b;
}


