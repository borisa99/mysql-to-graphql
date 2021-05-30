const cleanTimeStamps = async (array) => {
  await array.forEach((obj) => {
    if (!obj.created_at) {
      delete obj.created_at;
    }
    if (!obj.updated_at) {
      delete obj.updated_at;
    }
    if (!obj.deleted_at) {
      delete obj.deleted_at;
    }
  });
  return array;
};

module.exports = {
  cleanTimeStamps,
};
