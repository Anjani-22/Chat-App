export const signup = async (req, res) => {
  try {
    const { username, fullname, password, confirmpassword, gender } = req.body;
  } catch (error) {}
  res.send("signup");
};
export const login = (req, res) => {
  res.send("Login");
};
export const logout = (req, res) => {
  res.send("Logout");
};
