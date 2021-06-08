���� ���� ������Ʈ �ڵ带 �����ϸ鼭 Receiving ��Attempted import error:�� in react app ��� ������ �����Ͽ���.

import { combineReducers } from '../../store/reducers';
�� ó�� import�� �ϴ� ���� �ƴ� �Ʒ��� ����

import combineReducers from '../../store/reducers';

{}���� import�� �ϴ� ��� �ذ�Ǵ� ��������.

���⼭ ��� ������ � ��쿡 �߰�ȣ ���� ����ϰ� � ��쿡 ����ϴ��� �ñ�������.

���� import�� ����� �˾ƺ��� �� export�� ���Ͽ� ���� �˾ƾ��� ���� �ִ�.

#### export & import

export���� �������� ����� �ִµ� �̿� ���� import�� �� �� �߰�ȣ�� ��뿩�ΰ� �����ȴ�.
��� ���ø� ����

1. ���� �� ��������

```
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
```

2. ����� ������ ��������

```
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`Bye, ${user}!`);
}

export {sayHi, sayBye};
```

1���� 2���� ���� ��� �߰�ȣ�� ����Ͽ� import �Ѵ�.

```
import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!
```

�������� ����� ���� ���� \*�� ����Ͽ� �ѹ��� ������ �� �ִ�.

```
import * as say from './say.js';

say.sayHi('John');
say.sayBye('John');
```

�̸��� ���� �ٸ� �̸����� �������� ���� ���

```
import {sayHi as hi, sayBye as bye} from './say.js'
```

��ó�� sayHi�� ª�� hi sayBye�� ª�� bye�� �������� ���� �� �� �ִ�.

##### default

��⿡�� �ΰ��� ����� �ִµ� ó���� ���� 1,2���� ���� ���� �Լ��� �����ϴ� ���̺귯�� ������ �����
�ι���� ��ü �ϳ��� ����Ǿ��ִ� ����Դϴ�.

�ι�°�� ���� ��� export default�� �����ϴµ� �̸� ����ϸ� �ش� ��⿡ ��ü�� �ϳ��� �ִٴ� ���� �� �� �ֽ��ϴ�.
�̷��� ��� import�� �ϴ� ��� �߰�ȣ�� ��������ʰ� import�� �� �ֽ��ϴ�.
