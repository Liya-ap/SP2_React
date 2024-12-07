import styled from 'styled-components';

const ContentArea = styled.div`
    margin-top: -2em;
    margin-left: 20vh;
    height: 100%;
    width: 50%;
    box-shadow: 10px 30px 50px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    border: 3px double #05D9FF;
    padding: 2em;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;

    box-shadow: 
        0 0 10px rgba(255, 255, 255, 0.2), 
        0 0 15px rgba(255, 255, 255, 0.3), 
        0 0 20px rgba(255, 255, 255, 0.4);

    animation: neonGlow 1.5s ease-in-out infinite alternate;
`;

const WelcomeTitle = styled.h1`
    margin: 0;  
    margin-bottom: 1em;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
    text-transform: uppercase; 
    position: relative;
    display: inline-block;
    cursor: default;

    text-shadow: 
        0 0 5px #05ff2b,   
        0 0 10px #05ff2b,
        0 0 25px #05ff2b;
`;

const WebpageLinks = styled.a`
    display: block;
    font-size: 1.2em;
    color: white;
    text-decoration: none;
    margin: 1em;

    text-shadow: 
        0 0 5px white,   
        0 0 10px white,
        0 0 25px white;

    &:hover {
        text-shadow: 
            0 0 5px #ff05d9,   
            0 0 10px #ff05d9,
            0 0 25px #ff05d9;
            cursor: pointer;
    }
`;

// Media Queries for responsiveness
const MediaQueries = `
    @media (max-width: 768px) {
        ${ContentArea} {
            padding: 1em;
            height: 150px;
        }

        ${WelcomeTitle} {
            font-size: 1.1em;
        }

        ${WebpageLinks} {
            font-size: 0.8em;
        }
    }
`;


function Home() {
    return (
        <>
            <ContentArea>
                <WelcomeTitle>Welcome to GameVault..</WelcomeTitle>
                <WebpageLinks href="https://gamevault.projectnetwork.dk/api/games" target="_blank">Visit official website</WebpageLinks>
                <WebpageLinks href="https://github.com/Scrabble30/SP2-GameVault" target="_blank">GitHub Repository</WebpageLinks>
            </ContentArea>
            <style>{MediaQueries}</style>
        </>
    );
}

export default Home;