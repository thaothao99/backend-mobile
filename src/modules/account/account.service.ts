import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './account.interface';
import { CreateAccDTO, LoginAccDTO, UpdateAccDTO } from './create-acc.dto';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel('Account') private readonly AccModel: Model<Account>,
  ) {}
  async getAllAcc(): Promise<Account[]> {
    const accounts = await this.AccModel.find().exec();
    return accounts;
  }
  async getAccByIds(_id: string): Promise<Account> {
    const acc = await this.AccModel.findById(_id).exec();
    return acc;
  }
  async addAcc(createAccDTO: CreateAccDTO): Promise<string> {
    const existedEmail = await this.AccModel.findOne({
      email: createAccDTO.email,
    }).exec();
    if (existedEmail)
      throw new HttpException('Email has been taken!', HttpStatus.CONFLICT);

    const existedUsername = await this.AccModel.findOne({
      username: createAccDTO.username,
    }).exec();
    if (existedUsername)
      throw new HttpException('Username has been taken!', HttpStatus.CONFLICT);

    const hashedPassword = bcrypt.hashSync(
      createAccDTO.password,
      bcrypt.genSaltSync(10),
    );
    const data = {
      username: createAccDTO.username,
      password: hashedPassword,
      email: createAccDTO.email,
      role: 'user',
    };

    const newAcc = new this.AccModel(data);
    newAcc.save();
    const token = await jwt.sign(
      {
        id: newAcc._id,
        email: newAcc.email,
      },
      process.env.SERECT_KEY,
    );
    return token;
  }

  async delAcc(_id: string): Promise<any> {
    const deletedAcc = await this.AccModel.findByIdAndRemove(_id).exec();
    return deletedAcc;
  }
  async updateAcc(token: string, createAccDTO: UpdateAccDTO): Promise<Account> {
    let decodeToken;
    decodeToken = await jwt.verify(token, process.env.SERECT_KEY);
    const _id = decodeToken.id;
    const updatedAccount = await this.AccModel.findByIdAndUpdate(
      _id,
      createAccDTO,
      { new: true },
    );
    return updatedAccount;
  }
  async login(loginAcc: LoginAccDTO): Promise<string> {
    const existedAcc = await this.AccModel.findOne({
      username: loginAcc.username,
    }).exec();
    if (
      !existedAcc ||
      !bcrypt.compareSync(loginAcc.password, existedAcc.password)
    )
      throw new HttpException(
        'Username or password is incorrect!',
        HttpStatus.UNAUTHORIZED,
      );
    else {
      const token = jwt.sign(
        {
          id: existedAcc._id,
          email: existedAcc.email,
        },
        process.env.SERECT_KEY,
      );
      return token;
    }
  }
  async getMe(token: string): Promise<Account> {
    let decodeToken;
    decodeToken = jwt.verify(token, process.env.SERECT_KEY);
    const acc = await this.AccModel.findOne({
      _id: decodeToken.id,
      email: decodeToken.email,
    });
    return acc;
  }
  async loginByMail(user: any): Promise<string> {
    // console.log(user);
    try {
      const existedAcc = await this.AccModel.findOne({ email: user.email });
      // console.log(user.email);
      if (!existedAcc) {
        // throw new HttpException('Sign up account!', HttpStatus.UNAUTHORIZED);
        console.log('Login failed');
      } else {
        const token = await jwt.sign(
          {
            id: existedAcc._id,
            email: existedAcc.email,
          },
          process.env.SERECT_KEY,
        );
        return token;
      }
    } catch (error) {
      return error;
    }
  }
  async updatePass(
    passwordCurrent: string,
    newPass: string,
    token: string,
  ): Promise<boolean> {
    let acc;
    acc = await this.getMe(token);
    if (!acc || !bcrypt.compareSync(passwordCurrent, acc.password))
      throw new HttpException(
        'Your current password is missing or incorrect!',
        HttpStatus.UNAUTHORIZED,
      );
    else {
      const hashedPassword = bcrypt.hashSync(newPass, bcrypt.genSaltSync(10));
      acc.password = hashedPassword;
      acc.save();
      return true;
    }
  }
}
