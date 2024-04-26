import React from "react";
import style from "./PopUp.module.scss"

function PopUp(props) {
    return ( 
        <div className={style.PopUp}>
            <div className={style.PopUpInner}>
                <h1>{props.title}</h1>
                <p>{props.subtitle}</p>
                <div className={style.buttonInner}>
                    <button onClick={()=> props.SetPopUpHover(false)}>Отменить</button>
                    <button className={style.buttonDel}><img src="./../img/Trash.png"/>Удалить</button>
                </div>
            </div>          
        </div>
     );
}

export default PopUp;