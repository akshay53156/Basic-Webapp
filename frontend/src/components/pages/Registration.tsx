import { useState } from "react";
import styles from "./styles/Registration.module.scss";
import { registrationFormProp } from "./Types";
import { useDispatch } from "react-redux";
import { REGISTER_USER } from "../../redux/actionType";

function Registration() {
  const dispatch = useDispatch();

  const [registrationForm, setRegistrationForm] =
    useState<registrationFormProp>({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  const handleForm = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setRegistrationForm((p) => ({
      ...p,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = registrationForm;
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    let userData = {
      name,
      email,
      password,
    };
    dispatch({ type: REGISTER_USER, payload: userData });
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Registration</h1>
        <main className={styles.mainForm}>
          <form onSubmit={handleSubmit}>
            {Object.entries(registrationForm).map(([key, value], index) => {
              return (
                <input
                  required
                  type={
                    key === "password" || key === "confirmPassword"
                      ? "password"
                      : key === "email"
                      ? "email"
                      : "text"
                  }
                  key={`${key}${index}`}
                  placeholder={key}
                  name={key}
                  value={value}
                  onChange={handleForm}
                />
              );
            })}
            <button type="submit" className={styles.submitBtn}>
              Submit
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Registration;
