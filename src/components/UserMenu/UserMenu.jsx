import { MenuWrapper, MenuButton, UserName } from './UserMenuStyled';
import { getUserName } from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const handleClick = e => {
    dispatch(logOut());
  };

  return (
    <MenuWrapper>
      <UserName>{name}</UserName>
      <MenuButton type="button" onClick={handleClick}>
        Logout
      </MenuButton>
    </MenuWrapper>
  );
};
