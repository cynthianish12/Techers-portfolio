import React, { useState } from "react";

import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailJs from "@emailjs/browser";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEmailSending = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_email: "techerscorp@gmail.com",
      subject: formData.subject,
      message: formData.message,
    };

    emailJs
      .send("service_467ghe9", "template_vlwu3c6", templateParams, {
        publicKey: "5K2Yas8x6npjaVTe1",
      })
      .then(() => {
        setShowSuccessMessage(true);
        setIsLoading(false);
        // Reset form data
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setShowSuccessMessage(false);
      });
  };
  return (
    <Container maxW="lg" mt={12} className="">
      <form onSubmit={handleEmailSending} method="post">
        <FormControl isRequired mb={5}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            width="350px"
            borderWidth="1px"
            borderColor="wheat"
            borderRadius="10px"
          />
        </FormControl>

        <FormControl isRequired mb={5}>
          <FormLabel>Email</FormLabel>
          <Input
           textIndent={10}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            width="350px"
            borderWidth="1px"
            borderColor="wheat"
            borderRadius="10px"
          />
        </FormControl>

        <FormControl isRequired mb={5}>
          <FormLabel>Subject</FormLabel>
          <Input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            width="350px"
            borderWidth="1px"
            borderColor="wheat"
            borderRadius="10px"
          />
        </FormControl>

        <FormControl isRequired mb={5}>
          <FormLabel>Message</FormLabel>
          <Textarea
            type="text"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            width="350px"
            borderWidth="1px"
            borderColor="wheat"
            borderRadius="10px"
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          disabled={!formData.name || !formData.email || !formData.subject || !formData.message}
          type="submit"
          onClick={handleEmailSending}
          colorScheme="blue"
          bg="skyblue"
          px={15}
          py={8}
          borderWidth="1px"
          borderColor="wheat"
          borderRadius="10px"
  
        >
          Submit
        </Button>
        {showSuccessMessage && (
          <Box mt={4} color="green.500">
            <p>Message sent successfully!</p>
          </Box>
        )}
        {showErrorMessage && (
          <Box mt={4} color="red.500">
            <p>Message not sent. Please try again later.</p>
          </Box>
        )}
      </form>
    </Container>
  );
};

export default ContactForm;
