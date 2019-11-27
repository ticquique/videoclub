import { Document, Schema, model, Model } from 'mongoose';
import { IMember } from '@interfaces/index';

export interface IMemberModel extends IMember, Document {
}

class MemberClass {

}

const MemberFields = {
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

const MemberSchema = new Schema(MemberFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

MemberSchema.loadClass(MemberClass);

export const Member: Model<IMemberModel> = model('Member', MemberSchema);
