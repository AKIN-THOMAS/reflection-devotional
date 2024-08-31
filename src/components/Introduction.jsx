import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const Introduction = ({
  title,
  devotionalText,
  reference,
  text,
  author,
  image,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };
  return (
    <div className="introall">
      <Button onClick={handleOpen}>Introduction</Button>
      
      <Drawer onClose={onClose} isOpen={isOpen} size={"xl"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>
            <div className="scripture-section">
              <div className="scripture-text">
                <h3>{reference}</h3>
                <p>{text}</p>
              </div>
              <div className="scripture-image">
                <img src={image} alt="Scripture" />
              </div>
            </div>
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <div className="intro">
              <div className="devotional-content">
                <h2>{title}</h2>
                <p>{devotionalText}</p>
                <p className="author">Your friend</p>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Introduction;
