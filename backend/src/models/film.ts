import { Document, Schema, model, Model } from 'mongoose';
import { IFilm } from '../interfaces';
import { Videoclub } from './videoclub'
/* - Código de la película (autonumérico)
- Nombre (cadena, obligatorio y editable)
- Director (cadena, opcional y editable)
- Fecha de estreno (fecha, obligatorio y editable)
- Precio de alquiler (real, obligatorio y editable) */

export interface IFilmModel extends IFilm, Document {
}

class FilmClass {

}

const FilmFields = {
    videoclub_code: {
        type: Schema.Types.ObjectId,
        ref: Videoclub,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    director: {
        type: String,
        required: true,
        trim: true
    },
    released_at: {
        type: Date,
        required: true
    },
    rent_price: {
        type: Number,
        required: true
    }
};

const FilmSchema = new Schema(FilmFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});


FilmSchema.pre('save', async function (this: Document & IFilm, next) {
    if (this.isModified('videoclub_code')) {
        try {
            const existVideoclub = await Videoclub.exists({ _id: this.videoclub_code })
            if (existVideoclub) { next(); } else { next(new Error('Invalid videoclub code')) };
        } catch (e) { next(e); }
    } else next();
});

FilmSchema.loadClass(FilmClass);

export const Film: Model<IFilmModel> = model('Film', FilmSchema);
