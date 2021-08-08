import React, { useState } from 'react';

import { useCreateUserMutation } from 'graphql/mutations/CreateUser.generated';
import { GetAllUsersDocument } from 'graphql/queries/GetAllUsers.generated';

import * as S from './styles';

const DEFAULT_FORM_VALUES = {
  name: '',
  email: '',
  password: '',
};

type FormTypes = typeof DEFAULT_FORM_VALUES;

const useHandleFormValues = () => {
  const [formValues, setFormValues] = useState<FormTypes>(DEFAULT_FORM_VALUES);

  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return {
    formValues,
    handleChange,
  };
};

const CreateUser = () => {
  const [mutation, { loading }] = useCreateUserMutation();
  const { formValues, handleChange } = useHandleFormValues();

  const handleSubmit = () => {
    mutation({ variables: formValues, refetchQueries: [GetAllUsersDocument] });
  };

  if (loading) {
    return <div>Creating a new User</div>;
  }

  return (
    <S.Form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" name="name" value={formValues['name']} onChange={handleChange} />
      <label>Email:</label>
      <input type="text" name="email" value={formValues['email']} onChange={handleChange} />
      <label>Password:</label>
      <input type="text" name="password" value={formValues['password']} onChange={handleChange} />
      <button type="submit">Create</button>
    </S.Form>
  );
};

export default CreateUser;
