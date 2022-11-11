export const selectContacts = ({ contacts }) => contacts.items;
export const selectFilter = ({filter}) => filter.filter;
export const selectState = ({ contacts }) => ({ isLoading: contacts.isLoading, error: contacts.error });

export const getLoggedIn = ({ auth }) => auth.isLoggedIn;//получим св-ва isLoggedIn
export const getUserName = ({ auth }) => auth.user.name;//получим св-ва user.name
// export const getUserToken = ({ auth }) => auth.token; //Репета говорит, что токен не нужно получать
export const getLoadingUserStatus = ({ auth }) => auth.isLoadingCurrentUser;