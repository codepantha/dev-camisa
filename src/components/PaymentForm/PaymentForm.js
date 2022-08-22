import { CardElement } from '@stripe/react-stripe-js';

import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { PaymentFormContainer, FormContainer } from './PaymentForm.styles';

const PaymentForm = () => (
  <PaymentFormContainer>
    <FormContainer>
      <h2>Credit Card Payment: </h2>
      <CardElement />
      <Button type={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
    </FormContainer>
  </PaymentFormContainer>
);

export default PaymentForm;
