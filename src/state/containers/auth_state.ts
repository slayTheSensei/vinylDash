// tslint:disable:no-console
import { Maybe } from "ramda-fantasy";
import { IUser } from "src/helpers/users";
import { Container } from "unstated";
import { auth } from "../firebase_adapter";

const { Nothing } = Maybe;

type AuthTypes = "email" | "facebook" | "google";

interface IAuthState {
  user: Maybe<IUser>;
  signedIn: boolean;
  redirect: boolean;
}

class AuthState extends Container<IAuthState> {
  public state = {
    redirect: false,
    signedIn: false,
    user: Nothing()
  };

  public createUser(email: string, pass: string, type: AuthTypes) {
    switch (type) {
      case "email":
        auth
          .createUserWithEmailAndPassword(email, pass)
          .catch(e => console.log(e));

        return this.onAuthStateChanged();

      case "facebook":
      case "google":
        console.log("Not Implemented");
        return;
    }
  }

  public signInUser(email: string, pass: string, type: AuthTypes) {
    switch (type) {
      case "email":
        auth.signInWithEmailAndPassword(email, pass).catch(e => console.log(e));

        return this.onAuthStateChanged();

      case "facebook":
      case "google":
        console.log("Not Implemented");
        return;
    }
  }

  public signOut() {
    auth.signOut();
  }

  public onAuthStateChanged() {
    auth.onAuthStateChanged((user: firebase.User) => {
      if (user) {
        console.log("User logged in: ", user);
        this.setState({
          signedIn: true
        });
      } else {
        console.log("User logged out");
        this.setState({
          signedIn: false
        });
      }
      return;
    });
  }
}

export default AuthState;
export { IAuthState };
