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

1-14 <br/> user의 properties를 copyObject 함수를 통해 user2에 복사한 뒤 <br/> user2의 이름을 Jung으로 변경 <br>
property의 url은 그대로고 이름만 변경됨 (Shallow copy)

1-15 <br/> 