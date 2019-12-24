import { Document, Schema, model, Model } from 'mongoose';
import { IRent } from '../interfaces';
import { Film } from './film';
import { Member } from './member';

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
        type: Schema.Types.ObjectId,
        ref: 'Member',
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
    _devolution_date: {
        type: Date
    },
    amount: {
        type: Number,
        default: 0
    }
};

const RentSchema = new Schema(RentFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

RentSchema.pre('save', async function (this: Document & IRent, next) {
    try {
        const existMember = await Member.exists({ _id: this.member });
        if (!existMember) throw (new Error('Invalid member code'));
        if (new Date(this.devolution_date) <= new Date(this._devolution_date)) throw new Error('Rental date must be greather than previous')
        this._devolution_date = this.devolution_date;
        if (this.films?.length === 0) throw new Error('At least 1 film must be rented')
        const films = await Film.find({ '_id': { $in: this.films } });
        if (films.length < this.films.length) throw new Error('Invalid film id provided')
        this.amount = films.reduce((old, current) => old + current.rent_price, 0);
        next();
    } catch (e) { next(e); }
});

RentSchema.loadClass(RentClass);

export const Rent: Model<IRentModel> = model('Rent', RentSchema);
