import { Request, Response } from 'express';
import { UserModel } from '../models/user.model.js';

export class AuthController {
  static async register(req: Request, res: Response) {
    try {
      const result = await UserModel.create(req.body);
      res.json({ success: true, data: result });
    } catch (error) {
      res.status(400).json({ success: false, error: (error as Error).message });
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findByEmail(email);
      
      if (!user) {
        throw new Error('User not found');
      }

      const isValid = await UserModel.verifyPassword(password, user.password);
      if (!isValid) {
        throw new Error('Invalid password');
      }

      res.json({ success: true, data: user });
    } catch (error) {
      res.status(401).json({ success: false, error: (error as Error).message });
    }
  }
}