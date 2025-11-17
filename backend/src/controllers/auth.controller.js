import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

// --- REGISTRO ---
export const register = async (req, res) => {
  try {
    const { nombre, email, password, username } = req.body;

    // Validar datos mínimos
    if (!nombre || !email || !password || !username) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    // Ver si ya existe email o username
    const exists = await User.findOne({ where: { email } });
    if (exists) {
      return res.status(400).json({ message: "El correo ya existe" });
    }

    const existsUser = await User.findOne({ where: { username } });
    if (existsUser) {
      return res.status(400).json({ message: "El username ya existe" });
    }

    // Crear usuario
    const user = await User.create({
      nombre,
      email,
      username,
      password // sin encryptar
    });

    return res.json({
      message: "Usuario registrado",
      user
    });

  } catch (error) {
    return res.status(500).json({ message: "Error interno" });
  }
};

// --- LOGIN ---
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar usuario
    const user = await User.findOne({ where: { email } });

    if (!email || !password) {
      return res.status(400).json({ message: "Faltan datos" });
    }

    if (!user) return res.status(400).json({ message: "Usuario no encontrado" });

    if (user.password !== password) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    // Generar token
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        username: user.username
      }
    });

  } catch (error) {
    return res.status(500).json({ message: "Error interno" });
  }
};
