import React from 'react';

import consts     from 'client/consts';
import i18n       from 'shared/i18n';
import Container  from 'shared/components/main/Container';
import Header     from 'shared/components/main/Header';
import Options    from 'shared/components/main/Options';
import Content    from 'shared/components/main/Content';
import Footer     from 'shared/components/main/Footer';
import Loading    from 'shared/components/main/Loading';
import selectors  from '../../selectors';

const App = React.createClass({

  render () {

    const { started } = selectors.intern.started();
    const options = this.getOptions();

    return (
      <Container className='cars'>
        <Header>
          <Options list={options} />
        </Header>
        <Content>
          {started ? (
            this.props.children
          ) : (
            <Loading />
          )}
        </Content>
        <Footer noTermsAndConditions={true} />
      </Container>
    );
  },

  getOptions () {

    const user = selectors.user.details();
    const cms = i18n.t('cms.title');
    const logout = i18n.t('logout.title');
    const options = [];

    if (user.admin) {
      options.push({
        href: consts.ROUTE.CMS,
        children: cms,
      });
    }

    options.push({
      href: consts.ROUTE.LOGOUT,
      children: logout,
    });

    return options;
  },
});

export default App;
