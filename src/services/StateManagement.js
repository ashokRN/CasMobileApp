export const reducer = (state, action) => {
  
  switch (action.type) {
    case 'LOGIN':
      const {user} = action.payload;
      return {
        ...state,
        Auth: true,
        token: action.payload.token,
        active: true,
        avatar: user.profilePic,
        user: {
          ProfileName: user.profileName,
          Name: user.name,
          Email: user.email,
          Phone: user.phone,
          DOB: user.dob,
          RegistrationNo: user.regNo,
          Department: user.department,
          Course: user.course,
          Graduate: user.graduate,
        },
      };
    case 'LOGOUT':
      return {dark:action.dark};
    case 'DARK':
      return {...state, dark: action.dark ? true : false};

    default:
      throw new Error('Action type must be defined');
  }
};
