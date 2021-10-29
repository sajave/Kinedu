import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {getAllData} from "../../store-redux/actions/index";
import {rootState} from "../../constants/types";

export function Areas() {
  const data = useSelector((state: rootState) => state.data);
  const dispatch = useDispatch();

  function getDataFromApi() {
    dispatch(getAllData());
    return;
  }

  console.log("data ===> ", data);

  return (
    <div className='Container'>
      <button onClick={() => getDataFromApi()}>get data</button>
    </div>
  );
}
