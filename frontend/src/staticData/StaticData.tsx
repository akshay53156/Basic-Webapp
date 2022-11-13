type formInputDataProp = {
  id: string;
  type: string;
  placeholder: string;
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}[];

export const formInputData: formInputDataProp = [
  {
    name: "",
    type: "text",
    placeholder: "Name",
    id: "name",
  },
  {
    email: "",
    placeholder: "Email",
    type: "email",
    id: "email",
  },
  {
    password: "",
    type: "password",
    placeholder: "Enter Password",
    id: "password",
  },
  {
    confirmPassword: "",
    type: "text",
    placeholder: "Confirm Password",
    id: "confirmPassword",
  },
];
