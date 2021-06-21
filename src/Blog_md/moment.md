Moment.js�� ��¥ ���� ���̺귯���Դϴ�.
��¥ ������ �����͸� �Ľ�, ��ȿ�� üũ, ����, ȭ�鿡 ����� ���� �� �� �ֵ��� �����ִ� ���̺귯���Դϴ�.

��뿹��

```
import {moment} from "moment"

const time = moment()
console.log(time) //���� ��¥ ��

moment.locale("ko");         // ko
moment().format('LT');   // ���� 8:35
moment().format('LTS');  // ���� 8:35:50
moment().format('L');    // 2021.06.15.
moment().format('l');    // 2021.06.15.
moment().format('LL');   // 2021�� 6�� 15��
moment().format('ll');   // 2021�� 6�� 15��
moment().format('LLL');  // 2021�� 6�� 15�� ���� 8:35
moment().format('lll');  // 2021�� 6�� 15�� ���� 8:35
moment().format('LLLL'); // 2021�� 6�� 15�� ȭ���� ���� 8:35
moment().format('llll'); // 2021�� 6�� 15�� ȭ���� ���� 8:35

moment.locale("en");         // en
moment().format('LT');   // 8:36 PM
moment().format('LTS');  // 8:36:22 PM
moment().format('L');    // 06/15/2021
moment().format('l');    // 6/15/2021
moment().format('LL');   // June 15, 2021
moment().format('ll');   // Jun 15, 2021
moment().format('LLL');  // June 15, 2021 8:36 PM
moment().format('lll');  // Jun 15, 2021 8:36 PM
moment().format('LLLL'); // Tuesday, June 15, 2021 8:36 PM
moment().format('llll'); // Tue, Jun 15, 2021 8:36 PM
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

�� moment.locale("ko")�� ����ؼ� �ѱ��� ��¥ ������ ����ϱ����ؼ���

```
import "moment/locale/ko";
```

�� ó�� import�� �ؾ��մϴ�.
