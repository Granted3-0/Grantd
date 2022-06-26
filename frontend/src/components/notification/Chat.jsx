import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Divider from "./Divider";
import Footer from "./Footer";
import Header from "./Header";
import Messages from "./Messages";
//import { api, utils, NotificationItem } from "@epnsproject/frontend-sdk"

const Chat = () => {
  const [messages, setMessages] = useState([
    { from: "computer", text: "Hi, My Name is HoneyChat" },
    { from: "me", text: "Hey there" },
    { from: "me", text: "Myself Ferin Patel" },
    {
      from: "computer",
      text: "Nice to meet you. You can send me message and i'll reply you with same message.",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const walletAddress = "0x1234567890abcdcdefghijklmnopqrstuvwxyz123";
  const pageNumber = 1;
  const itemsPerPage = 20;

  // const fetchedNotifications = await api.fetchNotifications(walletAddress, itemsPerPage, pageNumber)
  // console.log(fetchedNotifications);

  // const parsedResponse = utils.parseApiResponse(fetchedNotifications.results);
  // console.log(parsedResponse);

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");

    setTimeout(() => {
      setMessages((old) => [...old, { from: "computer", text: data }]);
    }, 1000);
  };

  return (
    <Flex w="110vh" h="100vh" justify="center" align="center">
      <Flex w={["100%"]} h="90%" flexDir="column">
        <Header />
        <Divider />
        <Messages messages={messages} />
        <Divider />
        <Footer
          //   onClick={epnsSubscribe}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
