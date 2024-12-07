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

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    text-transform: uppercase; 
    padding: 5px 10px;
    background-color: black;
    color: white;
    font-size: 1.1em;
`;

const TableData = styled.td`
    padding: 5px 5px;
    text-align: left;
    background-color: #f9f9f9;
    border-bottom: 1px solid #ddd;
`;

const TableRow = styled.tr`
    font-size: 1em;
`;

const TableContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    overflow-x: auto;
    overflow-y: auto;
`;

// Media Queries for responsiveness
const MediaQueries = `
    @media (max-width: 768px) {
        ${ContentArea} {
            margin-left: 5vh;
        }

        ${TableHeader} {
            font-size: 0.8em;
        }

        ${TableRow} {
            font-size: 0.7em;
        }
    }
`;

function Endpoints() {
    return (
        <>
            <ContentArea>
                <Title>Endpoints</Title>
                <TableContainer>
                    <Table>
                        <thead>
                            <tr>
                                <TableHeader>Method</TableHeader>
                                <TableHeader>URL</TableHeader>
                                <TableHeader>Request Body (JSON)</TableHeader>
                                <TableHeader>Response (JSON)</TableHeader>
                                <TableHeader>Error code</TableHeader>
                            </tr>
                        </thead>
                        <tbody>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/platforms</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'[platform, platform, ...] (1)'}</TableData>
                                <TableData>500</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/platforms/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'platform (1)'}</TableData>
                                <TableData>500, 400</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/genres</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'[genre, genre, ...] (1)'}</TableData>
                                <TableData>500</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/genres/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'genre (1)'}</TableData>
                                <TableData>500</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/games</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'[game, game, ...] (1)'}</TableData>
                                <TableData>500</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/games/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'game (1)'}</TableData>
                                <TableData>500, 400</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/games/{'id'}/reviews</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'[review, review, ...] (1)'}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/reviews</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'[review, review, ...] (1)'}</TableData>
                                <TableData>500</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>GET</TableData>
                                <TableData>/api/reviews/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{'review (1)'}</TableData>
                                <TableData>500, 400</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>POST</TableData>
                                <TableData>/api/auth/login</TableData>
                                <TableData>{'user (1) without id'}</TableData>
                                <TableData>{'(username & token)'}</TableData>
                                <TableData>500, 404, 401, 403</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>POST</TableData>
                                <TableData>/api/auth/register</TableData>
                                <TableData>{'user (1) without id'}</TableData>
                                <TableData>{'(username & token)'}</TableData>
                                <TableData>500, 404, 401, 403, 409</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>POST</TableData>
                                <TableData>/api/platforms</TableData>
                                <TableData>{'platform (1) with id'}</TableData>
                                <TableData>{'platform (1)'}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>POST</TableData>
                                <TableData>/api/genres</TableData>
                                <TableData>{'genre (1) with id'}</TableData>
                                <TableData>{'genre (1)'}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>POST</TableData>
                                <TableData>/api/games</TableData>
                                <TableData>{'game (1) without id'}</TableData>
                                <TableData>{'game (1)'}</TableData>
                                <TableData>500, 400</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>POST</TableData>
                                <TableData>/api/reviews</TableData>
                                <TableData>{'review (1) without id'}</TableData>
                                <TableData>{'review (1)'}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>PUT</TableData>
                                <TableData>/api/platforms/{'id'}</TableData>
                                <TableData>{'platform (1) without id'}</TableData>
                                <TableData>{'platform (1)'}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>PUT</TableData>
                                <TableData>/api/genres/{'id'}</TableData>
                                <TableData>{'genre (1) without id'}</TableData>
                                <TableData>{'genre (1)'}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>PUT</TableData>
                                <TableData>/api/games/{'id'}</TableData>
                                <TableData>{'game (1) without id'}</TableData>
                                <TableData>{'game (1)'}</TableData>
                                <TableData>500, 400</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>PUT</TableData>
                                <TableData>/api/reviews/{'id'}</TableData>
                                <TableData>{'review (1) without id'}</TableData>
                                <TableData>{'review (1)'}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>DELETE</TableData>
                                <TableData>/api/platforms/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>DELETE</TableData>
                                <TableData>/api/genres/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>DELETE</TableData>
                                <TableData>/api/games/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>500, 400</TableData>
                            </TableRow>
                            <TableRow>
                                <TableData>DELETE</TableData>
                                <TableData>/api/reviews/{'id'}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>{''}</TableData>
                                <TableData>500, 400, 404</TableData>
                            </TableRow>
                        </tbody>
                    </Table>
                </TableContainer>
            </ContentArea>
            <style>{MediaQueries}</style>
        </>
    );
}

export default Endpoints;