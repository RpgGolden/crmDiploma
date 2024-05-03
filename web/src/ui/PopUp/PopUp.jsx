import React from "react";
import style from "./PopUp.module.scss"
import { DeleteApointment } from "../../API/API";

function PopUp(props) {
    const accessToken = localStorage.getItem('accessToken'); 

    const deletApoint=()=>{
        const indexPopUp = props.indexPopUp;
        const id = props.appointmentData[indexPopUp].id
        DeleteApointment(accessToken, id);
        props.setindexPopUp(null);
    }


    return ( 
        <div className={style.PopUp}>
            <div className={style.PopUpInner}>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <div className={style.buttonInner}>
                    <button onClick={()=> props.setindexPopUp(null)}>Отменить</button>
                    <button className={style.buttonDel} onClick={deletApoint}><img src="./../img/Trash.png" alt="trash"/>Удалить</button>
                </div>
            </div>          
        </div>
     );
}

export default PopUp;