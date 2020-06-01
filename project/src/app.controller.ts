import { Controller, Get, Param, HttpStatus, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { generate } from 'rxjs';

@Controller("user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUser(@Response() res) {
    return this.appService.getAllUser().then(users => {
      res.status(HttpStatus.OK).json(users)
    })
  }

  @Get('/:id')
  getUser(@Response() res, @Param('id') id) {
    return this.appService.getUser(+id).then(user => {
      res.status(HttpStatus.OK).json(user)
    })
  }
}
