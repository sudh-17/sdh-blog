# React 知识点总结

## useMemo 性能优化

`useMemo` 是 React 渲染过程中的性能优化工具。适用于父组件更新时，子组件的重新渲染计算量较大且结果可复用的情况。使用 `useMemo` 可以提升性能，避免不必要的重新渲染。

**应用场景：**

`useMemo` 应在必要时使用，原因如下：

1. `useMemo` 本身有性能消耗，缓存消耗内存，其状态的维护也有性能开销。
2. `useMemo` 会增加开发成本，使代码复杂且难以维护。
3. React 官方未来可能会取消 `useMemo` 这个钩子。

**示例：**

```jsx
import { Button } from 'antd';
import React from 'react';

// 模拟昂贵的计算
function expensiveFn(count) {
  let sum = 0;
  console.time('昂贵计算耗时');
  for (let i = 0; i < 1000000000 * count; i++) {
    sum += i;
  }
  console.timeEnd('昂贵计算耗时');
  return sum;
}

export default function Memo1() {
  const [count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="px-10 py-15">
      <div>
        <Button onClick={handleClick}>增加</Button>
        <span>{count}</span>
      </div>
      <div className="my-12">
        <Child />
      </div>
    </div>
  );
}

function Child() {
  const [count, setCount] = React.useState(0);
  const expensiveCalc = React.useMemo(() => expensiveFn(count), [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="py-15">
      <div>
        <div className="flex gap-2">
          <Button onClick={increment}>增加</Button>
          <Button onClick={decrement} className="ml-5">
            减少
          </Button>
        </div>
        <div className="flex gap-4">
          <span>{count}</span>
          <span>{expensiveCalc}</span>
        </div>
      </div>
    </div>
  );
}

```

## React.memo

`React.memo` 可以阻止父组件渲染引起的子组件（组件本身）更新。它通过对比前后 props 是否相同，来决定是否重新渲染子组件。

**示例：**

```jsx
import React from 'react';

const ChildComponent = React.memo(({ name }) => {
  console.log('Child Component Render');
  return <div>{name}</div>;
});

export default ChildComponent;
```

## useCallback

`useCallback` 可以对函数进行缓存，防止在每次渲染时都创建新的函数实例。

**示例：**

```jsx
import React, { useState, useCallback } from 'react';

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button Clicked');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <ChildComponent onClick={handleClick} />
    </div>
  );
};

const ChildComponent = React.memo(({ onClick }) => {
  console.log('Child Component Render');
  return <button onClick={onClick}>Click Me</button>;
});

export default ParentComponent;
```

## useMemo 和 useCallback 的区别

`useMemo` 用于缓存数据，`useCallback` 用于缓存函数。两者的区别仅在于用途不同，目的是为了代码可读性。

## useTransition 用户体验优化

`useTransition` 展示了 React 比 Vue 更强大的地方之一，主要用于性能和用户体验优化。特性包括并发更新（fiber 架构），自 React 16.8 版本后引入。

**示例：**

```jsx
import { Button } from 'antd';
import React, { useTransition } from 'react';

export default function UseTransitionDemo() {
  const [tab, setTab] = React.useState(0);
  const [isPending, startTransition] = useTransition();

  const handleClick = index => {
    // useTransition 优化
    startTransition(() => {
      setTab(index);
    });
  };

  return (
    <div className="px-10 pt-10">
      <header>
        <div className="flex gap-6">
          <Button onClick={() => handleClick(0)}>选项卡1</Button>
          <Button onClick={() => handleClick(1)}>渲染耗时</Button>
          <Button onClick={() => handleClick(2)}>选项卡3</Button>
        </div>
        <div className="my-12">
          {tab === 0 && <Tab1 name="选项卡1" />}
          {tab === 1 && <Tab2 />}
          {tab === 2 && <Tab1 name="选项卡3" />}
        </div>
      </header>
    </div>
  );
}

function Tab1(props) {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
}

function Tab2() {
  const list = [];

  Array(100)
    .fill(0)
    .forEach((_, index) => {
      list.push({
        id: index,
        title: `标题${index}`,
      });
    });

  return (
    <div>
      {list.map(item => (
        <Item key={item.id} title={item.title} />
      ))}
    </div>
  );
}

function Item(props) {
  // 模拟耗时任务
  const now = Date.now();
  while (Date.now() - now < 20) {
    // do nothing
  }

  return (
    <div>
      <h1> {props.title}</h1>
    </div>
  );
}
```

## 性能优化之 useDeferredValue

`useDeferredValue` 的作用是使用变量导致的渲染降级，它允许React延迟更新某个特定值在屏幕上的显示，从而使用户界面能够更快地响应用户的输入或其他即时更新。

**示例：**

```jsx
import { Input } from 'antd';
import { memo, useDeferredValue, useState } from 'react';

function MyList({text}) {
  const items = Array(250)
    .fill(0)
    .map((_, index) => {
      return <MyListItem key={index} text={text} />;
    });
  return <div className="p-5">{items}</div>;
}

const MyListItem = ({ text }) => {
  // 模拟耗时任务
  const now = Date.now();
  while (Date.now() - now < 2) {
    // do nothing
  }
  return <div>list item haha {text}</div>;
};

const MyList2 = memo(MyList);
// 首字母要大写，否则上面的子组件告警
export default function UseDeferredValueDemo() {
  const [text, setText] = useState('');

  const deferredText = useDeferredValue(text);

  return (
    <div className='p-6'>
      <Input value={text} onChange={e => setText(e.target.value)} />
      <MyList2 text={deferredText} />
    </div>
  );
}
```


**useTransition 和 useDeferredValue 的区别**

`useTransition` 和 `useDeferredValue` 解决的问题相同，但应用场景略有不同：

- `useDeferredValue` 适用于组件接收的 Props 参数导致的渲染缓慢的优化。
- `useTransition` 适用于组件内部的优化。

## useDebugValue 的作用

`useDebugValue` 可以利用调试工具进行组件级别的调试，将调试信息集中在一起，使得调试更方便。建议开启严格模式。

**示例：**

```jsx
import React, { useDebugValue, useState, useEffect } from 'react';

const useCustomHook = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(v => v + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useDebugValue(value > 5 ? 'High' : 'Low');

  return value;
};

const Component = () => {
  const value = useCustomHook();
  return <div>{value}</div>;
};

export default Component;
```

## useId

`useId` 用于生成唯一不重复的 `id`，在同一位置每次渲染都保持一致。

**示例：**

```jsx
import React, { useId } from 'react';

const Form = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Username:</label>
      <input id={id} type="text" />
    </div>
  );
};

export default Form;
```

## useRef 与 useImperativeHandle

函数组件本身无法挂载 `Ref`，此时需要使用 `React.forwardRef` 进行 `Ref` 转发，并结合 `useImperativeHandle` 自定义暴露给父组件的实例值。

**示例：**

```jsx
import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));

  return <input ref={inputRef} />;
});

const ParentComponent = () => {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
};

export default ParentComponent;
```