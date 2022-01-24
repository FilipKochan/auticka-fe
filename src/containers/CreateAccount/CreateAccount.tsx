import React, { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../selectors';
import BoxWithCorners from '../../components/BoxWithCorners/BoxWithCorners';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Status } from '../../types';
import CustomButton from '../../components/CustomButton/CustomButton';
import FormError from '../../components/FormError/FormError';
import { createUser } from '../../api/user';

const CreateAccount = () => {
  useEffect(() => {
    document.title = 'Přihlášení';
  }, []);

  const { name, state } = useSelector(getUser);
  const dispatch = useDispatch();
  const validate = ({ name, password, passwordRepeat }: { name: string; password: string; passwordRepeat: string }) => {
    let errors = {};

    if (!/^[a-zA-Z0-9èàùìòÈÀÒÙÌéáúíóÉÁÚÍÓëäüïöËÄÜÏÖêâûîôÊÂÛÎÔç'-]*$/.test(name)) {
      errors = { ...errors, name: 'Jméno obsahuje nepovolené znaky.' };
    }

    if (!name) {
      errors = { ...errors, name: 'Toto pole je povinné.' };
    }

    if (password.length < 4) {
      errors = { ...errors, password: 'Heslo musí mít alespoň 4 znaky.' };
    }

    if (!password) {
      errors = { ...errors, password: 'Toto pole je povinné.' };
    }

    if (!passwordRepeat) {
      errors = { ...errors, passwordRepeat: 'Toto pole je povinné.' };
    }

    if (passwordRepeat !== password) {
      errors = { ...errors, passwordRepeat: 'Hesla se neshodují.' };
    }

    return errors;
  };
  return !name ? (
    <div className="LoginWrapper">
      <BoxWithCorners>
        <Formik
          initialValues={{ name: '', password: '', passwordRepeat: '' }}
          onSubmit={(values) => createUser(values.name, values.password)}
          validate={validate}
        >
          {() => (
            <Form className="LoginWrapper__form">
              <Field type="text" name="name" placeholder="Uživatelské jméno" />
              <ErrorMessage name="name" component={FormError} />
              <Field type="password" name="password" placeholder="Heslo" />
              <ErrorMessage name="password" component={FormError} />
              <Field type="password" name="passwordRepeat" placeholder="Ptovrzení hesla" />
              <ErrorMessage name="passwordRepeat" component={FormError} />
              <CustomButton type="submit" variant="primary" loading={state === Status.requesting}>
                Vytořit účet
              </CustomButton>
              <div>
                Máte už účet? Přihlaste se{' '}
                <Link to="/login" className="StyledLink">
                  zde
                </Link>
                .
              </div>
            </Form>
          )}
        </Formik>
      </BoxWithCorners>
    </div>
  ) : (
    <Navigate to="/muj-ucet" />
  );
};

export default CreateAccount;
