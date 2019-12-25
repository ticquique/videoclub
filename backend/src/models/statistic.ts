import { Document, Schema, model, Model } from 'mongoose';
import { IStatistic, IMember, IRent } from '../interfaces';
import { Rent } from './rent';
import { Administrator } from './administrator';
import { Member } from './member';

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
    },
    month: {
        type: Number,
        default: 1,
        min: 1,
        max: 12
    }
};

const StatisticSchema = new Schema<IStatistic>(StatisticFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

StatisticSchema.pre('save', async function (this: Document & IStatistic, next) {
    try {
        const existStatistic = await Statistic.exists({ member: this.member, administrator: this.administrator, month: this.month });
        if (existStatistic) throw (new Error('Current statistic exist yet'));
        const existAdministrator = await Administrator.exists({ _id: this.administrator });
        if (!existAdministrator) throw (new Error('Invalid administrator code'));
        const existMember: IMember & Document = (await Member.find({ _id: this.member }))?.[0] ?? undefined;
        if (!existMember) throw (new Error('Invalid member code'));
        const rents: IRent[] = await Rent.aggregate([
            { $addFields: { "month": { $month: '$pickup_date' } } },
            { $match: { month: this.month, member: this.member } }
        ]);
        this.rents = rents;
        this.amount = rents.reduce((old, current) => old + current.amount, 0);
        next();
    } catch (e) { next(e); }
});

StatisticSchema.loadClass(StatisticClass);

export const Statistic: Model<IStatisticModel> = model('Statistic', StatisticSchema);
