```
const a = {a:1,b:2,c:3}
const b = {a:1,b:2,c:3}
const cloneA = a
```

a === b �׸��� a === cloneA �� ����� ���?
a === b�� false
a === cloneA�� true�̴�

ó���� �̰��� ���� �������� ���ߴ�.

cloneA�� {a:1,b:2,c:3} ���ٵ� �� �� ����� true�� false�� ������ �ɱ� �����ߴ�.

�� ������ cloneA.a = 2�� �� �� �� �� �־���.

ó�� ������ �����

```
const a = {a:1,b:2,c:3}
const b = {a:1,b:2,c:3}
const cloneA = a

cloneA.a = 2

console.log(a) // {a:1,b:2,c:3}
console.log(b) // {a:1,b:2,c:3}
console.log(cloneA) // {a:2,b:2,c:3}
```

������

```
const a = {a:1,b:2,c:3}
const b = {a:1,b:2,c:3}
const cloneA = a

cloneA.a = 2

console.log(a) // {a:2,b:2,c:3}
console.log(b) // {a:1,b:2,c:3}
console.log(cloneA) // {a:2,b:2,c:3}
```

�� ���Դ�

�̸� ���� �� �� �ִ� ���� ��ü�� ���� a�� ��� ���� �ƴ� ��ü�� �ּҰ��� a�� �����ٴ� ���� �� �� �־���.
�׷��� ������ cloneA�� a�� ���� �ּҰ��� ������ �ǰ� cloneA�� �����ϸ� �̰� a�� ȣ���ص� ����� ���ٴ� ���̴�.

�׷��ٸ� object �񱳴� ��� �ؾ��ұ�

JSON.stringify�� ����ϸ� �̸� �ذ��� �� �ִ�.

JSON.stringify�� ��ü �迭 ���ڿ� ���� ��� ���ڿ��� �����ִ� ������ �ϱ⶧���� �� ��ü�� ���ڿ��� ���� �� ���ϸ�ȴ�.

JSON.stringify(a)===JSON.stringify(b)

�׷��ٸ� �ڵ带 ¥�ٰ� ��ü�� ������ ���� ���� ���� ��� �ؾ� ��ü�� �����ϰ� ����� ��ü�� �����ص� ���� ��ü�� ������������ �� ������?

const cloneObj = obj => JSON.parse(JSON.stringify(obj))
const cloneA = cloneObj(a)

�̸� ���� cloneA�� a�� �����ϸ� ���ڿ��� ����Ǿ��ٰ� �ٽ� ��ü�� ��ȯ�ϱ⶧���� a�� ���� ������ �������ϴ�.
������ ������ �����ʴٰ��մϴ�.
