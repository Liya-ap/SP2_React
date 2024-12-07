import styled from 'styled-components';

const ContentArea = styled.div`
    margin-top: -3em;
    margin-left: 20vh;
    height: 50vh;
    width: 65%;
    font-family: 'Courier New', Courier, monospace;
`;

const Title = styled.h1`
    text-transform: uppercase; 
    font-size: 1.7em;
    color: white;
    text-align: left;
    font-weight: bold;
    text-shadow: 0 0 10px #05ff2b
`;

function Mockup() {
    return ( 
        <>
        <ContentArea>
            <Title>Mock up..</Title>
        </ContentArea>
        </>
     );
}

export default Mockup;