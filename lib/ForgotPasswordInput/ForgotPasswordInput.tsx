import { PasswordInput, Text, Group, Anchor } from '@mantine/core';

export function ForgotPasswordInput() {
  return (
    <>
      <Group justify="space-between" mb={5}>
        <Text component="label" htmlFor="your-password" size="sm" fw={500}>
          Your password
        </Text>

        <Anchor href="#" onClick={(event) => event.preventDefault()} pt={2} fw={500} fz="xs">
          Forgot your password?
        </Anchor>
      </Group>
      <PasswordInput placeholder="Your password" id="your-password" />
    </>
  );
}
