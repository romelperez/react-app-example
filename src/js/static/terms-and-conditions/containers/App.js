import React, { PropTypes, createFactory } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';
import Container from 'components/main/Container';
import Header from 'components/main/Header';
import Content from 'components/main/Content';
import Footer from 'components/main/Footer';

const App = function (props={}) {

  const lng = props.lng || 'en';
  const i18nInstance = i18n.cloneInstance();

  const { subtitle='Empty', article='Empty' } = props;

  i18nInstance.changeLanguage(lng);

  return (
    <I18nextProvider i18n={i18nInstance}>
      <Container className='terms-and-conditions'>
        <Header />
        <Content className='terms-and-conditions__content'>
          <div className='row'>
            <div className='column small-12'>
              <h2>{subtitle}</h2>
            </div>
          </div>
          <div className='row'>
            <div className='column small-12'>
              <div dangerouslySetInnerHTML={{__html: article}} />
            </div>
          </div>
        </Content>
        <Footer noTermsAndConditions={true} />
      </Container>
    </I18nextProvider>
  );
};

export default App;
