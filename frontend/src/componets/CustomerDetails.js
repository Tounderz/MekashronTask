import React from 'react';

const CustomerDetails = ({ details }) => {
    return (
        <h4 className='text-center'> Email: {details.email}, Password: {details.password}, 
            FirstName: {details.firstName}, LastName: {details.lastName}, 
            Mobile: {details.mobile}, CountryID: {details.countryID}, 
            aID: {details.aID}, SignupIP: {details.signupIP}
        </h4>
    );
};

export default CustomerDetails;