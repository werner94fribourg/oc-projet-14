import { STATES } from '../../../../utils/globals';
import Input from '../../Input/Input';
import styles from './AddressFieldSet.module.scss';

/**
 * Component representing the fieldset for all addresses' inputs in the form.
 *
 * @version 1.0.0
 * @author [Werner Schmid](https://github.com/werner94fribourg)
 */
const AddressFieldSet = () => {
  return (
    <fieldset className={styles.address}>
      <legend>Address</legend>
      <Input
        id="street"
        type="text"
        title="Street"
        errorMessage="Please provide a valid street."
      />
      <Input
        id="city"
        type="text"
        title="City"
        errorMessage="Please provide a valid city."
      />
      <Input
        id="state"
        type="select"
        title="State"
        errorMessage="Please select a state."
        options={STATES}
      />
      <Input
        id="zipCode"
        type="number"
        title="Zip Code"
        errorMessage="Please provide a valid zip code."
      />
    </fieldset>
  );
};

AddressFieldSet.propTypes = {};

export default AddressFieldSet;
