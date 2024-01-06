import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Privet Esenchik, s novum Godom! /n Ladno ya poshel obratno v matritsu ;)'
  }
}
