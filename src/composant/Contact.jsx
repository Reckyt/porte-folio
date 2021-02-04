import React from "react";

import "../css/Contact.css";

function Contact(props) {
  return (
    <div
      className={
        props.open ? "container--contact" : "container--contact--hide"
      }>
      <div className='form--header'>
        <h1 className='title--form'>Tell me about your project !</h1>
        <div
          class='close--icon'
          onClick={() => props.setOpen(!props.open)}></div>
      </div>
      <form className='form'>
        <input
          type='text'
          class='text-field'
          maxlength='256'
          name='First-name'
          placeholder='First name'
          id='First-name'
          required=''
        />
        <input
          type='text'
          class='text-field'
          maxlength='256'
          name='last-name'
          placeholder='Last name'
          id='Last-name'
          required=''
        />
        <input
          type='email'
          class='text-field email'
          maxlength='256'
          name='Email-adress'
          placeholder='Email adress'
          id='Email-adress'
          required=''
        />
        <textarea
          id='Project-description'
          name='Project-description'
          placeholder='Project description'
          maxlength='5000'
          required=''
          class='text-field message-field'></textarea>
        <input type='submit' value='send' class='submit-button' />
      </form>
    </div>
  );
}

export { Contact };
