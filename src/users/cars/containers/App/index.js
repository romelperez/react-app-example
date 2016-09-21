import React, { PropTypes } from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import consts     from 'consts';
import i18n       from 'i18n';
import Container  from 'components/main/Container';
import Header     from 'components/main/Header';
import Options    from 'components/main/Options';
import Content    from 'components/main/Content';
import Footer     from 'components/main/Footer';
import Loading    from 'components/main/Loading';
import selectors  from '../../selectors';
import Brands     from '../Brands';
import Brand      from '../Brand';
import Car        from '../Car';
import User       from '../User';

const App = React.createClass({

  render () {

    const { started } = selectors.intern();
    const options = this.getOptions();

    return (
      <Container className='cars'>
        <Header>
          <Options list={options} />
        </Header>
        <Content>
          {started ? (
            <Router history={hashHistory}>
              <Route path='/' component={Brands} />
              <Route path='/brand/:brandId' component={Brand} />
              <Route path='/car/:carId' component={Car} />
              <Route path='/user' component={User} />
              <Redirect from='*' to='/' />
            </Router>
          ) : (
            <Loading />
          )}
        </Content>
        <Footer noTermsAndConditions={true} />
      </Container>
    );
  },

  getOptions () {

    const user =    selectors.user();
    const cms =     i18n.t('cms.title');
    const logout =  i18n.t('logout.title');
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
