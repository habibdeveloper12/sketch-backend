/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
interface IFreeDrawPoint {
  x: number;
  y: number;
}

export type IDraw = {
  name?: string;
  object: any[];
  extraProperties?: any;
};

export type DrawModel = Model<IDraw>;
