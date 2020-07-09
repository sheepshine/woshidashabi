import {
  Controller,
  Get,
  Post,
  Patch,
  Query,
  Delete,
  Body,
  Param,
  Headers,
  UseFilters,
  HttpException,
  HttpStatus,
} from "@nestjs/common";

import { DemoService } from "./demo.service";
// import { Hello, UserRole } from './classes/hello';
import { HttpExceptionFilter } from "../../common/filters/http-exception.filter";

@UseFilters(new HttpExceptionFilter())
@Controller("/demo")
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

  // 查询
  @Get()
  fetch(@Query() { id }, @Headers("token") token): string {
    if (!id) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          message: "请求参数id 必传",
          error: "id is required",
        },
        HttpStatus.BAD_REQUEST
      );
    }
    return this.demoService.fetch(id);
  }
}
