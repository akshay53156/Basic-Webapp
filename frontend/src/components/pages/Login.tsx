import React, { useState } from "react";
import styles from "./styles/Registration.module.scss"; // Same Style as Registration Form
import { loginFormProp } from "./Types";

function Login() {
  const [loginForm, setLoginForm] = useState<loginFormProp>({
    email: "",
    password: "",
  });

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((p) => ({
      ...p,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.heading}>Login</h1>
        <main className={styles.mainForm}>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              placeholder="Email"
              name="email"
              value={loginForm.email}
              onChange={handleChange}
            />
            <input
              required
              type="password"
              placeholder="Password"
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
            <button type="submit" className={styles.submitBtn}>
              Login
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default Login;
