"use client";
import React, { useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  Box
} from "@chakra-ui/react";
import { sendContactForm } from "../../../lib/api";

const initValues = { name: "", email: "", subject: "", message: "" };

const initState = { isLoading: false, error: "", values: initValues };

export default function Message() {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <Container maxW="450px" mt={12}>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}

      <FormControl
        isRequired
        isInvalid={touched.name && !values.name}
        mb={5}
      >
        <FormLabel>Name</FormLabel>
        <Box borderWidth="1px" borderColor="black" borderRadius="md" >
          <Input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            width="350px"
          />
        </Box>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.email && !values.email}
        mb={5}
      >
        <FormLabel>Email</FormLabel>
        <Box borderWidth="1px" borderColor="black" borderRadius="md">
          <Input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            width="350px"
          />
        </Box>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
      >
        <FormLabel>Subject</FormLabel>
        <Box borderWidth="1px" borderColor="black" borderRadius="md">
          <Input
            type="text"
            name="subject"
            value={values.subject}
            onChange={handleChange}
            onBlur={onBlur}
            width="350px"
          />
        </Box>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel>Message</FormLabel>
        <Box borderWidth="1px" borderColor="black" borderRadius="md">
          <Textarea
            type="text"
            name="message"
            rows={4}
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            width="350px"
          />
        </Box>
        <FormErrorMessage>Required</FormErrorMessage>
      </FormControl>
      <Button
  variant="outline"
  colorScheme="blue"
  isLoading={isLoading}
  disabled={
    !values.name ||
    !values.email ||
    !values.subject ||
    !values.message
  }
  onClick={onSubmit}
  bg="skyblue" // Set background color to sky blue
  color="white" 
  px={10}
  py={7}// Set text color to white
  borderColor="skyblue" // Set border color to sky blue
  _hover={{ // Apply hover effect
    px:20
  }}
  borderRadius="md" // Set border radius
>
  Submit
</Button>


    </Container>
  );
}
