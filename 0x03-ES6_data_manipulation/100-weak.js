const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let times = weakMap.get(endpoint) || 0;

  times += 1;

  weakMap.set(endpoint, times);

  if (times >= 5) {
    throw new Error('Endpoint load is high');
  }

  return times;
};

export { weakMap, queryAPI };
