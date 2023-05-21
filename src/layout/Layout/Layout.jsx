import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import Nav from "@Components/Nav/Nav";
import Footer from "@Layout/Footer/Footer";
import ScrollButton from "@Components/ScrollButton/ScrollButton";
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Layout = () => {

    useEffect(() => {
        addResponseMessage('Welcome to this awesome chat!');
    }, []);

    const handleNewUserMessage = (newMessage) => {
        console.log(`New message incoming! ${newMessage}`);
        // Now send the message throught the backend API
        addResponseMessage("This chatbot is not yet implemented");
    };

    return (
        <div className="Layout-Container">
            <Nav />
            <Outlet />
            <Footer />
            <ScrollButton />
            <Widget
                handleNewUserMessage={handleNewUserMessage}
                emojis={false}
                title={"Medi Chatbot"}
                subtitle={"Chat with us!"}
                showBadge={false}
            />
        </div>
    );
};

export default Layout;
