import {Subject} from './Subject'

Subject.create('1').registOberver('1-1', function(res){
    console.log('1-1=',res)
})
Subject.create('1').registOberver('1-2', function(res){
    console.log('1-2=',res)
})
Subject.create('2').registOberver('2-1', function(res){
    console.log('2-1=',res)
})
Subject.create('2').registOberver('2-2', function(res){
    console.log('2-2=',res)
})
const btnClick = function(){
    Subject.create('1').notifyObserver('1-1', '1111')
    Subject.create('1').notifyObserver('1-2', '222')
    Subject.create('2').notifyObserver('2-1', '3333')
    Subject.create('2').notifyObserver('2-2', '4444')
}

export default btnClick;