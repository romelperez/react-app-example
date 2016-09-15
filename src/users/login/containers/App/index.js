import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Container from 'components/main/Container';
import Header from 'components/main/Header';
import Options from 'components/main/Options';
import Content from 'components/main/Content';
import Footer from 'components/main/Footer';
import LoginForm from '../LoginForm';

const App = function (props={}) {

  const login = i18n.t('login.title');
  const register = i18n.t('register.title');
  const optionsList = [{ href: '/register', children: register }];

  return (
    <Container className='login'>
      <Header>
        <Options list={optionsList} />
      </Header>
      <Content>
        <div className='row align-center'>
          <div className='column small-10 medium-6 large-4'>
            <LoginForm />
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
