import { useState } from "react";
import styles from "./Modal.module.css";
function Modal({ person, dateFormat, cmToMeters, handleModal, images }) {
  const [openModal, setOpenModal] = useState(true);
  function handleDelete() {
    handleModal();
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.overlay}>
          <button onClick={handleDelete} className={styles.btn}>
            &times;
          </button>
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
          <div className={styles.flexContent}>
            <span>BirthYear:</span>
            <span className={styles.space}>{person.birth_year}</span>
          </div>
          Films:
          {person.films.map((film, index) => (
            <li className={styles.film} key={index}>
              {film}
            </li>
          ))}
        </div>
      </div>
      )
    </>
  );
}

export default Modal;
