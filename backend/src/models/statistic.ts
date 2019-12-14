import { Document, Schema, model, Model } from 'mongoose';
import { IStatistic } from '../interfaces';
import { Rent } from './rent';

/*  - Código de la estadística (autonumérico)
    - Fecha de creación (fecha, obligatorio y no editable)
    - Total gastado (real, obligatorio y derivado) */

export interface IStatisticModel extends IStatistic, Document {
}

class StatisticClass { }

const StatisticFields = {
    administrator: {
        type: Schema.Types.ObjectId, 
        ref: 'Administrator',
        required: true,
    },
    member: {
        type: Schema.Types.ObjectId, 
        ref: 'Member',
        required: true
    },
    rents: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Rent' }],
        default: []
    },
    amount: {
        type: Number,
        default: 0
    }
};

const StatisticSchema = new Schema<IStatistic>(StatisticFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

StatisticSchema.pre('save', async function (this: IStatisticModel, next) {
    const self = this;
    try {
        const rents = await Rent.find({ '_id': { $in: self.rents } });
        self.amount = rents.reduce((old, current) => old + current.amount, 0);
        next();
    } catch (e) { next(e); }
});

StatisticSchema.loadClass(StatisticClass);

export const Statistic: Model<IStatisticModel> = model('Statistic', StatisticSchema);
