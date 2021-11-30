import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credential.dto';
import { GetUSer } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService){}
    //회원가입
    @Post('/signUp')
    signUp(@Body(ValidationPipe) authcredentialsDto: AuthCredentialsDto): Promise<void>{
        return this.authService.signUp(authcredentialsDto);
    }
    //로그인
    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: string}>{
        return this.authService.signIn(authCredentialsDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUSer() user: User){
        console.log('user', user);
    }
}
