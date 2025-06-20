import express, { Request, Response } from 'express';
import { User } from '../models/user.model';

export const usersRoutes = express.Router();

usersRoutes.post('/create-user', async (req: Request, res: Response) => {
    const body = req.body;
    const user  = await User.create(body);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        user
    })
})

usersRoutes.get('/', async (req: Request, res: Response) => {
    const users  = await User.find();

    res.status(200).json({
        success: true,
        message: "User created successfully",
        users
    })
})

usersRoutes.get('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const user  = await User.findById(userId);

    res.status(200).json({
        success: true,
        message: "User viewed successfully",
        user
    })
})

usersRoutes.patch('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    const updatedBody = req.body;
    // const user  = await User.findByIdAndUpdate(userId, updatedBody, { new: true });
    // const user  = await User.updateOne({_id: userId}, updatedBody, { new: true });
    const user  = await User.findOneAndUpdate({_id: userId}, updatedBody, { new: true });

    res.status(200).json({
        success: true,
        message: "User updated successfully",
        user
    })
})

usersRoutes.delete('/:userId', async (req: Request, res: Response) => {
    const userId = req.params.userId;
    // const user  = await User.findByIdAndDelete(userId);
    // const user  = await User.deleteOne({_id: userId});
    const user  = await User.findOneAndDelete({_id: userId});

    res.status(200).json({
        success: true,
        message: "User deleted successfully",
        user
    })
})