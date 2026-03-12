/* global process */
export const adminLogin = (req, res) => {

  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    res.status(200).json({ message: "Login successful", token: "admin-token-placeholder" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
