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
          profileName: user.profileName,
          name: user.name,
          email: user.email,
          phone: user.phone,
          dob: user.dob,
          regNo: user.regNo,
          department: user.department,
          course: user.course,
          graduate: user.graduate,
        },
      };
    case 'LOGOUT':
      return {dark:action.dark};
    case 'DARK':
      return {...state, dark: action.dark ? true : false};

    case 'UPDATE_PROFILE':
      let avatar;
      if(action.payload.profilePic) avatar = action.payload.profilePic
      else avatar = state.avatar;
      let data = action.payload;
      if(action.payload.profilePic){
        delete data.profilePic
      }
      return {...state,user:data,avatar:avatar}

    default:
      throw new Error('Action type must be defined');
  }
};
