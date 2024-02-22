import React from 'react';
const DisplayLoginData = ({ LoginData}) => {
  return (
    <div>
      <h2>Login Data</h2>
      {LoginData && (
        <div>
          <p>Username: {LoginData.name}</p>
          <p>Userpass: {LoginData.password}</p>
          <p>Usernumber: {LoginData.number}</p>
          <p>Useremail: {LoginData.email}</p>
          {/* <p>Password: {LoginFormData.pass}</p> */}
        </div>
      )}
    </div>
  );
};

export default DisplayLoginData;
