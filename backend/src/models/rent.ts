import { Document, Schema, model, Model } from 'mongoose';
import { IRent } from '@interfaces/index';
import { Film } from './film';

export interface IRentModel extends IRent, Document {
}

/* - Código del alquiler (autonumérico)
- Fecha de recogida (fecha, obligatorio y no editable)
- Fecha de devolución (fecha, obligatorio y editable)
- Total a pagar (real, obligatorio y derivado) */

class RentClass {

}

const RentFields = {
    films: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Film' }],
        default: []
    },
    member: {
        type: { type: Schema.Types.ObjectId, ref: 'Member' },
        required: true
    },
    pickup_date: {
        type: Date,
        required: true
    },
    devolution_date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    }
};

const RentSchema = new Schema(RentFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

RentSchema.pre('save', async function (this: IRentModel, next) {
    const self = this;
    try {
        const films = await Film.find({ '_id': { $in: self.films } });
        self.amount = films.reduce((old, current) => old + current.rent_price, 0);
        next();
    } catch (e) { next(e); }
});

RentSchema.loadClass(RentClass);

export const Rent: Model<IRentModel> = model('Rent', RentSchema);
