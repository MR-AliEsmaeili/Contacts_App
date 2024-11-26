import styled from "./AddContact.module.css";

const AddContact = ({ changeHandeler, FormState, buttonHandler }) => {
  return (
    <div className={styled.container}>
      <input
        onChange={changeHandeler}
        value={FormState.name}
        name="name"
        type="text"
        placeholder="نام"
      />
      <input
        onChange={changeHandeler}
        name="lastname"
        value={FormState.lastname}
        type="text"
        placeholder="نام خانوادگی"
      />
      <input
        onChange={changeHandeler}
        name="email"
        value={FormState.email}
        type="email"
        placeholder="ایمیل"
      />
      <input
        onChange={changeHandeler}
        name="phone"
        value={FormState.phone}
        type="number"
        placeholder="شماره تماس"
      />
      <button onClick={buttonHandler}>ثبت</button>
    </div>
  );
};

export default AddContact;
