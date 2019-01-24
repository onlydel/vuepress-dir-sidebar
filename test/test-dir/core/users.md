# Users


## UsersService

### Interface

``` ts
interface UsersServiceInterface
{
    searchBrandUsers(brandName: String, searchQuery: String);
}
```

### Methods

#### getBrandUsers(brandName: String, searchQuery: String)

`brandName` 브랜드의 사용자중 searchQuery의 값을 포함하는 이름, 이메일 주소, 전화번호 중 일 부분이라도 일치하는 사용자를 검색합니다.

##### Params

- brandName: 사용자를 검색할 브랜드 이름
- searchQuery: 검색 조건 = (이름, 이메일, 전화번호)
- return: Collection

```js
import { UsersService } from 'meteor/realworks:users-service';

...

const args = { brandName: 'realdesk', searchQuery: '길동' }
UsersService.getBrandUsers.call(args, (err, ret) => {
    if (err) Meteor.ShowError(err);
    if (ret) {
        // 이름, 이메일, 전화번호에 '길동' 이 포함된 데이터를 검색한다.
        console.log(ret.count());
    }
});

```