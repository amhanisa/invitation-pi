import data from "../data/user.json";

const User = {
  getUser(id) {
    return data.find((record) => record.id == id);
  },
};

export default User;
