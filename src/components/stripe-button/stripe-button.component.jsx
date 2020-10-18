import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HdcK0ATJc7kNcjHRVDcDLBb3oVZSisisWsMSGWuZF8VOqjVdYhAhm2cM0hKOUYHnA7H7pmjjKH9WAm82zU5O6Bv00T1Giy2Dx';

    const onToken = token => {
        console.log(token);
        alert('Payment successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;