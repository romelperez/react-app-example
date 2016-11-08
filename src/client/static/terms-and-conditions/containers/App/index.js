import React      from 'react';
import Container  from 'shared/components/main/Container';
import Header     from 'shared/components/main/Header';
import Content    from 'shared/components/main/Content';
import Footer     from 'shared/components/main/Footer';

const App = function (props = {}) {

  const { subtitle = 'Empty', article = 'Empty' } = props;

  return (
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
  );
};

export default App;
