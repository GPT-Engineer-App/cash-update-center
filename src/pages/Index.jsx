import { Container, Box, Heading, Text, VStack, HStack, Image, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4} bg="background">
      <Box as="header" borderBottom="1px" borderColor="gray.200" mb={4} pb={4}>
        <Heading as="h1" size="2xl" textAlign="center" mb={2}>
          Financial Times
        </Heading>
        <Text textAlign="center" color="gray.500">
          The latest financial news and analysis
        </Text>
      </Box>

      <VStack spacing={8} align="stretch">
        <Box as="article" p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={2}>
            Market Update
          </Heading>
          <Text>
            Stay updated with the latest trends in the stock market. Our experts provide in-depth analysis and insights.
          </Text>
        </Box>

        <Box as="article" p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={2}>
            Economy
          </Heading>
          <Text>
            Get the latest news on the global economy. Understand the factors affecting economic growth and stability.
          </Text>
        </Box>

        <Box as="article" p={4} borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg" mb={2}>
            Investment Tips
          </Heading>
          <Text>
            Discover the best investment strategies from our financial experts. Learn how to grow your wealth effectively.
          </Text>
        </Box>
      </VStack>

      <Box as="footer" borderTop="1px" borderColor="gray.200" mt={8} pt={4}>
        <HStack justify="center" spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </HStack>
        <Text textAlign="center" color="gray.500" mt={2}>
          &copy; 2023 Financial Times. All rights reserved.
        </Text>
      </Box>
    </Container>
  );
};

export default Index;