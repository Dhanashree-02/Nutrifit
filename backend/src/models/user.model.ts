import { pool } from '../config/database';
import bcrypt from 'bcrypt';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  dob: string;
}

export class UserModel {
  static async create(userData: Omit<User, 'id'>) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const [result] = await pool.execute(
      'INSERT INTO users (name, email, password, phone, address, dob) VALUES (?, ?, ?, ?, ?, ?)',
      [userData.name, userData.email, hashedPassword, userData.phone, userData.address, userData.dob]
    );
    return result;
  }

  static async findByEmail(email: string) {
    const [rows]: any = await pool.execute(
      'SELECT * FROM users WHERE email = ?',
      [email]
    );
    return rows[0] || null;
  }

  static async verifyPassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }
}