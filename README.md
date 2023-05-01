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

2-01 <br/> 