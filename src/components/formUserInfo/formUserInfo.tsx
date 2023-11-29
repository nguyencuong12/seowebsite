import React, { useState } from "react";
import { Box, Button, Input, Text } from "@chakra-ui/react";

const FormUserInfo = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPhone, setIsvalidPhone] = useState(false);

  const handleNameChange = (e: any) => {
    const inputName: string = e.target.value;
    // Simple name validation (allowing alphabets and spaces)

    setName(inputName);
    if (inputName.length <= 0) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
  };

  const handleEmailChange = (e: any) => {
    const inputEmail = e.target.value;
    // Simple email validation
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail);

    setEmail(inputEmail);
    setIsValidEmail(isValid);
  };
  const handlePhoneChange = (e: any) => {
    const inputPhone: string = e.target.value;
    const isValid = /(([03+[2-9]|05+[6|8|9]|07+[0|6|7|8|9]|08+[1-9]|09+[1-4|6-9]]){3})+[0-9]{7}\b/g.test(inputPhone);
    setPhone(inputPhone);
    setIsvalidPhone(isValid);
    if (inputPhone.length > 11) {
      setIsvalidPhone(false);
    }
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();

    // if (isValidName && isValidEmail && isValidPhone) {
    //   console.log("Name and email are valid. Submitting form...");
    //   //   setIsValidEmail(false);
    //   //   setIsValidName(false);
    //   //   setIsvalidPhone(false);
    // } else {
    //   console.log("Please correct the form errors.");
    // }
    if (!isValidName) {
      setIsValidName(false);
    }
    if (!isValidPhone) {
      setIsvalidPhone(false);
    }
    if (!isValidEmail) {
      setIsValidEmail(false);
    }
  };
  return (
    <Box maxW={"2xl"} mt={"2"} mx="auto" p={4} border="1px" borderColor={"gray.300"} borderRadius={"xl"}>
      <Text fontSize="xl" mb={2}>
        USER INFO
      </Text>

      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <Input
          placeholder="User Name!!"
          onChange={(event) => {
            handleNameChange(event);
          }}
        ></Input>
        {!isValidName && <p style={{ color: "red" }}>Please enter a valid username</p>}

        <Input
          placeholder="Phone !!"
          onChange={(event) => {
            handlePhoneChange(event);
          }}
        ></Input>
        {!isValidPhone && <p style={{ color: "red" }}>Please enter a valid phone number.</p>}
        <Input
          placeholder="Email!!"
          onChange={(event) => {
            handleEmailChange(event);
          }}
        ></Input>
        {!isValidEmail && <p style={{ color: "red" }}>Please enter a valid email address.</p>}
        <Button type="submit"> Submit Form</Button>
      </form>
    </Box>
  );
};

export default FormUserInfo;
