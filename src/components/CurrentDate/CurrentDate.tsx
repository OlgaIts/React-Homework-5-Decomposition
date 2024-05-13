import styles from "./CurrentDate.module.scss";

export const CurrentDate = () => {
  const getCurrentDateTime = () => {
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    const days = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ];

    const now = new Date();
    const dayOfWeek = days[now.getDay()];
    const month = months[now.getMonth()];
    const date = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return `${date} ${month}, ${dayOfWeek} ${hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };
  return <span className={styles.date}>{getCurrentDateTime()}</span>;
};
