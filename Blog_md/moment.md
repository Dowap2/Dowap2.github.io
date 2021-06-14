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
const language = useSelector(state => state.languageState.state.language);
const [date, setDate] = useState(moment().format("llll"));

useEffect(() => {
    language === "en" ? moment.locale("en") : moment.locale("ko");
  }, [language]);

  setInterval(() => {
    setDate(moment().format("llll"));
  }, 60000);

  console.log(date)
```

language�� ����Ǹ� ����� ���� ���� ��¥�� ������ ����˴ϴ�.
