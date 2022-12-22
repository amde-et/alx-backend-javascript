import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  const classArray = [];

  for (const size of sizes) {
    classArray.push(new ClassRoom(size));
  }
  return classArray;
}
