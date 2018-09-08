import React from 'react';
import Layout from '../components/layout';

const Base = (props) => {
  return (
    <Layout>
      <h1>Adjustable base</h1>
      {console.log(props)}
    </Layout>
  )
}

export default Base;