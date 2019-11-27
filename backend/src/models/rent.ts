import { Document, Schema, model, Model } from 'mongoose';
import { IRent } from '@interfaces/index';

export interface IRentModel extends IRent, Document {
}

class RentClass {

}

const RentFields = {
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

const RentSchema = new Schema(RentFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

RentSchema.loadClass(RentClass);

export const Rent: Model<IRentModel> = model('Rent', RentSchema);
