import { Accordion, Container } from 'react-bootstrap/';
import Menu from './components/navbar';
import Footer from './components/footer';

export default function Lista() {
    var noticias = [
        {
            id: 1,
            titulo: "Avanços na Tecnologia de IA",
            conteudo: "Recentes desenvolvimentos em inteligência artificial estão transformando diversas indústrias, desde a saúde até o entretenimento. Especialistas discutem as implicações éticas e os benefícios dessas inovações."
        },
        {
            id: 2,
            titulo: "Mudanças Climáticas: Um Alerta Global",
            conteudo: "Relatório da ONU revela que as emissões de gases de efeito estufa continuam a aumentar, alertando para consequências devastadoras para o planeta. A comunidade internacional deve agir rapidamente."
        },
        {
            id: 3,
            titulo: "Esportes: A Volta das Competições Presenciais",
            conteudo: "Com o avanço da vacinação, eventos esportivos voltam a receber público. Jogadores e fãs celebram o retorno das competições presenciais com novas medidas de segurança."
        }
    ]


return (
    <>
        <Menu />
        <Container>
            <Accordion>
                {noticias.map(noticia =>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{noticia.titulo}</Accordion.Header>
                    <Accordion.Body>
                        {noticia.conteudo}
                    </Accordion.Body>
                </Accordion.Item>
                )}
            </Accordion>
        </Container>
        <Footer />
    </>
);
}