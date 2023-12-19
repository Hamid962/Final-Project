import { useEffect, useState } from "react";
import Modal from "./Modal";
import styles from "./UserItem.module.css";
const api = `https://picsum.photos/200/300`;
function UserItem({ person }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchPictures() {
      try {
        const res = await fetch(`${api}`);

        const data = res;
        setImages(data.url);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchPictures();
  }, []);

  // console.log(images);

  const [open, setOpen] = useState(false);

  function cmToMeters(cm) {
    const meters = cm * 0.01;
    const roundedMeters = meters.toFixed(1);
    return parseFloat(roundedMeters);
  }

  function dateFormat(dateString) {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const day = dateObject.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  function handleClick() {
    setOpen((prevState) => !prevState);
  }

  return (
    <>
      {!open ? (
        <div className={styles.card} onClick={handleClick}>
          <img className={styles.img} src={images} alt={images} />
          <h2 className={styles.flex}>{person.name}</h2>
          <div className={styles.flexContent}>
            <span>Height:</span>
            <span className={styles.space}>
              {Math.ceil(cmToMeters(person.height))}{" "}
            </span>
          </div>
          <div className={styles.flexContent}>
            <span>Mass:</span>
            <span className={styles.space}>{person.mass}</span>
          </div>
          <div className={styles.flexContent}>
            <span>Created:</span>
            <span className={styles.space}>{dateFormat(person.created)}</span>
          </div>
          <div className={styles.flexContent}>
            <span>Edited:</span>
            <span className={styles.space}>{dateFormat(person.edited)}</span>
          </div>
        </div>
      ) : (
        <Modal
          person={person}
          dateFormat={dateFormat}
          cmToMeters={cmToMeters}
          handleModal={handleClick}
          images={images}
        />
      )}
    </>
  );
}

export default UserItem;
