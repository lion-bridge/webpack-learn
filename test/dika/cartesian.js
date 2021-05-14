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
// ["calinsuredRelationship", "payPeriod", "insuredBirthday"],
// 联动组件
const rules = [
    ['0-50','51-55','56-60','61-65', '66-70'],
    ['18-51', '52-56','57-60'],
    ['Y', 'N'],
    ['1', '2','11','12']
];

// 被保人与缴费期间关系
var insured = {
    '0-50': [{value: "SP",display:'show'},{value: "Y3",display:'show'},{value: "Y5",display:'show'},{value: "Y10",display:'show'},{value: "Y15",display:'show'},{value: "Y20",display:'show'}],
    '51-55': [{value: "SP",display:'show'},{value: "Y3",display:'show'},{value: "Y5",display:'show'},{value: "Y10",display:'show'},{value: "Y15",display:'show'},{value: "Y20",display:'hide'}],
    '56-60': [{value: "SP",display:'show'},{value: "Y3",display:'show'},{value: "Y5",display:'show'},{value: "Y10",display:'show'},{value: "Y15",display:'hide'},{value: "Y20",display:'hide'}],
    '61-65': [{value: "SP",display:'show'},{value: "Y3",display:'show'},{value: "Y5",display:'show'},{value: "Y10",display:'hide'},{value: "Y15",display:'hide'},{value: "Y20",display:'hide'}],
    '66-70': [{value: "SP",display:'show'},{value: "Y3",display:'hide'},{value: "Y5",display:'hide'},{value: "Y10",display:'hide'},{value: "Y15",display:'hide'},{value: "Y20",display:'hide'}],
}
// 投保豁免时，投保人年龄与缴费年期关系
var holder = {
    '18-51': [{value: "SP",display:'hide'},{value: "Y3",display:'show'},{value: "Y5",display:'show'},{value: "Y10",display:'show'},{value: "Y15",display:'show'},{value: "Y20",display:'show'}],
    '52-56': [{value: "SP",display:'hide'},{value: "Y3",display:'show'},{value: "Y5",display:'show'},{value: "Y10",display:'show'},{value: "Y15",display:'show'},{value: "Y20",display:'hide'}],
    '57-60': [{value: "SP",display:'hide'},{value: "Y3",display:'show'},{value: "Y5",display:'show'},{value: "Y10",display:'show'},{value: "Y15",display:'hide'},{value: "Y20",display:'hide'}],
}
// 合并holder和insured，去交集
var merge = function(arr1 = [],arr2 = []){
    return arr1.map(({value,display},i) => ({value, display: display === 'show' && arr2[i].display === 'show' ? 'show' : 'hide'}))
}

/**
 * 
 * @param {*} arr 笛卡尔积，二维数组
 * @returns 
 */
var output = function(arr = []){
    return arr.reduce((res, keys = []) => {
        var insuredAge = keys[0],
            holderAge = keys[1],
            huomian = keys[2],
            benren = keys[3];
        let items;
        if(benren == '1'){
            items = insured[insuredAge];
        }else if (huomian === 'Y') {
            items = merge(insured[insuredAge], holder[holderAge]);
        }
        if(items){
            res[keys.toString()] = {
                "action": ["setItem"],
                "attr": "value",
                items
            }
        }
        return res;
    },{})
}

const json = output(cartesian(rules))
console.log(JSON.stringify(json))