import { Document, Schema, model, Model } from 'mongoose';
import { IAdministrator } from '@interfaces/index';

export interface IAdministratorModel extends IAdministrator, Document {
}

class AdministratorClass {

}

const AdministratorFields = {
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

const AdministratorSchema = new Schema(AdministratorFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

AdministratorSchema.loadClass(AdministratorClass);

export const Administrator: Model<IAdministratorModel> = model('Administrator', AdministratorSchema);
