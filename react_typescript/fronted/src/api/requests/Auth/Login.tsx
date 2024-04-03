import { ApiLogin } from "../..";
import { RequestLogin, ResponseLogin } from "../../../types/InterfaceLogin";

export const login = async ({ email, password }: RequestLogin) => {
  try {
    const res: ResponseLogin = await ApiLogin.post(``, {
      email: email,
      password: password,
    });

    localStorage.setItem('user', JSON.stringify(res.user));
    localStorage.setItem('token', JSON.stringify(res.token));
    
  } catch (error) {
    console.log(error);
  }
};

