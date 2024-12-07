import styled from 'styled-components';

const ContentArea = styled.div`
    margin-top: -3em;
    margin-left: 20vh;
    height: auto;
    width: 50%;
    font-family: 'Courier New', Courier, monospace;
    text-align: left;
    font-weight: bold;
    color: white;
`;

const VisionTitle = styled.h1`
    text-transform: uppercase; 
    font-size: 1.7em;

    text-shadow: 0 0 10px #05ff2b
`;

const Motto = styled.h2`
    font-size: 1.5em;

    text-shadow: 0 0 10px #ff05d9
`;

const Description = styled.p`
    font-size: 1.3em;
    line-height: 1.5;
    padding: 1em 2em 2em 2em;
`;

// Media Queries for responsiveness
const MediaQueries = `
    @media (max-width: 768px) {
        ${ContentArea} {
            margin-left: 5vh;
        }

        ${VisionTitle} {
            font-size: 1.3em;
        }

        ${Motto} {
            font-size: 1.15em;
        }

        ${Description} {
            font-size: 1em;
        }
    }
`;

function Vision() {
    return (
        <>
            <ContentArea>
                <VisionTitle>Our Vision For GameVault..</VisionTitle>
                <Motto>Explore. Play. Review.</Motto>
                <Description>
                    Discover in-depth information on different video game titles, such as storyline, ratings and other player&apos;s reviews.
                    Here you can search for classic favorites, latest releases or explore and find hidden gems.
                </Description>
            </ContentArea>
            <style>{MediaQueries}</style>
        </>
    );
}

export default Vision;