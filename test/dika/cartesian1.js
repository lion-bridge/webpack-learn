// ["insuredBirthday", "holderBirthday", "controlDutyList[data-id=controlDutyItem1]", "calinsuredRelationship"],
// 联动组件

const rules = [
    ['0-50','51-55','56-60','61-65', '66-70'],
    ['1', '2','11','12'],
    ['SP', 'Y3','Y5','Y10','Y15','Y20'],
];

function cartesian(arr) {
    if (arr.length < 2) return arr[0] || [];
    return [].reduce.call(arr, function (col, set) {
        let res = [];
        col.forEach(c => {
            set.forEach(s => {
                let t = [].concat(Array.isArray(c) ? c : [c]);
                t.push(s);
                res.push(t);
            })
        });
        return res;
    });
}

function filter(cartesianes = []){
    return cartesianes.filter(arr => arr[1] === '1' || arr[2] === 'SP' || arr[0] === '66-70').reduce((obj,keys) => {
        obj[keys.toString()] = '66-70,1,SP'
        return obj;
    },{})
}

console.log(filter(cartesian(rules)))