import Users from "../models/Users.js";

export const getUserConnected = async (req, res) => {
  try {
    const userId = res.locals.userId;

    if (!userId) {
      return res
        .status(404)
        .json({ message: "User id not found", status: false });
    }
    const user = await Users.findById(userId);
    res.status(200).json({ data: user, message: "User found", status: true });
  } catch (error) {
    console.error(error.message);
    res.status(404).json({ message: error.message });
  }
};
