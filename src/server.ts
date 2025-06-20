import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

let server: Server;
const PORT = 5000;

async function main() {
    try {
        await mongoose.connect('mongodb+srv://asmshad:asmshad@cluster0.celrb.mongodb.net/note-app?retryWrites=true&w=majority&appName=Cluster0');
        server = app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

main();