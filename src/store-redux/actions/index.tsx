import axios from "axios";

export const GET_PHYSICAL = "GET_PHYSICAL";
export const GET_SOCIAL_AND_EMOTIONAL = "GET_SOCIAL_AND_EMOTIONAL";

export function getDataPhysycal() {
  return async function (dispatch: any) {
    const dataPhysycal = await axios.get(
      "https://api.kinedu.com/v3/babies/7652729/skills/23/milestones",
      {
        headers: {
          Authorization:
            "Token token=ed31bae57f79e6b7835b866cdaa3c7e2bfb90b922d91f3882ca451e28f6948d06b67aa23407cadc24f77c46088d62e282d629f574aef0cab62179ec5119b4d70",
        },
      }
    );
    dispatch({
      type: GET_PHYSICAL,
      payload: dataPhysycal.data,
    });
  };
}

export function getSocialAndEmotional() {
  return async function (dispatch: any) {
    const socialAndEmotional = await axios.get(
      "https://api.kinedu.com/v3/babies/7652729/skills/2/milestones",
      {
        headers: {
          Authorization:
            "Token token=ed31bae57f79e6b7835b866cdaa3c7e2bfb90b922d91f3882ca451e28f6948d06b67aa23407cadc24f77c46088d62e282d629f574aef0cab62179ec5119b4d70",
        },
      }
    );
    dispatch({
      type: GET_SOCIAL_AND_EMOTIONAL,
      payload: socialAndEmotional.data,
    });
  };
}
