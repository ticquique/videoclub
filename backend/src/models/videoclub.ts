import { Document, Schema, model, Model } from 'mongoose';
import { IVideoclub } from '@interfaces/index';

export interface IVideoclubModel extends IVideoclub, Document {
}

class VideoclubClass {

}

const VideoclubFields = {
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

const VideoclubSchema = new Schema(VideoclubFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

VideoclubSchema.loadClass(VideoclubClass);

export const Videoclub: Model<IVideoclubModel> = model('Videoclub', VideoclubSchema);
