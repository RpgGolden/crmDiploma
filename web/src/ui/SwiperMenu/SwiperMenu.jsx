import React, { useState } from "react";
import styles from "./SwiperMenu.module.scss";

function SwiperMenu() {
    const [openBlocks, setOpenBlocks] = useState([]);

    const handleButtonClick = (blockNumber) => {
      if (openBlocks.includes(blockNumber)) {
        setOpenBlocks(openBlocks.filter((block) => block !== blockNumber));
      } else {
        setOpenBlocks([...openBlocks, blockNumber]);
      }
    };
  
  return (
    <div className={styles.SwiperMenu}>
      <div className={styles.SwiperMenublock}>
        <div>
          <h2>Часы работы</h2>
          <div>
            {openBlocks.includes(1) && (
              <>
                <p className={styles.SwiperMenublockText}>Клиника "ЗдоровьеПлюс" работает ежедневно без выходных.</p>
                <p className={styles.SwiperMenublockText}>Ежедневно — с 7:00 до 20:00</p>
                <p className={styles.SwiperMenublockText}>Воскресенье — с 8:00 до 20:00</p>
              </>
            )}
          </div>
        </div>
        <div>
          <button onClick={() => handleButtonClick(1)}>
            {openBlocks.includes(1) ? <img src="./../img/minus.svg" alt="Развернуть" /> : <img src="./../img/plus.svg" alt="Развернуть" />}
          </button>
        </div>
      </div>
      <div className={styles.SwiperMenublock}>
        <div>
          <h2>Адрес клиники</h2>
          <div>
            {openBlocks.includes(2) && <p className={styles.SwiperMenublockText}>Россия Ул.Комарова 4/9</p>}
          </div>
        </div>
        <div>
          <button onClick={() => handleButtonClick(2)}>
            {openBlocks.includes(2) ? <img src="./../img/minus.svg" alt="Развернуть" /> : <img src="./../img/plus.svg" alt="Развернуть" />}
          </button>
        </div>
      </div>
      <div className={styles.SwiperMenublock}>
        <div>
          <h2>Как дозвониться</h2>
          <div>
            {openBlocks.includes(3) && <p className={styles.SwiperMenublockText}>8 999 99 999 99</p>}
          </div>
        </div>
        <div>
          <button onClick={() => handleButtonClick(3)}>
            {openBlocks.includes(3) ? <img src="./../img/minus.svg" alt="Развернуть" /> : <img src="./../img/plus.svg" alt="Развернуть" />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwiperMenu;
