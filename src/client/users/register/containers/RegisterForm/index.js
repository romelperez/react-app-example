import React from 'react';

import data         from 'client/data';
import consts       from 'shared/consts';
import i18n         from 'shared/i18n';
import validators   from 'shared/tools/validators';
import Card         from 'shared/components/general/Card';
import Callout      from 'shared/components/general/Callout';

const RegisterForm = React.createClass({

  getInitialState () {
    return {
      error: false,
      message: ''
    };
  },

  componentDidMount () {
    $(this.form).vulcanval(validators.register);
  },

  render () {

    const title = i18n.t('register.title');
    const button = i18n.t('register.button');
    const name = i18n.t('register.fields.name');
    const email = i18n.t('register.fields.email');
    const password = i18n.t('register.fields.password');
    const repassword = i18n.t('register.fields.repassword');

    let errorEl;
    if (this.state.error) {
      const onClose = e => {
        this.setState({ error: false });
      };
      errorEl = (
        <div className='row'>
          <div className='column small-12'>
            <Callout onClose={onClose}>
              {this.state.message}
            </Callout>
          </div>
        </div>
      );
    }

    return (
      <Card className='register-form'>
        <form ref={ref => (this.form = ref)} onSubmit={this.onSubmit}>

          <div className='row'>
            <div className='column small-12'>
              <h2>{title}</h2>
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {errorEl}

          {/* NAME */}
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='register-form__name'>{name}</label>
              <input id='register-form__name' name='name' type='text'
                placeholder={name} data-vv-display='#register-form__name-display' />
              <div id='register-form__name-display' />
            </div>
          </div>

          {/* EMAIL */}
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='register-form__email'>{email}</label>
              <input id='register-form__email' name='email' type='email'
                placeholder={email} data-vv-display='#register-form__email-display' />
              <div id='register-form__email-display' />
            </div>
          </div>

          {/* PASSWORD */}
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='register-form__password'>{password}</label>
              <input id='register-form__password' name='password' type='password'
                placeholder={password} data-vv-display='#register-form__password-display' />
              <div id='register-form__password-display' />
            </div>
          </div>

          {/* RE-PASSWORD */}
          <div className='row'>
            <div className='column small-12'>
              <label htmlFor='register-form__repassword'>{repassword}</label>
              <input id='register-form__repassword' name='repassword' type='password'
                placeholder={repassword} data-vv-display='#register-form__repassword-display' />
              <div id='register-form__repassword-display' />
            </div>
          </div>

          <div className='row text-center'>
            <div className='column small-12'>
              <button className='button primary'>{button}</button>
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
      this.exec(e);
    }

    return false;
  },

  onError (e, nextState) {
    this.setState(nextState);
  },

  onSuccess (e) {
    window.location.href = consts.ROUTE.LOGIN;
  },

  exec (e) {

    const map = $(this.form).vulcanval('getMap');

    data.
      register(map).
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

export default RegisterForm;
