import React, { useEffect, useState } from 'react';
import { TextInput } from '@strapi/design-system';
import { useIntl } from 'react-intl';
import { Box } from '@strapi/design-system';
import { Typography } from '@strapi/design-system';

interface YoutubeInputProps {
  name: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  value: string;
  intlLabel: { id: string; defaultMessage: string };
  disabled?: boolean;
  error?: string;
  required?: boolean;
}

const extractYoutubeId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/,
    /^[a-zA-Z0-9_-]{11}$/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
};

const getThumbnailUrl = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
};
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
  const [videoId, setVideoId] = useState<string | null>(null);
  const [thumbnailError, setThumbnailError] = useState(false);
  useEffect(() => {
    const id = extractYoutubeId(value);
    setVideoId(id);
    setThumbnailError(false);
  }, [value]);
  const handleImageError = () => {
    setThumbnailError(true);
  };
  return (
    <Box>
    <TextInput
      name={name}
      onChange={onChange}
      value={value}
      label={formatMessage(intlLabel)}
      disabled={disabled}
      error={error || (value && !videoId ? 'Invalid YouTube URL' : undefined)}
      required={required}
      placeholder="https://www.youtube.com/watch?v=..."
    />
    {videoId && !thumbnailError && (
      <Box marginTop={4} background="neutral100" padding={4} hasRadius>
        <img
          src={getThumbnailUrl(videoId)}
          alt="Video thumbnail"
          style={{ 
            width: '100%',
            maxWidth: '480px',
            height: 'auto',
            display: 'block',
            margin: '0 auto'
          }}
          onError={handleImageError}
        />
        <Typography variant="pi" textColor="neutral600" paddingTop={2}>
          Video ID: {videoId}
        </Typography>
      </Box>
    )}
    </Box>
  );
};