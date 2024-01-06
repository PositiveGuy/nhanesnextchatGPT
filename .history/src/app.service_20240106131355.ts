import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Privet Esenchik, s novum Godom! /nLadno ya poshel obratno v matritsu ;)';
  }
}
