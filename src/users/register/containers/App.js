import React, { PropTypes } from 'react';
import i18n from 'i18n';
import Container from 'components/main/Container';
import Header from 'components/main/Header';
import Options from 'components/main/Options';
import Content from 'components/main/Content';
import Footer from 'components/main/Footer';

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
        <div className='row'>
          <div className='column small-12'>
            {/* */}
          </div>
        </div>
      </Content>
      <Footer />
    </Container>
  );
};

export default App;
