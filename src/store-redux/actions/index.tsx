import axios from "axios";

export const GET_ALL_DATA = "GET_ALL_DATA";

export function getAllData() {
  return async function (dispatch: any) {
    const allPegadores = await axios.get(
      "https://api.kinedu.com/v3/babies/7652729/skills/23/milestones",
      {
        headers: {
          Authorization:
            "Token token=ed31bae57f79e6b7835b866cdaa3c7e2bfb90b922d91f3882ca451e28f6948d06b67aa23407cadc24f77c46088d62e282d629f574aef0cab62179ec5119b4d70",
        },
      }
    );
    dispatch({
      type: GET_ALL_DATA,
      payload: allPegadores.data,
    });
  };
}
