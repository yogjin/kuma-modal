# [KumaModal 모달 라이브러리](https://www.npmjs.com/package/kuma-modal?activeTab=readme)

간단한 모달을 구현할 수 있는 React 전용 라이브러리입니다.

## 설치 방법

```sh
npm i kuma-modal
```

## 사용 방법

### MyModal 컴포넌트 불러오기

```tsx
import { KumaModal } from 'kuma-modal';
```

### KumaModal 사용하기

```jsx
<KumaModal active>
  <h2>제목</h2>
  <p>내용</p>
</KumaModal>
```

## Props

active: 모달 창 열림 여부
children: 모달 내부에 들어갈 컨텐츠입니다.

```ts
type Props = {
  active: boolean;
  children?: React.ReactNode;
};
```

## 사용 예시

```ts
import { KumaModal } from 'kuma-modal';

function App() {
  return (
    <div>
      <KumaModal active>
        <h2>제목</h2>
        <p>내용</p>
      </KumaModal>
    </div>
  );
}

export default App;
```
