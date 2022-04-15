import axios from "axios";
interface Body {
  Nombre: string | undefined;
  Descripcion: string | undefined;
  Valor: string | undefined;
  Estado: number | undefined;
  IDPerfilBanco: number | null | undefined;
  IDPropiedades: string | undefined | null;
  Since: string | undefined | null;
}

export const createProp = async (body: Body) => {
  const resp=await axios.request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    transformRequest: [
      function (data) {
        data = JSON.stringify({
          IDClient: "$#HHJGUY9773H5MNKD65389745KJDFGDGG==",
          ServiceName: "AdminService",
          WSToken: "$#HHJGUYUHSDFGS546546DFH654SGHUJJFF==",
          MethodHash:
            "com.admin.bean.Propiedades_updatePropiedades_com.admin.bean.Propiedades",
          ArgumentList: [
            {
              DataBeanProperties: {
                ...body,
              },
              DataBeanName: "com.admin.bean.Propiedades",
            },
          ],
        });
        return data;
      },
    ],
    url: process.env.REACT_APP_ENDPOINT,
    method: "POST",
  });
  return resp
};
