import { createProp } from "../components/dashboard/infrastructure/createProp";
import Swal from "sweetalert2";
import { type } from "../types/types";
import { getInfoProps } from "../components/dashboard/infrastructure/getInfoProps";
import { deleteProp } from "../components/dashboard/infrastructure/deleteProp";

export const createPropRedux = (body: any) => {
  return async (dispatch: any) => {
    const resp = await createProp(body);
    if (resp.statusText === "OK") {
      Swal.fire({
        icon: "success",
        title: "Propiedad creada",
        showConfirmButton: false,
        timer: 1500,
      });

      const {
        data: {
          DataBeanProperties: { ObjectValue },
        },
      } = resp;

      dispatch(addProperty(ObjectValue));
    }
  };
};

const addProperty = (body: any) => ({
  type: type.create,
  payload: body,
});

export const initPropsRedux = () => {
  return async (dispatch: any) => {
    const resp = await getInfoProps();
    dispatch(initProps(resp));
  };
};
const initProps = (body: any) => ({
  type: type.init,
  payload: body,
});

export const deletePropsRedux = (id: number) => {
  return async (dispatch: any) => {
    await deleteProp(id);
    Swal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(delProp(id));
  };
};
const delProp = (id: number) => ({
  type: type.delete,
  payload: id,
});
