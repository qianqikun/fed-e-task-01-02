# 钱其琨 ｜ Part 1 | 模块二

## 简答题

### 第一题

* 优点
  * 发现垃圾时立即回收
  * 最大限度减少程序暂停
* 缺点
  * 无法回收循环引用的对象
  * 时间开销大
    * 当前的引用计数需要维护一个引用数，如果内存中有更多需要监控的对象，就会有更多的引用数，需要更多的时间来修改

### 第二题
* 标记整理可以看作是标记清除的增强
* 遍历所有对象找标记活动对象
* 对所有对象进行整理，使活动对象的地址连续
* 最后执行清除未标记的对象，使内存最大化

### 第三题
* 回收过程采用复制算法+标记整理
* 新生代内存分为两个等大小空间
* 使用空间为From，空闲空间为To
* 活动对象储存于From空间
* 标记整理后将活动对象拷贝值To
* From 与 To 交换空间完成释放

### 第四题
* 增量标记主要是在V8引擎中的老生代回收时使用，用来提升效率。
* 具体操作是：将一整段的垃圾回收操作，拆分成多步完成，从而替代一次性的垃圾回收操作。用来减少垃圾回收产生的线程阻塞。

## 代码题1

### 练习1
```javascript
const isLastInStock = fp.flowRight(fp.prop('in_stock'), fp.last)
```
### 练习2
```javascript
const isFirstName = fp.flowRight(fp.prop('name'), fp.first)
```
### 练习3
```javascript
const avaergeDollarValue2 = fp.flowRight(_average, fp.map(car => car.dollar_value))
```
### 练习4
```javascript
const sanitizeNames = fp.map(fp.flowRight(_underscore, fp.toLower))
```
## 代码题2
### 练习1
```javascript
const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let maybe = Maybe.of([5, 6, 11])
let ex1 = function (num) {
    return function (func) {
        return func.map(fp.map(fp.add(num)))
    }
}
console.log(ex1(1)(maybe))
```
### 练习2

```javascript
const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let xs = Container.of(["do", "try", "me", "fa", "so", "la", "ti", "do"])

let ex2 = function (func) {
    return func.map(fp.first)._value
}
console.log(ex2(xs))
```
### 练习3
```javascript
const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let safeProp = fp.curry(function (x, o) {
    return Maybe.of(o[x])
})
let user = { id: 2, name: "Albert" }
let ex3 = function (obj, prop) {
    return safeProp(prop)(obj).map(fp.first)._value
}
console.log(ex3(user, "name"))
```
### 练习4
```javascript
const fp = require("lodash/fp")
const { Maybe, Container } = require("./support")

let ex4 = function (n) {
    return Maybe.of(n).map(parseInt)._value
}
```

## 项目文件说明
- notes: 笔记
- code : 作业代码
