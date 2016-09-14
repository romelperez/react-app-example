import React, { PropTypes } from 'react';
import i18n from 'i18n';
import data from 'data';
import Card from 'components/general/Card';
import Callout from 'components/general/Callout';

const LoginForm = React.createClass({

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

    return (
      <Card className='login-form'>
        <form ref={ref => this.form = ref} onSubmit={this.onSubmit}>
          <div className='row'>
            <div className='column small-12'>
              <h2>{title}</h2>
            </div>
          </div>
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='login-form__email'>{email}</label>
              <input id='login-form__email' name='email' type='email'
                     placeholder={email} />
            </div>
          </div>
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='login-form__password'>{password}</label>
              <input id='login-form__password' name='password' type='password'
                     placeholder={password} />
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
      this.login();
    }

    return false;
  },

  login () {

    const map = $(this.form).vulcanval('getMap');

    // TODO:
    data.
      login(map).
      then(response => {
        // DEBUG:
        console.log('login success', response);
      }).
      catch(response => {
        // DEBUG:
        console.log('login error', response);
      });
  },
});

export default LoginForm;
