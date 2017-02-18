import { NextFunction, Request, Response, Router } from 'express';

const TEST_DATA : Array<any> = [
  {
    name : 'Diogo',
    surname : 'Poeira',
    age : 25
  },
  {
    name : 'Luís',
    surname : 'Duarte',
    age : 22
  },
  {
    name : 'Andreia',
    surname : 'Leitão',
    age : 27
  },
]

export class TestApi{

  public static create(router: Router) {

    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.json({data:TEST_DATA});
    });
  }


  constructor() {}

}