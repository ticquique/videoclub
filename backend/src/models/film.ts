import { Document, Schema, model, Model } from 'mongoose';
import { IFilm } from '@interfaces/index';

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
        type: { type: Schema.Types.ObjectId, ref: 'Videoclub' },
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true
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

FilmSchema.loadClass(FilmClass);

export const Film: Model<IFilmModel> = model('Film', FilmSchema);
