// Sign up user
function signUpUser(firstName, lastName) {
  return Promise.resolve(
    {
      firstName,
      lastName,
    },
  );
}

export default signUpUser;
