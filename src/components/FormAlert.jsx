import styled from "./FormAlert.module.css";
const FormAlert = ({ ShowAlert }) => {
  return (
    <div className={ShowAlert ? styled.hidden : styled.container}>
      <span>اطلاعات فرم را تکمیل کنید !</span>
    </div>
  );
};

export default FormAlert;
