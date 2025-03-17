import React from 'react';
import { TextInput } from '@strapi/design-system';
import { useIntl } from 'react-intl';

interface YoutubeInputProps {
  name: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  value: string;
  intlLabel: { id: string; defaultMessage: string };
  disabled?: boolean;
  error?: string;
  required?: boolean;
}

export const Input: React.FC<YoutubeInputProps> = ({
  name,
  onChange,
  value,
  intlLabel,
  disabled,
  error,
  required,
}) => {
  const { formatMessage } = useIntl();

  return (
    <TextInput
      name={name}
      onChange={onChange}
      value={value}
      label={formatMessage(intlLabel)}
      disabled={disabled}
      error={error}
      required={required}
      placeholder="https://www.youtube.com/watch?v=..."
    />
  );
};