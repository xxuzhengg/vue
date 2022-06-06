## reactive函数

- 作用: 定义一个<strong style="color:#DD5145">对象类型</strong>的响应式数据（基本类型不要用它，要用```ref```函数）
- 语法：```const 代理对象= reactive(源对象)```接收一个对象（或数组），返回一个<strong style="color:#DD5145">代理对象（Proxy的实例对象，简称proxy对象）</strong>
- reactive定义的响应式数据是“深层次的”。
- 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据进行操作。

## reactive对比ref

- 从定义数据角度对比：
    - ref用来定义：<strong style="color:#DD5145">基本类型数据</strong>。
    - reactive用来定义：<strong style="color:#DD5145">对象（或数组）类型数据</strong>。
    - 备注：ref也可以用来定义<strong style="color:#DD5145">对象（或数组）类型数据</strong>, 它内部会自动通过```reactive```
      转为<strong style="color:#DD5145">代理对象</strong>。
- 从原理角度对比：
    - ref通过``Object.defineProperty()``的```get```与```set```来实现响应式（数据劫持）。
    - reactive通过使用<strong style="color:#DD5145">Proxy</strong>来实现响应式（数据劫持）, 并通过<strong style="color:#DD5145">
      Reflect</strong>操作<strong style="color:orange">源对象</strong>内部的数据。
- 从使用角度对比：
    - ref定义的数据：操作数据<strong style="color:#DD5145">需要</strong>```.value```，读取数据时模板中直接读取<strong style="color:#DD5145">
      不需要</strong>```.value```。
    - reactive定义的数据：操作数据与读取数据：<strong style="color:#DD5145">均不需要</strong>```.value```。
