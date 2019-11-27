import { Document, Schema, model, Model } from 'mongoose';
import { IStatistic } from '@interfaces/index';

export interface IStatisticModel extends IStatistic, Document {
}

class StatisticClass {

}

const StatisticFields = {
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

const StatisticSchema = new Schema(StatisticFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

StatisticSchema.loadClass(StatisticClass);

export const Statistic: Model<IStatisticModel> = model('Statistic', StatisticSchema);
