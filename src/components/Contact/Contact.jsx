import { FaUserAlt } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './Contact.module.css';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  return (
    <div className={css.contactWrapper}>
      <div>
        <p>
          <FaUserAlt className={css.icon} size="18" />
          {name}
        </p>
        <p>
          <FaPhone className={css.icon} size="18" />
          {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
}
