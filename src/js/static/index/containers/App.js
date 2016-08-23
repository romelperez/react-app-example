import React, { PropTypes } from 'react';
import { I18nextProvider } from 'react-i18next';
import Container from 'components/main/Container';
import Header from 'components/main/Header';
import Options from 'components/main/Options';
import Content from 'components/main/Content';
import Footer from 'components/main/Footer';
import i18n from 'i18n';

const App = function (props={}) {

  const lng = props.lng || 'en';
  const i18nInstance = i18n.cloneInstance();
  i18nInstance.changeLanguage(lng);

  const slogan = i18nInstance.t('index.slogan');
  const login = i18nInstance.t('login.title');
  const register = i18nInstance.t('register.title');
  const optionsList = [{
    href: '/register', children: register
  }, {
    href: '/login', children: login
  }];

  return (
    <I18nextProvider i18n={i18nInstance}>
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
    </I18nextProvider>
  );
};

export default App;
