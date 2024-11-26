import { useEffect, useState } from "react";
import FormAlert from "./FormAlert";
import { v4 } from "uuid";
import ViweContacts from "./ViweContacts";
import AddContact from "./AddContact";

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [FormState, setFormState] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  });
  const [ShowAlert, setShowAlert] = useState(true);
  useEffect(() => {
    console.log("Contacts updated:", contacts);
  }, [contacts]);
  const changeHandeler = (e) => {
    const { name, value } = e.target;

    setFormState({ ...FormState, [name]: value });
  };

  const buttonHandler = () => {
    console.log(FormState);
    if (
      !FormState.name ||
      !FormState.lastname ||
      !FormState.email ||
      !FormState.phone
    ) {
      setShowAlert(false);
    } else {
      const newContact = { ...FormState, id: v4() };
      setContacts([...contacts, newContact]);
      setShowAlert(true);
      setFormState({
        name: "",
        lastname: "",
        email: "",
        phone: "",
      });
    }
  };
  const deleteContact = (id) => {
    const UpdateContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(UpdateContacts);
  };
  return (
    <>
      <FormAlert ShowAlert={ShowAlert} />

      <AddContact
        changeHandeler={changeHandeler}
        FormState={FormState}
        buttonHandler={buttonHandler}
      />
      <ViweContacts
        contacts={contacts}
        deleteContact={deleteContact}
      ></ViweContacts>
    </>
  );
};

export default ContactForm;
