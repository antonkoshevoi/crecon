import styles from "./index.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader} />
    </div>
  );
};

export default Loader;
