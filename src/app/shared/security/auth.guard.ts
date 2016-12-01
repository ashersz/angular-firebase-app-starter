/**
 * Created by asher on 01/12/2016.
 */
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private authService:AuthService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot,
                state:RouterStateSnapshot):Observable<boolean> {


        return this.authService.authInfo$
            .map(authInfo => authInfo.isLoggedIn())
            .take(1)
            .do(allowed => {
                if(!allowed) {
                    this.router.navigate(['/login']);
                }
            });
    }

}
//https://console.firebase.google.com/project/final-project-recording-d25b3/database/data/lessons/-KXjYx42c5foCC4oGWUW

// https://console.firebase.google.com/project/final-project-recording-d25b3/database/data/courses/-KXjYx3y0ocvG4yIRWNW
//https://console.firebase.google.com/project/final-project-recording-13607/database/data/lessons/-KVL5dbKnjzDsQ5SlR3M

// https://final-project-recording-13607.firebaseio.com/lessons/-KVL5dbKnjzDsQ5SlR3M.json