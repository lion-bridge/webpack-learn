
export const Subject = (function(){
    const namespaces = {}, _DEFAULT = '_default';
    const _registOberver = function(cache, type, ob){
        if (!cache[type]){
            cache[type] = [];
        }
        cache[type].push(ob);
    }
    const _notifyObserver = function(cache, type, ...args){
        console.log('type=',type)
        if (cache[type]){
            cache[type].forEach((cb, i) => {
                cb && cb.apply(cb, args)
            })
        }
    }
    const create = function(namepsace = _DEFAULT){
        const cache = {};

        const registOberver = function(type = _DEFAULT, ob){
            _registOberver(cache, type, ob)
        }
        const notifyObserver = function(type = _DEFAULT, ...args){
            _notifyObserver(cache, type,args)
        }
        return namespaces[namepsace] ? namespaces[namepsace] : namespaces[namepsace] = {registOberver,notifyObserver}
    }
    return {create}
})();
