import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";

const SALT_ROUNDS = 10; // Adjust cost factor as needed

export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = await prisma.user.create({
      data: { username, email, password: hashedPassword },
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = (req, res) => {
  // Implement login logic here
};

export const logout = (req, res) => {
  // Implement logout logic here
};
