import { Request, Response } from 'express';
import { RequestHandler } from 'express-serve-static-core';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { drawService } from './draw.service';

const createDraw: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const { object, name } = req.body;
    const result = await drawService.createDraw({ object, name });
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sectors!',
      data: result,
    });
  }
);
const getDraw: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    const result = await drawService.getDraw();
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);
const getADraw: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    console.log(id, 'dffffffffffffffffffffff');
    const result = await drawService.getADraw(id);
    console.log(result);
    sendResponse<any>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Here is Sector!',
      data: result,
    });
  }
);

export const drawController = {
  createDraw,
  getDraw,
  getADraw,
};
