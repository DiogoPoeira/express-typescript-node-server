import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as logger from 'morgan';
import * as path from 'path';

import {TestApi} from './api/test-api';


export class Server {

  public app: express.Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    //create expressjs application
    this.app = express();

    //configure application
    this.config();

    //add routes
    this.routes();

    //add api
    this.api();
  }

  public api() {
    let router : express.Router
    router = express.Router();
    
    TestApi.create(router);
    
    this.app.use(router);
  }

  public config() {

    this.app.use(express.static(path.join(__dirname, 'assets')));
    this.app.use(logger('dev'));

    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({
      extended: true
    }));

    this.app.use(cookieParser('SECRET_GOES_HERE'));

  }

  private routes() {}

}