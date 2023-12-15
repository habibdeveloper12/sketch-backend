import { Draw } from './draw.model';
// const saveDrawings = async (drawings: any[]): Promise<any[]> => {
//   // Check if drawings is an array
//   if (!Array.isArray(drawings)) {
//     console.error('Input is not an array');
//     return [];
//   }

//   const savedDrawings: any[] = [];

//   for (const drawing of drawings) {
//     try {
//       const savedDrawing = await createDraw(drawing);
//       if (savedDrawing) {
//         savedDrawings.push(savedDrawing);
//       }
//     } catch (error) {
//       console.error('Error saving individual drawing:', error);
//       // Handle the error as needed, e.g., log it and continue with the next drawing
//     }
//   }

//   return savedDrawings;
// };

const createDraw = async ({ object, name }: any): Promise<any | null> => {
  console.log(object);
  const drawing = new Draw({ name, object: object });
  drawing
    .save()
    .then(savedDrawing => {
      console.log('Draw object saved to the database:', savedDrawing);
    })
    .catch(error => {
      console.error('Error saving draw object to the database:', error);
    });
};

const getDraw = async (): Promise<any | null> => {
  const draw = Draw.find({});
  console.log(draw);
  return draw;
};
const getADraw = async (id: string): Promise<any | null> => {
  const draw = Draw.findById({ _id: id });
  console.log(draw);
  return draw;
};

export const drawService = {
  createDraw,
  getDraw,
  getADraw,
};
