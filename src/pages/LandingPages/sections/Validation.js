function Validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") error.email = "Email boş olmamalıdır";
  else if (!email_pattern.test(values.email)) error.email = "Email eşleşmedi";
  else error.email = "";

  if (values.password === "") error.password = "Şifre boş olmamalıdır";
  else if (!password_pattern.test(values.password))
    error.password = "Şifre eşleşmedi";
  else error.password = "";

  if (values.name === "") error.name = "Ad Soyad boş olmamalıdır";
  else error.name = "";

  return error;
}

export default Validation;
