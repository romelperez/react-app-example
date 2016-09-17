import React, { PropTypes } from 'react';

import i18n         from 'i18n';
import data         from 'data';
import constants    from 'constants';
import settings     from 'settings';
import Card         from 'components/general/Card';
import Callout      from 'components/general/Callout';

const LoginForm = React.createClass({

  getInitialState () {
    return {
      error: false,
      message: ''
    };
  },

  componentDidMount () {
    $(this.form).vulcanval({
      disableHTML5Validation: true,
      fields: [{
        name: 'email',
        required: true,
        validators: { isAppEmail: true }
      }, {
        name: 'password',
        required: true,
        validators: { isAppPassword: true }
      }]
    });
  },

  render () {

    const title =     i18n.t('login.title');
    const email =     i18n.t('login.email');
    const password =  i18n.t('login.password');
    const enter =     i18n.t('login.enter');

    let errorEl;
    if (this.state.error) {
      const onClose = e => {
        this.setState({ error: false });
      };
      errorEl = (
        <div className='row'>
          <div className='column small-12'>
            <Callout onClose={onClose}>
              <b>Error:</b> {this.state.message}
            </Callout>
          </div>
        </div>
      );
    }

    return (
      <Card className='login-form'>
        <form ref={ref => this.form = ref} onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='column small-12'>
              <h2>{title}</h2>
            </div>
          </div>
          {errorEl}
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='login-form__email'>{email}</label>
              <input id='login-form__email' name='email' type='email'
                placeholder={email} data-vv-display='#login-form__email-display' />
              <div id='login-form__email-display' />
            </div>
          </div>
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='login-form__password'>{password}</label>
              <input id='login-form__password' name='password' type='password'
                placeholder={password} data-vv-display='#login-form__password-display' />
              <div id='login-form__password-display' />
            </div>
          </div>
          <div className='row text-center'>
            <div className='column small-12'>
              <button className='button primary'>{enter}</button>
            </div>
          </div>
        </form>
      </Card>
    );
  },

  onSubmit (e) {

    e.preventDefault();

    const invalids = $(this.form).vulcanval('inspect');
    if (!invalids) {
      this.login(e);
    }

    return false;
  },

  onError (e, nextState) {
    this.setState(nextState);
  },

  onSuccess (e) {
    window.location.href = constants.ROUTE.CARS;
  },

  login (e) {

    const map = $(this.form).vulcanval('getMap');

    data.
      login(map).
      then(response => {
        this.onSuccess(e);
      }).
      catch(error => {
        this.onError(e, {
          error: true,
          message: error.response.data.message,
        });
      });
  },
});

export default LoginForm;
