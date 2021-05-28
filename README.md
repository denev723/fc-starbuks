# 마크다운 문법 학습하기

## 마크다운 소개

## 마크다운 문법

### 제목

*동해물*과 **백두산**이 ~~마르고~~ <u>닳도록</u>

### 목록

#### 라면 끓이는 법
1. 라면을 구입
1. 물을 끓인다
1. 라면을 넣는다
1. 맛있게 끓인다
1. 맛있게 먹는다

#### 과일 목록
- 사과
- 파인애플
- 딸기
- 오렌지
- 망고

### 링크

[GOOGLE](https://google.com)<br >
[NAVER](https://naver.com "링크 설명(title)을 작성하세요.")<br/>
[상대적 참조](../users/login)<br>

[구글](https://google.com)에 [마크다운(Markdown)](https://heropy.blog/2017/09/30/markdown)을 검색하세요<br />

[Dribbble link][Dribbble link]

구글 홈페이지: https://google.com<br >
네이버 홈페이지: <https://naver.com>

[Dribbble link]: https://dribbble.com

### 이미지
![대체 텍스트](https://www.gstatic.com/webp/gallery/5.jpg "링크 설명(title)을 작성하세요")

#### 이미지 링크
[![logo][logo]](https://google.com)

[logo]: https://www.gstatic.com/webp/gallery/2.jpg "To go kayaking"

### 코드 강조

#### 인라인 강조

`background`혹은 `background-image` 속성으로 배경 이미지를 삽입할 수 있습니다.

#### 블록 코드 강조

```html
<a href="https://www.google.co.kr" target="_black">GOOGLE</a>
```
```css
.list > li {
  position: absolute;
  top: 40px;
}
```
```javascript
function func() {
  var a = 'AAA';
  return a;
}
```
```bash
$ vim ./~zshrc
```
```python
s = "Python syntax highlighting"
print(s)
```

### 표
| 값 | 의미 | 기본값 |
| :--- | :---: | ---:|
| `static` | 유형(기준) 없음 / 배치 불가능 | `static` |
| `relative` | 요소 `자신`을 기준으로 배치 |  |
| `absolute` | 위치 상 `**부모(조상)요소**`를 기준을 배치 |  |
| `fixed` | **브라우저 창**을 기준으로 배치 |  |

<br>

### 인용문
> 남의 말이나 글에서 직접 또는 간접으로 따온 문장.
> _(네이버 국어 사전)_

> 인용문을 작성하세요!
> > 중첩된 인용문을 만들 수 있습니다.
> > > 중첩된 인용문 1<br>
> > > 중첩된 인용문 2<br>
> > > 중첩된 인용문 3<br>

<br>

### 원시 HTML
<u>마크다운에서 지원하지 않는 기능</u>을 사용할 때 유용하며  대부분 잘 동작합니다.

<img width="150" src="https://www.gstatic.com/webp/gallery/4.jpg" alt="Prunus" title="A Wild Cherry (Prunus avium) in flower" style="border-radius: 4px">

![Prunus](https://www.gstatic.com/webp/gallery/4.jpg)

### 수평선

---
나나나
***
너너너
___
