import {
  Controller,
  Get,
  Res,
  HttpStatus,
  Post,
  Body,
  Query,
  NotFoundException,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccDTO, LoginAccDTO, UpdateAccDTO } from './create-acc.dto';
import { AuthGuard } from '@nestjs/passport';
@Controller('account')
export class AccountController {
  constructor(private accService: AccountService) {}
  // add a account
  @Post('/create')
  async addAccount(@Res() res, @Body() createCustomerDTO: CreateAccDTO) {
    const token = await this.accService.addAcc(createCustomerDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Account has been created successfully',
      token,
    });
  }

  // Retrieve accounts list
  @Get('accounts')
  async getAllAccounts(@Res() res) {
    const acc = await this.accService.getAllAcc();
    return res.status(HttpStatus.OK).json(acc);
  }

  // Fetch a particular account using ID
  @Get('/:accountID')
  async getAccountByID(@Res() res, @Param('accountID') accountID) {
    const acc = await this.accService.getAccByIds(accountID);
    if (!acc) throw new NotFoundException('Account does not exist!');
    return res.status(HttpStatus.OK).json(acc);
  }
  @Post('/update')
  async updateAccount(
    @Res() res,
    @Body() createAccDTO: UpdateAccDTO,
    @Req() req,
  ) {
    const token = req.headers.authorization.split(' ')[1];
    const account = await this.accService.updateAcc(token, createAccDTO);
    if (!account) throw new NotFoundException('Account does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Account has been successfully updated!',
      account,
    });
  }
  @Post('/login')
  async login(@Res() res, @Body() loginAcc: LoginAccDTO) {
    const token = await this.accService.login(loginAcc);
    return res.status(HttpStatus.OK).json({
      message: 'Login success!',
      token,
    });
  }
  @UseGuards(AuthGuard('google'))
  @Post('/login-mail')
  async loginByMail(@Req() req) {}
  // @UseGuards(AuthGuard)
  @Get('/me')
  async getMe(@Res() res, @Req() req) {
    // console.log(req.headers.authorization.split(' ')[1]);
    const token = req.headers.authorization.split(' ')[1];
    const acc = await this.accService.getMe(token);
    return res.status(HttpStatus.OK).json({
      message: 'success!',
      acc,
    });
  }
  @Post('/updatePass')
  async updatePassword(@Req() req, @Res() res, @Body() body) {
    const token = req.headers.authorization.split(' ')[1];
    const { passwordCurrent, password } = body;
    await this.accService.updatePass(passwordCurrent, password, token);
    return res.status(HttpStatus.OK).json({
      message: 'success!',
    });
  }
}
