import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/PhoneBook/Button';
import { StyledTextList } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operation';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  function onDelContact() {
    dispatch(deleteContact(contact.id));
  }

  return (
    <>
      <StyledTextList>{contact.name}</StyledTextList>
      <StyledTextList>{contact.number}</StyledTextList>
      <Button onClick={onDelContact}>Delete</Button>
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.object,
};
