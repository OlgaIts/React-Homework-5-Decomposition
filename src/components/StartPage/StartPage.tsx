import {CurrentDate} from "../CurrentDate/CurrentDate";
import {Image} from "../Image/Image";
import {News} from "../News/News";
import {Search} from "../Search/Search";
import {Title} from "../Title/Title";
import logo from "../../assets/yandex_logo.png";
import {NavMenu} from "../NavMenu/NavMenu";
import {Banner} from "../Banner/Banner";
import {List} from "../List/List";
import styles from "./StartPage.module.scss";

const navList = [
  "Новости",
  "Картинки",
  "Видео",
  "Маркет",
  "Переводчик",
  "Эфир",
  "ещё",
];

const visitedList = [
  "Недвижимость - о сталинках",
  "Маркет - люстры и светильники",
  "Авто.ру  - 4х4 до 500 000",
];

const programmList = [
  "02:00 ТНТ.Best",
  "02:15 Джинглики",
  "02:25 Наедине со всеми",
];
const etherList = [
  "Управление как искусство",
  "Ночь. Мир в это время",
  "Что-то там ещё...",
];

export const StartPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titles_wrap}>
        <Title tag='h2'>Сейчас в СМИ</Title>
        <Title tag='h3'>в Германии</Title>
        <Title tag='h3'>Рекомендуем</Title>
        <CurrentDate />
      </div>
      <section className={styles.news}>
        <News text='Первая хорошая новость' icon={"newspaper"} />
        <News text='Вторая хорошая новость' icon={"grade"} />
        <News text='Третья хорошая новость' icon={"newspaper"} />
        <News text='Червёртая хорошая новость' icon={"grade"} />
      </section>
      <NavMenu list={navList} />
      <div className={styles.seatch_wrap}>
        <Image src={logo} alt='logo' />
        <Search />
      </div>
      <Banner />
      <section className={styles.section_wrap}>
        <div>
          <article>
            <Title tag='h3'>Погода</Title>
            <News icon='thunderstorm' text='+17' />
          </article>
          <article>
            <Title tag='h3'>Посещаемое</Title>
            <List list={visitedList} />
          </article>
        </div>

        <div>
          <article>
            <Title tag='h3'>Карта Германии</Title>
            <a href='#'>Расписание</a>
          </article>
          <article>
            <Title tag='h3'>Телепрограмма</Title>
            <List list={programmList} />
          </article>
        </div>

        <div>
          <article>
            <Title tag='h3'>Эфир</Title>
            <List list={etherList} />
          </article>
        </div>
      </section>
    </main>
  );
};
