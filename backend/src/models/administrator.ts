import { Document, Schema, model, Model } from 'mongoose';
import { IAdministrator } from '../interfaces';

/* - Código del administrador (autonumérico)
   - Nombre (cadena, obligatorio y editable) */

export interface IAdministratorModel extends IAdministrator, Document {
}

class AdministratorClass {

}

const AdministratorFields = {
    username: {
        type: String,
        required: true
    }
};

const AdministratorSchema = new Schema(AdministratorFields, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
});

AdministratorSchema.loadClass(AdministratorClass);

export const Administrator: Model<IAdministratorModel> = model('Administrator', AdministratorSchema);
