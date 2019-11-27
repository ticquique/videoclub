import { Document, Schema, model, Model } from 'mongoose';
import { IFilm } from '@interfaces/index';

export interface IFilmModel extends IFilm, Document {
}

class FilmClass {

}

const FilmFields = {
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

const FilmSchema = new Schema(FilmFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

FilmSchema.loadClass(FilmClass);

export const Film: Model<IFilmModel> = model('Film', FilmSchema);
