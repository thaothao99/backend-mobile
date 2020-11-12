import {
  Controller,
  Get,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
export const FE_URL =''
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleLogin(@Req() req) {
    console.log(req)
  }

  @UseGuards(AuthGuard('google'))
  @Get('google/callback')
  async googleLoginCallback(@Req() req, @Res() res) {
    try {
      // console.log(req)
      const token = await this.authService.validateOAuthLogin(req.user);
      if (token)
        // res.status(HttpStatus.OK).json({
        //   message: 'Login success',
        //   token,
        // });
        return res.redirect(`exp://127.0.0.1:19000?token=${token}`); // dev
      else return res.redirect(`exp://127.0.0.1:19000?token=false`)

      } catch (err) {
      console.log(err);
      return res.redirect(`exp://127.0.0.1:19000?token=false`)
    }
  }
}
