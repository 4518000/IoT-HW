1-1 <br/> 변수 a 선언

1-2 <br/> 변수 a 선언 <br/> 변수 a에 abc 할당

1-3 <br/> 변수 a 선언 후 abc 할당 <br/> a에 def 추가 <br/> 변수 b 선언 후 5 할당 <br/> 변수 c 선언 후 5 할당 <br/> 변수 b에 7 할당

1-4 <br/> 참조형 데이터 obj1의 property a, b에 1과 bbb 할당

1-5 <br/> 참조형 데이터 obj1의 property a를 2로 재할당

1-6 <br/> 참조형 데이터 obj의 property x와 array에 3과 3, 4, 5 할당

1-7 <br/> 변수 a에 10 할당 <br/> 변수 a를 b에 복사 <br/> obj1 할당 후 obj2 복사

1-8 <br/> 1-7과 같은 상황에서 변수 b의 값을 15로 변경 <br/> obj2의 property c를 20으로 변경

1-9 <br/> 1-8과는 다른 방법으로 참조형 데이터 obj2의 c를 20으로 변경

1-10 <br/> changeName이라는 함수로 user의 이름을 바꾸려고 함 <br/> 하지만 이전 이름을 알 수 없는 문제가 발생

1-11 <br/> changeName 함수가 user와는 다른 property를 가리키도록 함 <br/> user와 user2의 이름이 다른 것을 알 수 있음

1-12 <br/> 기존 object의 정보를 복사하여 새로운 객체를 반환하는 함수 <br/> 새로운 object의 주소를 return함

1-13 <br/> 1-12의 함수를 사용하여 user의 정보를 user2에 복사하고 <br/> user2의 name property를 Jung으로 변경

1-14 <br/> user의 properties를 copyObject 함수를 통해 user2에 복사한 뒤 <br/> user2의 이름을 Jung으로 변경하고 urls의 portfolio를 변경 <br>
이름은 변경되었고 porfolio도 변경되었으나 서로 같음 (Shallow copy)

1-15 <br/> user의 properties를 user2로 복사하고 user의 urls도 따로 복사 <br/> 원하던대로 제대로 변경된 모습

1-16 <br/> 깊은 복사 (Deep copy)

1-17 <br/> 깊은 복사를 통해 obj2의 properties를 변경 <br/> 그 중에는 b와 같이 c, d를 포함하는 property도 있음

1-18 <br/> JSON 문법으로 표현된 문자열로 전환했다가 다시 JSON 객체로 바꾸는 깊은 복사

1-19 <br/> 값을 대입하지 않은 변수 a를 찍으면 undefined 출력 <br/> a만을 property로 가지는 obj의 존재하지 않는 property b를 찍으면 ReferenceError 출력 <br/> 반환 값이 없는 함수 c를 찍으면 undefined 출력

1-20 <br/> 크기 3의 빈 arr1를 선언하고 찍어보면 빈 배열 출력 <br/> 크기가 3인 배열 arr2를 생성하여 찍어보면 역시 빈 배열를 출력 <br/> undefined로 채운 배열을 선언한 뒤 찍어보면 [undefined, undefined, undefined] 출력 (사용하지 말것)

1-21 <br/> arr1과 arr2 선언 후 각각에 [undefined, 1], [empty, 1] 할당 <br/> arr1.forEach로 undefined 0, 1 1 출력, arr2.forEach로 1 1 출력 <br/> arr1.map으로 새로운 배열 [NaN(undefined+0), 2(1+1)] 생성, arr2.map으로는 [empty, 2(1+1)] 생성 <br/> arr1.filter로 [undefined] 생성, arr2.filter로 [] 생성 <br/> reduce로 string 합치기를 통해 각각 undefined011 (p=undefined0, c=1, i=1)와 11 (c-1, i=1) 출력

1-22 <br/> null과 object는 모두 값이 없음을 나타내기 때문에 == 연산자를 사용하면 같다고 나옴 <br/> 하지만 그 둘은 data type이 다르기 때문에 더 엄격한 === 연산자를 사용하여 비교하면 다르다고 나옴


---
2-01 <br/> hoisting으로 var a만 선언된 상태라서 undefined가 나옴 <br/> call stack에 쌓인 global, outer, inner context에 따라 1, 1을 출력

2-02 <br/> console.log(1);에서 1을 출력, line 4도 마찬가지 <br/> x에 2가 할당되어 console.log(2);에서 2를 출력

2-03 <br/> 1, 1, 2를 출력

2-04 <br/> 1, 1, 2를 출력

2-05 <br/> function b() {}가 마지막에 hoisting 되어서 첫 console.log(b)는 function b()를 출력 <br/> 이후 b에 'bbb'가 할당되어 bbb, bbb 출력

2-06 <br/> 2-05와 같이 function b를 출력하고 bbb, bbb가 출력됨

2-07 <br/> 똑같이 function b를 출력, bbb, bbb 출력

2-08 <br/> 함수 선언문과 함수 표현식, 기명 함수 표현식은 모두 실행 <br/> d는 정의되지 않았기 때문에 ReferenceError

2-09 <br/> 함수 선언문과 함수 표현식 중 함수 표현식을 사용해야 함

2-10 <br/> multiply 함수는 hoisting 되지 않아서 console.log(multiply(3,4));에서 에러 발생

2-11 <br/> line 9의 sum이 마지막으로 hoisting 되어서 해당 함수의 결과가 나타남

2-12 <br/> sum이 함수가 아니라는 에러 발생\

2-13 <br/> hoisting에서 선언만 해놓은 a는 undefined를 출력 <br/> 1, 1을 차례로 출력

2-14 <br/> global context에서 var a, var outer를 hoisting <br/> outer context에서 var b, var inner를 hoisting <br/> console.dir(inner);으로 f() { console.dir(inner);} 출력

2-15 <br/> 2 출력 후 inner 함수 출력

2-16 <br/> 코드의 breakpoint에 debugger 삽입


---
3-01 <br/> 전역공간에서 this는 전역 객체를 가리키는데 <br/> 브라우저 환경에서는 window, Node.js 환경에서는 global이 전역객체임

3-02 <br/> 3-01에서 언급했듯 Node.js 환경에서는 line 3이 true

3-03 <br/> 자바스크립트의 모든 변수는 특정 객체의 property로 동작 <br/> 전역공간에서 선언한 var a는 window와 this에서 모두 1을 출력

3-04 <br/> 3-03과 마찬가지

3-05 <br/> 전역 객체의 property로 할당하면 delete 되지만 전역 변수로 선언한 경우는 delete 되지 않음

3-06 <br/> var func는 함수로 호출되어 this는 전역을 가리키므로 window <br/> obj.method(2)는 obj가 호출했기 때문에 method 출력

3-07 <br/> method로서 호출하는 방법에는 .표기법과 [''] 표기법이 있음

3-08 <br/> line 11, 12에서의 this는 obj <br/> line 14~17에서의 this는 obj.inner

3-09 <br/> line 15의 this는 obj1 <br/> innerFunc()는 전역함수로 호출 <br/> obj2.innerMethod()의 this는 obj2

3-10 <br/> obj.outer()의 this는 obj <br/> innerFunc1()의 this는 global <br/> innerFunc2의 this는 obj <br/> 변수에 this를 할당시키면 다른 this 값 사용 가능

3-11 <br/> 화살표 함수를 사용할 때 this가 포함되면 scope chain을 따라 this를 찾음

3-12 <br/> 다른 함수에 argument로 전달해주는 함수는 callback 함수

3-13 <br/> 변수 choco에 new로 name에 초코, age에 7이 들어감 <br/> 변수 nabi의 name에 나비, age에 5가 들어감

3-14 <br/> func의 {x:1}을 this로, 4, 5, 6을 argument로 사용

3-15 <br/> {a:4}가 this

3-16 <br/> call과 달리 apply는 2번째 인자를 array형태로 줘야함

3-17 <br/> array-like object에서 array instance만 사용할 수 있는 array.prototype의 push 함수 <br/> line 7은 push의 this를 obj로 지정, 3 : 'd'를 추가, length를 4로 변경하라는 의미 <br/> slice 함수는 array-like나 array를 복제하여 array로 나타냄

3-18 <br/> nodeList는 array-like, nodeArr에는 array <br/> foreach는 for loop와 비슷하게 function을 반복하여 call

3-19 <br/> string type은 immutable(read only)라서 push 불가 <br/> line 16의 map 함수는 모든 array인자 뒤에 !가 추가되고 string에서 array로 만들어짐 <br/> line 21의 reduce 함수는 return 값이 string이면 string 출력

3-20 <br/> array-like obj를 Array.from 하면 array로 바뀜

3-21 <br/> this가 만들어지고 Person의 this로 활용 후 name과 gender를 copy하고 school(company) 만듦

3-22 <br/> forEach로 array의 값들을 대입하여 max와 min을 결정

3-23 <br/> Math.max와 Math.min 사용 가능 <br/> Math.max를 this로 만들어서 apply 적용 (this를 Null로 적음)

3-24 <br/> spreading operator ...를 사용하면 array를 인자로 펼침

3-25 <br/> bind를 사용하면 func 함수의 this {x:1} 뒤에 오는 숫자 배열이 순서대로 인자로 들어감

3-26 <br/> func.name을 찍으면 func를 출력 <br/> bindFunc.name을 찍으면 bound func를 출력

3-27 <br/> 잘 이해되지 않습니다.

3-28 <br/> 잘 이해되지 않습니다.

3-29 <br/> scope chain을 따라 this를 찾음

3-30 <br/> line 15에서 입력받은 add 함수의 60, 85, 95를 더하여 sum에 할당 <br/> count에는 개수 할당 <br/> average 함수는 sum을 count로 나눔

3-31 <br/> 잘 이해되지 않습니다.


---
4-01 <br/> 0.3초마다 count 값을 출력하고 1씩 증가 시킴 <br/> count가 4를 초과하면 타이머가 멈추고 실행 종료

4-02 <br/> 4-01과 같지만 콜백 함수를 setInterval의 인자로 전달

4-03 <br/> map 메서드가 호출되어 newArr의 인자와 인덱스를 출력 <br/> 각 currnetValue에 5를 더한 뒤 newArr를 출력

4-04 <br/> map 메서드의 콜백 함수에서 첫 번째 매개변수는 currentValue이어야 함 <br/> 매개변수 순서가 잘못되어 newArr2로 index에 5를 더한 [5, 6, 7] 출력

4-05 <br/> Array.prototype.map에 익명함수를 할당하여 map 메서드 정의 <br/> 초기화된 mappedArr에 콜백함수의 반환값 mappedValue를 할당

4-06 <br/> 지정된 시간 후 콜백함수 실행 <br/> 배열 각 요소에 대해 콜백함수 실행 <br/> 버튼 클릭 시 실행

4-07 <br/> obj.logvalues를 메서드로 호출하면 this가 obj 객체를 참조 <br/> forEach 메서드를 콜백함수로 사용하면 this가 전역 객체 window를 참조

4-08 <br/> obj1.func()는 obj1의 func 실행 <br/> 1초 뒤에 콜백이 실행되며 obj1 출력

4-09 <br/> 콜백함수 내부에서 this를 사용하지 않고 4-08과 같은 결과 출력

4-10 <br/> obj2.func()에서 obj2 객체의 func 메서드가 실행되고 obj1.name을 출력

4-11 <br/> obj1.func.bind(obj1)은 1초 후에 실행 <br/> obj1이 1초 후 출력되고 1.5초 후에 obj2가 출력

4-12 <br/> setTimeout을 중첩하여 실행한 뒤, coffeeList 변수로 커피리스트 누적하여 출력

4-13 <br/> coffeeList를 0.5초 간격으로 순차적으로 추가한 뒤 출력 <br/> 출력은 4-12와 같음

4-14 <br/> then 메서드는 이전 단계의 Promise가 이행될 때 다음 단계의 콜백함수에 인자를 전달 <br/> resolve는 Promise의 상태를 변경하고 설정 <br/> 출력은 4-12와 같음

4-15 <br/> line 5에서 newName는 prevName이 없으면 name을, 있으면 prevName + ', ' + name을 할당

4-16 <br/> yield 키워드를 사용하여 coffeeGenerator 함수를 제어함 <br/> addCoffee 함수 내부에서 Promise 객체를 사용한 뒤 resolve 함수를 호출하여 결과 전달

4-17 <br/> async 키워드로 정의된 coffeeMaker 함수에서 _addCoffee를 정의 <br/> async 키워드로 정의된 _addCoffee 함수는 addCoffee를 호출하고, await 키워드를 통해 return 값을 coffeeList에 추가


---
5-01 <br/> outer 함수에서 변수 a에 1 할당, inner 함수 정의 <br/> inner 함수는 scope chain을 따라 a를 참조하고 outer를 호출하면 2를 출력

5-02 <br/> outer2에는 outer 함수의 반환값인 2가 할당됨

5-03 <br/> outer 함수가 실행될 때마다 a의 반환값은 1씩 증가 <br/> outer 함수는 inner 함수를 반환하므로 inner 함수는 outer 함수 스코프에 접근할 수 있는 클로저가 됨

5-04 <br/> 두 함수는 즉시 실행 함수 <br/> setInterval을 사용해 1초마다 inner 함수를 실행하여 1부터 10까지 출력 <br/> 두번째 함수 이벤트 리스너에 등록된 이벤트 핸들러가 클릭을 감지하여 클릭 횟수를 표기

5-05 <br/> 첫번째 함수는 outer의 inner 함수 참조를 끊음 <br/> 두번째 함수는 a가 10보다 커졌을 때 inner를 null로 설정하여 함수의 참조를 끊음 <br/> 세번째 함수는 이벤트 리스너를 등록하고 count가 10보다 커지면 이벤트 리스너를 제거하고 clickHandler의 참조를 null로 설정하여 참조를 끊음

5-06 <br/> 과일의 list를 생성하고 선택한 과일을 알림창으로 표시 <br/> 동적으로 HTML 요소를 생성하는 방법을 보여줌

5-07 <br/> 맨처음에 alertFruit(fruits[1])에 의해 your choice is banana라는 알림창이 뜸 <br/> 과일을 선택하면 your choice is [object PointerEvent]라는 알림창이 뜸

5-08 <br/> alertFruit 함수에 fruit 인자를 전달하기 위해 bind 함수를 사용 <br/> alertFruit.bind(null, fruit)은 alertFruit 함수에 null을 this로 설정하고 fruit 값을 첫 번째 인자로 전달하는 새로운 함수 생성

5-09 <br/> alertFruitBuilder 함수로 클로저를 생성하는 방식

5-10 <br/> car.run();을 추가하여 실행 <br/> fuel은 10에서 20 사이 값, power는 2에서 5 사이의 값, moved은 초기값 0, run은 1에서 6 사이의 값을 생성

5-11 <br/> 객체 생성 방식에서 5-10과 다름 <br/> createCar 함수를 호출하여 객체 생성

5-12 <br/> Object.freeze()로 객체를 외부에서 변경할 수 없도록 보호

5-13 <br/> bind 메서드를 사용하여 add 함수는 첫번째 인자로 null을 전달 후 인자 전달 <br/> 6, 7, 8, 9, 10 모두 더하여 55 출력

5-14 <br/> dog.greet('입니다!')를 호출하면 '왈왈, 강아지입니다!'를 반환

5-15 <br/> 잘 이해되지 않습니다.

5-16 <br/> mousemovedhk mousewheel 이벤트에 디바운스 기능을 적용

5-17 <br/> curry3은 Math.max(10, b)를 실행하여 큰값을 출력 <br/> Math.min은 작은 값을 출력

5-18 <br/> 가독성이 떨어지는 커링함수의 예시 <br/> curry5는 a, b, c, d, e 값을 비교하여 가장 큰 값을 출력


---
6-01 <br/> Person 생성자 함수로 객체 생성 후 getName 메서드로 _name 값을 얻음

6-02 <br/> console.dir(instance)를 통해 instance 객체의 정보를 출력

6-03 <br/> Array의 프로토타입 객체 Array.prototype의 constructor 속성, arr 객체의 __proto__속성의 constructor 속성, arr 객체의 constructor 속성을 확인

6-04 <br/> dataTypes 배열 생성 후 해당 객체가 NewConstructor 생성자 함수로부터 생성되었는지 확인 <br/> d instanceof는 모두 false

6-05 <br/> 객체들이 Person 생성자 함수로부터 생성되었는지 확인 <br/> 모두 Person 생성자 함수로 부터 생성되었기 때문에 각 객체와 true를 반환

6-06 <br/> Person 생성자 함수를 통해 iu 객체 생성 <br/> '바로' + getName 함수의 출력값 '바로 지금'을 출력

6-07 <br/> push를 통해 arr를 [1,2,3]으로 만듦 <br/> 배열의 요소로 2를 포함하고 있기 때문에 arr.hasOwnProperty(2)는 true

6-08 <br/> toString이 arr을 Array의 인스턴스로 취급하여 1,2 반환 <br/> arr를 Object의 인스턴스로 취급하여 [[Class]] 값을 문자열로 반환하기 때문에 [object Array] 반환

6-09 <br/> 