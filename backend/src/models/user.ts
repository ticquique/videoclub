import { IUser } from "../interfaces/user";
import { Document, Schema, model, Model } from 'mongoose';
import * as argon2 from 'argon2';

export interface IUserModel extends IUser, Document {
}

class UserClass {

    async comparePassword(password) {
        const self: any = this;
        return await argon2.verify(password, self.password)
    }

}

const UserFields = {
    username: {
        type: String,
        index: true,
        unique: true,
        dropDups: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 80,
        select: false,
    },
    privileges: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    }
};

const UserSchema = new Schema<IUser>(UserFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

UserSchema.pre('save', async function (this: Document & IUser, next) {
    if (this.isModified('password')) {
        try {
            const hash = await argon2.hash(this.password);
            this.password = hash;
            next();
        } catch (e) { next(e); }
    } else next();
});

UserSchema.loadClass(UserClass);

export const User: Model<IUserModel> = model('User', UserSchema);
