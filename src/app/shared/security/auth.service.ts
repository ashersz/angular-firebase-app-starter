import { Injectable } from '@angular/core';
import {FirebaseAuth} from "angularfire2";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import {AuthInfo} from "./auth-info";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {
    static UNKNOWN_USER = new AuthInfo(null)
    authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOWN_USER)

  constructor(private auth:FirebaseAuth,private router:Router) {

  }

  fromFirebaseAuthPromise(promise):Observable<any> {

    const subject = new Subject<any>();

    promise
        .then(res => {
              const authInfo = new AuthInfo(this.auth.getAuth().uid);
              this.authInfo$.next(authInfo);
              subject.next(res);
              subject.complete();
            },
            err => {
              this.authInfo$.error(err)
              subject.error(err);
              subject.complete();
            });

    return subject.asObservable();
  }

  login(email,password):Observable<any>{
    return this.fromFirebaseAuthPromise(this.auth.login({email, password}));
  }
    signUp(email, password) {
        return this.fromFirebaseAuthPromise(this.auth.createUser({email, password}));
    }
    logout() {
        this.auth.logout();
        this.authInfo$.next(AuthService.UNKNOWN_USER);
        this.router.navigate(['/home']);

    }

}
