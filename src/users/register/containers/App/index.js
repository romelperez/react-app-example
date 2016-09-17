import React, { PropTypes } from 'react';

import i18n         from 'i18n';
import Container    from 'components/main/Container';
import Header       from 'components/main/Header';
import Options      from 'components/main/Options';
import Content      from 'components/main/Content';
import Footer       from 'components/main/Footer';
import RegisterForm from '../RegisterForm';

const App = function (props={}) {

  const optionsList = ['login'];

  return (
    <Container className='register'>
      <Header>
        <Options list={optionsList} />
      </Header>
      <Content>
        <div className='row align-center'>
          <div className='column small-10 medium-6 large-4'>
            <RegisterForm />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
