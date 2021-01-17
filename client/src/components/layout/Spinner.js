import React, { Fragment } from 'react';
import Spinner from '../../shared/images/spinner.gif';

export default () => (
  <Fragment>
    <img
      src={Spinner}
      style={{
        width: '40px',
        margin: '100px auto auto auto',
        display: 'block',
      }}
      alt='Loading...'
    />
  </Fragment>
);
