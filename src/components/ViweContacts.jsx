import styled from "./ViweContacts.module.css";
const ViweContacts = ({ deleteContact, contacts = [] }) => {
  return (
    <div className={styled.container}>
      <h3>لیست مخاطبین:</h3>
      {contacts.length === 0 ? (
        <p>مخاطبی برای نمایش وجود ندارد</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <p>نام : {contact.name}</p>
              <p> نام خانوادگی : {contact.lastname}</p>

              <p>
                <span>💬</span>
                {contact.email}
              </p>
              <p>
                <span>📱</span> {contact.phone}
              </p>
              <button onClick={() => deleteContact(contact.id)}>حذف 🗑</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViweContacts;
