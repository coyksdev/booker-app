import {
  SignInEmailPasswordHookResult,
  SignUpEmailPasswordHookResult,
  useSignInEmailPassword,
  useSignUpEmailPassword,
} from '@nhost/react';

const useAuthenticate = ({
  isLogin,
}: {
  isLogin: boolean;
}):
  | {
      isLogin: true;
      hook: SignInEmailPasswordHookResult;
    }
  | {
      isLogin: false;
      hook: SignUpEmailPasswordHookResult;
    } => {
  const signup = useSignUpEmailPassword();
  const signIn = useSignInEmailPassword();

  if (isLogin) {
    return {
      isLogin: true,
      hook: signIn,
    };
  } else {
    return {
      isLogin: false,
      hook: signup,
    };
  }
};

export default useAuthenticate;
