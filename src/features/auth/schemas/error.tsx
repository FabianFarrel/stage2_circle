import React from "react";
import { Text } from "@chakra-ui/react";

interface ErrorMessageProps {
  message?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? (
    <Text color="red.500" fontSize="12px" fontWeight="bold">
      {message}
    </Text>
  ) : null;
};
