import {
  Box,
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ExitWarningImage from "@/assets/images/ExitWarning.png";

const ExitModal = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <Button variant="outline" onClick={onOpen} w={24} colorScheme="gray">
        Exit
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.400" backdropFilter="blur(2px)" />
        <ModalContent>
          <ModalCloseButton color="gray.300" />
          <ModalBody mx="auto" pt={10}>
            <Flex direction="column">
              <Image src={ExitWarningImage} h={32} w={48} mx="auto" my={8} />
              <Text fontWeight="bold" pt={8} fontSize={20} textAlign="center">
                Are you sure you want to exit?
              </Text>
              <Text fontWeight="light" fontSize={14} textAlign="center">
                Your progress will be lost
              </Text>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Box w="full">
              <Flex flexDir="row" justifyContent="center">
                <Button
                  bgColor="gray.300"
                  variant="ghost"
                  color="black"
                  mr={3}
                  onClick={onClose}
                  size="md"
                  pr={8}
                  pl={8}
                  rounded="lg"
                >
                  Cancel
                </Button>
                <Button
                  _hover={{ bgColor: "orange.400" }}
                  bgColor="orange.500"
                  color='white'
                  rounded="lg"
                  pr={10}
                  pl={10}
                  onClick={() => navigate("*")}
                >
                  Exit
                </Button>
              </Flex>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExitModal;