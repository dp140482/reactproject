/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    selectStatus,
    selectError,
    selectCopyright,
    selectNOD
} from "../../store/number/selectors";
import { getNOD } from "../../store/number/actions";
import Spinner from "../Spinner";
import { REQUEST_STATUS } from "../../utils/constants";
import "./NOD.css";


const NOD = () => {
    const dispatch = useDispatch();
    const status =  useSelector(selectStatus);
    const error =  useSelector(selectError);
    const copy = useSelector(selectCopyright);
    const nod = useSelector(selectNOD);

    const requestNOD = async () => {
        dispatch(getNOD());
      }; 


    React.useEffect(() => {
        requestNOD();
    }, []);

    return (
        <div className="NODpage">
            <h1>Число дня <span className="theNumber">{nod.number}</span></h1>
            { status === REQUEST_STATUS.LOADING || REQUEST_STATUS.IDLE ? <>
                <Spinner/>
            </> : ''}
            { status === REQUEST_STATUS.SUCCESS ? <>
            <p className="centered">
                кит. <span className="sys" dangerouslySetInnerHTML={{__html: nod.chinese}} />,
                рим. <span className="sys" dangerouslySetInnerHTML={{__html: nod.roman}} />
            </p><p>
                <span className="base">({nod.number})<sub>10</sub></span> =
                <span className="base">({nod.binary})<sub>2</sub></span> =
                <span className="base">({nod.octal})<sub>8</sub></span> =
                <span className="base">({nod.hexadecimal})<sub>16</sub></span> =
                <span className="base">({nod.ternary})<sub>3</sub></span> =
                <span className="base">({nod.duodecimal})<sub>12</sub></span>
            </p>
            <p className="copyright">&copy; {copy}</p>
            </> : ''}
            { status === REQUEST_STATUS.FAILURE ? <>
            <p className="error">Ошибка: {error}</p>
            <div className="right"><button className="errorButton" onClick={requestNOD}>Обновить</button></div>
            </> : ''}
        </div>
    );
};

export default NOD;