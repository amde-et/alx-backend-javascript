// Handle multiple promises
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  return Promise.allSettled([uploadPhoto(fileName), signUpUser(firstName, lastName)]);
}

export default handleProfileSignup;
