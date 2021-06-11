Moment.js�� ��¥ ���� ���̺귯���Դϴ�.
��¥ ������ �����͸� �Ľ�, ��ȿ�� üũ, ����, ȭ�鿡 ����� ���� �� �� �ֵ��� �����ִ� ���̺귯���Դϴ�.

��뿹��

```
import {moment} from "moment"

const time = moment()
console.log(time) //���� ��¥ ��

moment().format('YYYY YY Y') //��� 2021 21 2019 y�� �⵵�� ��Ÿ��
moment().format('MMMM MMM MM M') //��� June Jun 06 6 m�� ���� ��Ÿ��
moment().format('DD D Do') // 10 10 10th d�� ���� ��Ÿ��

moment().foramt('L') // MM/DD/YYYY
moment().foramt('LL') // MMMM DD, YYYY
moment().foramt('LLL') // MMMM DD, YYYY h:mm A
moment().foramt('LLLL') // dddd, MMMM DD, YYYY h:mm A
moment().foramt('LT') // h:mm A
moment().foramt('LTS') / h:mm:ss A
```

moment.locale �����

moment�� locale �⺻ ������ en�Դϴ�.

```
moment.updateLocale("ko", {
  format: {
    //�ش� ��� ����
    //ex) llll : hhhh mm dd
  }
});
moment.locale("ko");
moment.updateLocale("en", {
  format: {
    //�ش� ��� ����
    //ex) llll : hhhh mm dd
  }
});
moment.locale("en");
```
