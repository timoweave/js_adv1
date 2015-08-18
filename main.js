function UnderScore() {
    return this;
}

UnderScore.prototype.map = function (data, callback) {
    var new_items = [];
    for (var i = 0; i < data.length; i++) {
        var item = callback(data[i]);
        new_items.push(item);
    }
    return new_items;
};

UnderScore.prototype.reduce = function (data, callback) {
    var copied_data = data;
    var result = copied_data.pop();
    for (var i = 0; i < copied_data.length; i++) {
        var item = copied_data[i];
        result = callback(item, result);
    }
    return result;
};

UnderScore.prototype.find = function (data, callback) {
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (callback(item)) {
            return item;
        }
    }
    return; /* undefined */
};

UnderScore.prototype.filter = function (data, callback) {
    var new_items = [];
    for (var i = 0; i < data.length; i++) {
        var item = data[i];
        if (callback(item)) {
            new_items.push(item);
        }
    }
    return new_items;
};

UnderScore.prototype.reject = function (data, callback) {
    
};

var items1 = [6, 5, 4, 3, 2, 1];

console.log(items1);

var _ = new UnderScore();

_.map(items1, function(num) {
    console.log(num);
});

var evens = _.filter(items1, function(num) {
    return num % 2 == 0;
});
console.log(evens);

var sum = _.reduce(items1, function(num, result) {
    return num + result;
});
console.log(sum);

var i = _.find(items1, function(num) {
    return (num == 4);
});

console.log(i);
