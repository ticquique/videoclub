import { Document, Schema, model, Model } from 'mongoose';
import { IVideoclub } from '@interfaces/index';

/* - Código del videoclub (autonumérico)
- Nombre del gerente (cadena, obligatorio y editable)
- Ciudad (cadena, obligatorio y editable)
- Calle (cadena, obligatorio y editable)
- Código postal (cadena 5 caracteres, obligatorio y editable) */

export interface IVideoclubModel extends IVideoclub, Document {
}

class VideoclubClass {

}

const VideoclubFields = {
    manager: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true
    },
    postal_code: {
        type: String,
        required: true
    }
};

const VideoclubSchema = new Schema<IVideoclub>(VideoclubFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

VideoclubSchema.loadClass(VideoclubClass);

export const Videoclub: Model<IVideoclubModel> = model('Videoclub', VideoclubSchema);
