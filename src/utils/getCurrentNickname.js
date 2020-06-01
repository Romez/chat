import Cookies from 'js-cookie';
import { name } from 'faker';

const getCurrnentNickname = (cookies = Cookies) => {
  const savedNickname = cookies.get('nickname');
  if (savedNickname) {
    return savedNickname;
  }

  const nickname = name.findName();
  cookies.set('nickname', nickname);

  return nickname;
};

export default getCurrnentNickname;
