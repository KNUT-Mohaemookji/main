// 1. ul의 너비는 li의 개수 * 100% (ex: li가 4개 => 400%)
// 2. li의 너비는 100% / li의 개수 (ex: li가 4개 => 25%)

const all = ele => document.querySelectorAll(ele) // 없어도 잘 작동 됨,
// all은 ele이다. all의 ele는 ele의 모두를 나타냄.
const one = ele => document.querySelector(ele)
// one은 ele이다. one의 all는 ele의 일부분만 나타낸다.
const slide = _ => {
  const wrap = one('.slide') // .slide 선택
  const target = wrap.children[0] // .slide 의 바로 아래의 자식인 ul 선택 [0]이기 때문에 가장 가까운 자식 선택.
  const len = target.children.length // .slide ul의 자식인 li의 개수
  // .slide ul의 너비 조정
  target.style.cssText = `width:calc(100% * ${len}); display:flex; transition:1s;`
  // .slide li의 너비 조정
  Array.from(target.children) // target 변수의 자식을 가져온다. 즉 ul 선택.
  .forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
  let pos = 0
  setInterval(() => {pos = (pos+1) % len // 장면 선택
  target.style.marginLeft = `${-pos * 100}%` // 장면 변환
  }, 3000)
}
window.onload = function () {slide()}
