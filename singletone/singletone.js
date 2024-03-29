// Подход, когда класс может иметь только один экземпляр и есть какая-то точка доступа к этому экземпляру.

var counterModule = (function() {
    var instance,
        counter = 0;

    var getCounter = function() {
        return counter;
    };

    var increaseCounter = function() {
        counter++;
    };

    var createInstance = function() {
        return {
            getCounter: getCounter,
            increaseCounter: increaseCounter
        };
    };

    return {
        getInstance: function() {
            return instance || (instance = createInstance());
        }
    };
})();
console.log(counterModule.getInstance().getCounter());
counterModule.getInstance().increaseCounter();
console.log(counterModule.getInstance().getCounter());
