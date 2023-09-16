import { Mongoose } from 'mongoose';
import { userSchema } from './schema/user.schema';
import { DATABASE_CONNECTION, USER_MODEL } from './constans';

export const catsProviders = [
    {
        provide: USER_MODEL,
        useFactory: (mongoose: Mongoose) => mongoose.model('User', userSchema),
        inject: [DATABASE_CONNECTION],
    },
];