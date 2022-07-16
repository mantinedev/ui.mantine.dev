import { useCallback, useRef, useState } from 'react';
import { Button, Group, Popover, TextInput, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { Check, X } from 'tabler-icons-react';

export function InlineEditableText() {
  const theme = useMantineTheme();
  const [text, setText] = useState<string>('Inline editable text (click to edit)');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const form = useForm({
    initialValues: { value: text },
  });

  const handleSubmit = useCallback(
    (value: string) => {
      setText(value);
      setIsEditing(false);
      inputRef.current && inputRef.current.blur();
    },
    [setText, setIsEditing, inputRef]
  );

  const handleCancel = useCallback(() => {
    form.setFieldValue('value', text);
    setIsEditing(false);
    inputRef.current && inputRef.current.blur();
  }, [form, text, setIsEditing, inputRef]);

  const textInput = (
    <TextInput
      ref={inputRef}
      autoFocus={isEditing}
      variant="filled"
      value={form.values.value}
      readOnly={!isEditing}
      placeholder="(click to edit)"
      onClick={() => setIsEditing(true)}
      onChange={(event) => {
        form.setFieldValue('value', event.currentTarget.value);
      }}
      sx={{ width: '400px' }}
      styles={{
        filledVariant: {
          backgroundColor: isEditing ? theme.colors.gray[2] : 'white',
          '&:hover': {
            background: theme.colors.gray[2],
          },
        },
      }}
    />
  );

  const cancelButton = (
    <Button variant="subtle" size="xs" onClick={handleCancel}>
      <X size={16} />
    </Button>
  );

  const submitButton = (
    <Button
      type="submit"
      variant="outline"
      size="xs"
      onClick={() => {
        handleSubmit(form.values.value);
      }}
      onSubmit={() => {
        handleSubmit(form.values.value);
      }}
    >
      <Check size={16} />
    </Button>
  );

  return (
    <>
      <form onSubmit={form.onSubmit(({ value }) => handleSubmit(value))}>
        <Popover
          position="bottom"
          placement="end"
          spacing="xs"
          opened={isEditing}
          onFocus={() => inputRef.current && inputRef.current.focus()}
          onClose={handleCancel}
          target={textInput}
          closeOnEscape
          closeOnClickOutside
        >
          <Group position="right" spacing="xs">
            {submitButton}
            {cancelButton}
          </Group>
        </Popover>
      </form>
    </>
  );
}
