import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Stack,
} from '@mantine/core';
import Link from 'next/link';
import { Select } from '@mantine/core';

export function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    gender: '',
  });

  const handleChange = (name: string, value: string | null) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = () => {
    // Access the form data
    console.log('Form Data:', formData);

    // Add validation and further processing logic here
  };

  return (
    <Container size={520} my={40}>
      <Title align="center">Sign Up</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Stack>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={(event) => handleChange('firstName', event.target.value)}
            required
          />
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={(event) => handleChange('lastName', event.target.value)}
            required
          />
          <TextInput
            label="Username"
            placeholder="Create your username"
            name="username"
            value={formData.username}
            onChange={(event) => handleChange('username', event.target.value)}
            required
          />
          <TextInput
            label="Email"
            placeholder="Enter your email address"
            name="email"
            value={formData.email}
            onChange={(event) => handleChange('email', event.target.value)}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={(event) => handleChange('password', event.target.value)}
            required
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Re-enter your password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(event) => handleChange('confirmPassword', event.target.value)}
            required
          />
          <Select
            label="Gender"
            placeholder="Select your gender"
            name="gender"
            value={formData.gender}
            onChange={(value) => handleChange('gender', value)}
            data={[
              { value: 'female', label: 'Female' },
              { value: 'male', label: 'Male' },
              { value: 'other', label: 'Other' },
            ]}
          />
        </Stack>
        <Button fullWidth mt="xl" onClick={handleSignup}>
          Sign Up
        </Button>
        <Text color="dimmed" size="sm" align="center" mt={5}>
          Already have an account?{' '}
          <Link href="/login">
            Login
          </Link>
        </Text>
      </Paper>
    </Container>
  );
}
