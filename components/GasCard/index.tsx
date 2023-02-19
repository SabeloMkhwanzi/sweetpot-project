import {
  Card,
  SimpleGrid,
  Text,
  Center,
  Flex,
  Box,
  Image,
  chakra,
  Link,
} from "@chakra-ui/react";
import numbro from "numbro";

export default function GasCard({ gasFees }: any) {
  return (
    <div>
      <SimpleGrid column={[1, null, 4]} spacing="20%">
        <Box
          w="full"
          mx="auto"
          py={4}
          px={8}
          bg="white"
          _dark={{
            bg: "gray.700",
          }}
          shadow="lg"
          rounded="lg"
        >
          <Text as="b" align="center">
            {numbro(gasFees.maxFeePerGas).format({
              average: true,
              mantissa: 2,
              optionalMantissa: true,
            })}{" "}
            GWei
          </Text>
          <Text color="gray.100" align="center">
            {numbro(gasFees.estimatedFee).formatCurrency({
              average: true,
              mantissa: 2,
              optionalMantissa: true,
            })}
          </Text>
          <Text>
            Base:{" "}
            {numbro(gasFees.baseFee).format({
              average: true,
              mantissa: 2,
              optionalMantissa: true,
            })}{" "}
            GWei
          </Text>
          <Text>
            Tip:{" "}
            {numbro(gasFees.maxPriorityFeePerGas).format({
              average: true,
              mantissa: 3,
              optionalMantissa: true,
            })}{" "}
            GWei
          </Text>
        </Box>
      </SimpleGrid>
    </div>
  );
}
