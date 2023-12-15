/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from 'mongoose';
import generateUniqueId from '../../utils/generateUniqueId';
import { DrawModel, IDraw } from './draw.interface';

const DrawSchema = new Schema<IDraw, DrawModel>({
  name: {
    type: String,
  },
  object: { type: Schema.Types.Mixed, required: true },
  extraProperties: { type: Schema.Types.Mixed },
});

DrawSchema.pre('save', function (next) {
  // Ensure that this.id is set to a unique value or remove this block if not needed
  if (!this.id) {
    this.id = generateUniqueId();
  }
  next();
});
export const Draw = model<IDraw, DrawModel>('draw', DrawSchema);
