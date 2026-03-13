/* global process */
export const adminLogin = (req, res) => {

  const { email, password } = req.body;
  const normalizedEmail = (email || "").trim().toLowerCase();
  const normalizedAdminEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();

  if (normalizedEmail === normalizedAdminEmail && password === process.env.ADMIN_PASSWORD) {
    res.status(200).json({ message: "Login successful", token: "admin-token-placeholder" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};
