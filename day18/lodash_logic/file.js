function chunk(arr1, size) {
    var a = [];
    for (var i = 0; i < arr1.length; i += size) {
        var b = [];
        for (var j = i; j < (size + i); j++) {
            if (arr1[j]) {
                b.push(arr1[j]);
            }
        }
        a.push(b);
    }
    console.log('Chunk:', a);
}
chunk([1, 2, 5, 3, 5, 6, 65, 5], 3);
function find(obj1) {
    obj1.forEach(function (ele) {
        if (!ele.active) {
            console.log('Find:', ele.user);
        }
    });
}
find([
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false },
    { 'user': 'pebbles', 'age': 1, 'active': true }
]);
function sum(arr2) {
    var s = 0;
    for (var i = 0; i < arr2.length; i++) {
        s += arr2[i];
    }
    console.log('sum:', s);
}
sum([2, 5, 3, 45, 6]);
function red(arr3) {
    var sum = arr3.reduce(function (acc, val) {
        return acc + val;
    }, 0);
    console.log('reduce:', sum);
}
red([2, 12, 5, 6, 5, 8]);
function fil(obj2) {
    obj2.filter(function (ele) {
        if (ele.active) {
            console.log('filter:', ele.user);
        }
    });
}
fil([
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
]);
