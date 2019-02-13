const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
// const firstTwoMax = ary(Math.max, 2);
// [[2, 6, 'a'], [8, 4, 6], [10]].map(x => firstTwoMax(...x)); // [6, 8, 10]

const call = (key, ...args) => context => context[key](...args);
// Promise.resolve([1, 2, 3])
//   .then(call('map', x => 2 * x))
//   .then(console.log); // [ 2, 4, 6 ]
// const map = call.bind(null, 'map');
// Promise.resolve([1, 2, 3])
//   .then(map(x => 2 * x))
//   .then(console.log); // [ 2, 4, 6 ]

const collectInto = fn => (...args) => fn(args);
// const Pall = collectInto(Promise.all.bind(Promise));
// let p1 = Promise.resolve(1);
// let p2 = Promise.resolve(2);
// let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
// Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)

const flip = fn => (first, ...rest) => fn(...rest, first);
// let a = { name: 'John Smith' };
// let b = {};
// const mergeFrom = flip(Object.assign);
// let mergePerson = mergeFrom.bind(null, a);
// mergePerson(b); // == b
// b = {};
// Object.assign(b, a); // == b

const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
// const minMax = over(Math.min, Math.max);
// minMax(1, 2, 3, 4, 5); // [1,5]

const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
// const square = n => n * n;
// const double = n => n * 2;
// const fn = overArgs((x, y) => [x, y], [square, double]);
// fn(9, 3); // [81, 6]

const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
// const sum = pipeAsyncFunctions(
//   x => x + 1,
//   x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
//   x => x + 3,
//   async x => (await x) + 4
// );
// (async () => {
//   console.log(await sum(5)); // 15 (after one second)
// })();


const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
// const add5 = x => x + 5;
// const multiply = (x, y) => x * y;
// const multiplyAndAdd5 = pipeFunctions(multiply, add5);
// multiplyAndAdd5(5, 2); // 15

const promisify = func => (...args) =>new Promise((resolve, reject) =>func(...args, (err, result) => (err ? reject(err) : resolve(result))));
// const delay = promisify((d, cb) => setTimeout(cb, d));
// delay(2000).then(() => console.log('Hi!')); // // Promise resolves after 2s

const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
// var rearged = rearg(function(a, b, c) {  return [a, b, c];},[2, 0, 1]);
// rearged('b', 'c', 'a'); // ['a', 'b', 'c']

const spreadOver = fn => argsArr => fn(...argsArr);
// const arrayMax = spreadOver(Math.max);
// arrayMax([1, 2, 3]); // 3

const unary = fn => val => fn(val);
// ['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]

const all = (arr, fn = Boolean) => arr.every(fn);
// all([4, 2, 3], x => x > 1); // true
// all([1, 2, 3]); // true

const allEqual = arr => arr.every(val => val === arr[0]);
// allEqual([1, 2, 3, 4, 5, 6]); // false
// allEqual([1, 1, 1, 1]); // true

const any = (arr, fn = Boolean) => arr.some(fn);
// any([0, 1, 2, 0], x => x >= 2); // true
// any([0, 0, 1, 0]); // true

const arrayToCSV = (arr, delimiter = ',') => arr.map(v => v.map(x => `"${x}"`).join(delimiter)).join('\n');
// arrayToCSV([['a', 'b'], ['c', 'd']]); // '"a","b"\n"c","d"'
// arrayToCSV([['a', 'b'], ['c', 'd']], ';'); // '"a";"b"\n"c";"d"'

const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
// bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]

const bifurcateBy = (arr, fn) => arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
// bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]

const chunk = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
// chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]

const compact = arr => arr.filter(Boolean);
//compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34]); // [ 1, 2, 3, 'a', 's', 34 ]

const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
// countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
// countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3

const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
// deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]

const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
// difference([1, 2, 3], [1, 2, 4]); // [3]

const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => !s.has(fn(x)));
};
// differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1.2]
// differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [ { x: 2 } ]

const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
// differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]

const drop = (arr, n = 1) => arr.slice(n);
// drop([1, 2, 3]); // [2,3]
// drop([1, 2, 3], 2); // [3]
// drop([1, 2, 3], 42); // []

const dropRight = (arr, n = 1) => arr.slice(0, -n);
// dropRight([1, 2, 3]); // [1,2]
// dropRight([1, 2, 3], 2); // [1]
// dropRight([1, 2, 3], 42); // []

const dropRightWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
  return arr;
};
// dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]

const dropWhile = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
  return arr;
};
// dropWhile([1, 2, 3, 4], n => n >= 3); // [3,4]

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
// everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]

const filterFalsy = arr => arr.filter(Boolean);
// filterFalsy(['', true, {}, false, 'sample', 1, 0]); // [true, {}, 'sample', 1]

const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]


const filterNonUniqueBy = (arr, fn) =>arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
// filterNonUniqueBy(
//   [
//     { id: 0, value: 'a' },
//     { id: 1, value: 'b' },
//     { id: 2, value: 'c' },
//     { id: 1, value: 'd' },
//     { id: 0, value: 'e' }
//   ],
//   (a, b) => a.id == b.id
// ); // [ { id: 2, value: 'c' } ]














/**
 * { 当前URL}
 *
 * @return     { String }  { 返回当前页面的（URL）路径 }
 */
export const currentURL = () => window.location.href;

/**
 * { 设备类型 }
 *
 * @return     {String}  { 返回当前设备是Mobile还是Desktop }
 */
export const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';



