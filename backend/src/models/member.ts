import { Document, Schema, model, Model } from 'mongoose';
import { IMember } from '@interfaces/index';

/* - Código del socio (autonumérico)
- Nombre (cadena, obligatorio y editable)
- Edad (entero, obligatorio y editable) */

export interface IMemberModel extends IMember, Document {
}

class MemberClass {

}

export interface IMember {
    _id: any;
    id?: any;
    name: string;
    age: number;
    created_at: Date;
    updated_at: Date;
}
const MemberFields = {
    name: {
        type: String,
        index: true,
        required: true,
    },
    age: {
        type: Number,
        required: true
    }
};

const MemberSchema = new Schema(MemberFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

MemberSchema.loadClass(MemberClass);

export const Member: Model<IMemberModel> = model('Member', MemberSchema);
