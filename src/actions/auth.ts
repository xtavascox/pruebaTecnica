import { Actions } from "./interface";
import { type } from "../types/types";
import { loginAuth } from "../components/login/infrastructure/loginInfra";
import Swal from "sweetalert2";

export const getAuth = (user: string, password: string) => {
  return async (dispatch: any) => {
    const resp = await loginAuth({ user, password });
    
    if (resp.status === 200) {
      const {
        data: {
          DataBeanProperties: {
            ObjectValue: { DataBeanProperties },
          },
        },
      } = resp;
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: `${DataBeanProperties.bloqueado ? "warning" : "success"}`,
        title: `${DataBeanProperties.msg}`,
      });

      dispatch(setAuth(DataBeanProperties));

    }
  };
};

export const setAuth = (payload: any): Actions => ({
  type: type.login,
  payload: payload,
});
