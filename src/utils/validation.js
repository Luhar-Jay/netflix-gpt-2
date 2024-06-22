export const checkValidation = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const ispasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  // const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

  if (!isEmailValid) return "Email ID is not valid";
  if (!ispasswordValid) return "Password is not valid";
  // if (!isNameValid) return "Name is not valid";

  return null;
};
