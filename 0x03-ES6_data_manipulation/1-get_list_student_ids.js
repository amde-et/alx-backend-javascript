const getListStudentIds = (ids) => {
  if (!Array.isArray(ids)) {
    return [];
  }
  const meids = ids.map((item) => item.id);

  return meids;
};

export default getListStudentIds;
