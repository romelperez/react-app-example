import React from 'react';

import Container  from 'shared/components/main/Container';
import Header     from 'shared/components/main/Header';
import Options    from 'shared/components/main/Options';
import Content    from 'shared/components/main/Content';
import Footer     from 'shared/components/main/Footer';
import LoginForm  from '../LoginForm';

const App = function (props = {}) {

  const optionsList = ['register'];

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
