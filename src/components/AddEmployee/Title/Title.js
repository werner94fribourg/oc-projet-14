import styles from './Title.module.scss';

/**
 * Displayed title when the user in the submission form page.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const Title = () => {
  return (
    <div className={styles.title}>
      <h1>HRnet</h1>
    </div>
  );
};

Title.propTypes = {};

export default Title;
