import { Injectable, HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosResponse } from 'axios';
import { catchError, map } from 'rxjs/operators';
import { Model } from 'mongoose';
