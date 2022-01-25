import React, { useEffect, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../selectors';
import BoxWithCorners from '../../components/BoxWithCorners/BoxWithCorners';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './LoginPage.scss';
import FormError from '../../components/FormError/FormError';
import CustomButton from '../../components/CustomButton/CustomButton';
import { Status } from '../../types';
import { loginUserAction } from '../../actions/userActions';
import ReCAPTCHA from 'react-google-recaptcha';

const Login = () => {
  useEffect(() => {
    document.title = 'Přihlášení';
  }, []);

  const { name, state, error } = useSelector(getUser);
  const dispatch = useDispatch();
  const captchaRef = useRef<ReCAPTCHA>(null);

  const validate = ({ name, password }: { name: string; password: string }) => {
    let errors = {};
    if (!name) {
      errors = { ...errors, name: 'Toto pole je povinné.' };
    }
    if (!password) {
      errors = { ...errors, password: 'Toto pole je povinné.' };
    }

    return errors;
  };
  return !name ? (
    <div className="LoginWrapper">
      <BoxWithCorners>
        <Formik
          initialValues={{ name: '', password: '' }}
          onSubmit={async (values) => {
            if (state === Status.requesting) return;
            const { name, password } = values;
            const token = await captchaRef.current?.executeAsync();
            captchaRef.current?.reset();
            dispatch(loginUserAction(name, password, token as string));
          }}
          validate={validate}
        >
          {() => (
            <Form className="LoginWrapper__form">
              <Field type="text" name="name" placeholder="Uživatelské jméno" />
              <ErrorMessage name="name" component={FormError} />
              <Field type="password" name="password" placeholder="Heslo" />
              <ErrorMessage name="password" component={FormError} />
              {state === Status.error && <FormError>{error ? error : 'Nesprávné přihlašovací údaje.'}</FormError>}
              <CustomButton type="submit" variant="primary" loading={state === Status.requesting}>
                Přihlásit se
              </CustomButton>
              <div>
                Nemáte ještě účet? Založte si ho{' '}
                <Link to="/novy-ucet" className="StyledLink">
                  zde
                </Link>
                .
              </div>
            </Form>
          )}
        </Formik>
      </BoxWithCorners>
      <ReCAPTCHA ref={captchaRef} sitekey={process.env.REACT_APP_SITE_KEY as string} size="invisible" />
    </div>
  ) : (
    <Navigate to="/muj-ucet" />
  );
};

export default Login;
