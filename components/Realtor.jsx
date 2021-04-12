import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";

export function Realtor({ image, name, address }) {
  return (
    <Box
      data-cy="realtor-row"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Image data-cy="realtor-image" src={image} />
      <Box>
        <Heading as="h3" data-cy="realtor-name">
          {name}
        </Heading>
        <Text data-cy="realtor-address">{address}</Text>
      </Box>
    </Box>
  );
}

export function RealtorTable({ realtors }) {
  return (
    <Box data-cy="realtor-table">
      {realtors.map((realtor, index) => (
        <Realtor key={index} {...realtor} />
      ))}
    </Box>
  );
}
