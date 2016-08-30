import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Container from 'components/main/Container';
import Header from 'components/main/Header';
import Options from 'components/main/Options';
import Content from 'components/main/Content';
import Footer from 'components/main/Footer';

const App = function (props={}) {

  const slogan = i18n.t('index.slogan');
  const login = i18n.t('login.title');
  const register = i18n.t('register.title');
  const optionsList = [
    { href: '/register', children: register },
    { href: '/login', children: login },
  ];

  return (
    <Container className='index'>
      <Header>
        <Options list={optionsList} />
      </Header>
      <Content className='index-content'>
        <div className='row align-middle'>
          <div className='column small-12 medium-6'>
            <h2>{slogan}</h2>
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
