import Users from "../models/Users.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(req.body);

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Veuillez renseigner tous les champs",
        status: false,
      });
    }

    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ message: "Veuillez entrer un email valide", status: false });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Le mot de passe doit contenir au moins 6 caracteres",
        status: false,
      });
    }

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Cet utilisateur existe deja", status: false });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new Users({ name, email, password: hashedPassword });

    await user.save();
    res
      .status(201)
      .json({ message: "Utilisateur cree avec succes", status: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message, status: false });
  }
};
