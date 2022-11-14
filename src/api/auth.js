import jwtDecode from 'jwt-decode';
import store from '../store';
import { setUser } from '../store/actions/authActions';

let initialized = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialized) {
      return;
    }

    window.addEventListener('load', () => {
      /* global google */
      google.accounts.id.initialize({
        client_id:
          '813474181975-bgktal91iji7tjultll3n1iof9trdc9t.apps.googleusercontent.com',
        callback: (response) => {
          const {
            given_name: firstName,
            family_name: lastName,
            email,
            picture: avatar,
            sub: id,
            name,
          } = jwtDecode(response.credential);

          store.dispatch(
            setUser({
              firstName,
              lastName,
              email,
              avatar,
              id,
              name,
            }),
          );
        },
        scope: 'email profile',
      });
      resolve();
      initialized = true;
    });
  });
};
