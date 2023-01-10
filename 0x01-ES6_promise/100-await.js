// Await and async
import { uploadPhoto, createUser } from './utils';

const asyncUploadUser = async () => {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (e) {
    photo = null;
    user = null;
  }

  return ({ photo, user });
};

export default asyncUploadUser;
