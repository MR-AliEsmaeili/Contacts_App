import styled from "./ViweContacts.module.css";
const ViweContacts = ({
  deleteContact,
  contacts = { id, name, lastname, email, phone },
}) => {
  return (
    <div className={styled.container}>
      <h3>لیست مخاطبین:</h3>

      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <p>نام : {contact.name}</p>
            <p> نام خانوادگی : {contact.lastname}</p>

            <p>
              <span>✉</span>
              {contact.email}
            </p>

            <p>
              <span>📞</span> {contact.phone}
            </p>
            <button onClick={() => deleteContact(contact.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViweContacts;
