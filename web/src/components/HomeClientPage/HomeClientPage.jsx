import React from "react";
import HeadMenu from "../HeadMenu/HeadMenu";
import styles from "./HomeClientPage.module.scss";
import SwiperMenu from "../../ui/SwiperMenu/SwiperMenu";
import Reception from "../Reception/Reception";
function HomeClientPage() {
  return (
    <div className={styles.HomeClientPage}>
      <HeadMenu state={"HomeClient"} />
      <div className={styles.box}>
        <div className={styles.container}>
          <div className={styles.Reception}>
            <Reception />
          </div>
          <div className={styles.textContInner}>
            <div className={styles.textCont}>
              <h1>О больнице</h1>
              <p>
                Медицинский центр «ЗдоровьеПлюс» — это первая в городе частная
                медицинская клиника, заслужившая высокую репутацию среди
                пациентов и врачей. Мы работаем с 2003 года.
              </p>
              <p>
                Здесь Вы можете получить очень большой спектр медицинских услуг,
                в том числе стационарное лечение, лечение в условиях дневного
                стационара. Здесь мы проводим оперативное лечение по всем
                специальностям.
              </p>
              <p>Основная идея центра – забота о семейном счастье.</p>
              <p>
                Наше кредо – профессионализм, честность, порядочность,
                доброжелательность, индивидуальный подход к каждому пациенту.
                Успех диагностики и качественного лечения обеспечивается
                наличием современного оборудования ведущих мировых
                производителей, новейших методик в лабораторной диагностике, а
                также работой опытных специалистов: гинеколога, уролога, уролога
                – андролога, онколога – маммолога, гастроэнтеролога, кардиолога,
                терапевта, педиатра, невропатолога, врачей УЗИ, эндоскопистов и
                других. У нас работают только профессионалы своего дела.
              </p>
            </div>

            <div className={styles.textContBlock2}>
              <h1>Часто задаваемые вопросы</h1>
              <SwiperMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeClientPage;
