import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Card.css'

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div className="card" >
    <VStack spacing='20px' cursor="pointer">
      <Image className="project-image" src={imageSrc} alt="image" />
      <VStack spacing={4} p={4} alignItems='flex-start'>
        <HStack>
          <Heading className="heading" size='md' noOfLines={1} justifyContent="space-between" alignItems="center">
            {title}
          </Heading>
        </HStack>
        <HStack>
          <Text className="description">
            {description}
          </Text>
        </HStack>
        <Text className="description arrow">
          See More <FontAwesomeIcon icon={faArrowRight} />
        </Text>
      </VStack>      
    </VStack>
    </div>
  )
};

export default Card;
