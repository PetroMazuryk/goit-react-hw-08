import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

export default function ContactList() {
  const filteredContactList = useSelector(selectVisibleContacts);
  // console.log(filteredContactList);

  return (
    <TransitionGroup>
      {filteredContactList.map(contact => (
        <CSSTransition key={contact.id} timeout={500} classNames="contact">
          <Contact contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
