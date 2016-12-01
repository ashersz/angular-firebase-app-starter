/**
 * Created by asher on 01/12/2016.
 */
export class AuthInfo {

    constructor(
        public $uid:string
    ){

    }
    isLoggedIn(){
            return !!this.$uid
    }
}
