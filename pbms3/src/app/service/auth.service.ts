import { Injectable, Inject } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Auth } from '../domain/auth';
import { User } from '../domain/user';

@Injectable()
export class AuthService {

  constructor(private http: Http, @Inject('user') private userService) { }

  loginWithCredentials(us:User): Promise<Auth> {
    return this.userService.getUserByUsername(us.username)  //在使用有真正的后端时，应该发送username到后端//调用UserService中的方法来查找user
      .then(user => {
        let auth = new Auth();
        localStorage.removeItem('userId');  //首先移除当前本地存储的userId




        //登陆时不同权限的人跳转到不同界面
        //登陆后访问时的权限情况在auth-guard 服务中
        //登陆后 有些组件对于不同的人有不同的显示


        let redirectUrl = (localStorage.getItem('redirectUrl') === null) ?
          '' : localStorage.getItem('redirectUrl');
        auth.redirectUrl = redirectUrl;      //存储原本要访问的Url
        if (null === user) {
          //没找到user
          auth.hasError = true;
          auth.errMsg = 'user not found';

        } else if (us.password === user.password) {
          //找到user并与密码匹配成功
          auth.user = Object.assign({}, user);
          auth.hasError = false;
          localStorage.setItem('userId', user.id);
        } else {
          //密码错误
          //做出一些修改 添加一些信息
          auth.hasError = true;
          auth.errMsg = 'password not match';
        }
        console.log(auth);
        return auth;
      })
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}