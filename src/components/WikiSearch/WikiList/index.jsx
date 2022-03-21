import { Button, Card, Container } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';
import Loading from '../../Loading';
import dayjs from 'dayjs';

function removeTags(string) {
  return string
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .concat(' . . .');
}

const WikiList = ({ wikiList = [], onBtnClick }) => {
  return (
    <Container className='border rounder bg-light pt-3'>
      {wikiList.map((result, i) => {
        const targetUrl = `https://vi.wikipedia.org/?curid=${result.pageid}`;
        return (
          <LazyLoad height={100} once={true} offset={[-100, 100]} placeholder={<Loading />}>
            <Card className='mb-3'>
              <Card.Body>
                <Card.Title>{result.title}</Card.Title>
                <Card.Text>{removeTags(result.snippet)}</Card.Text>
                <Card.Text>{dayjs(result.timestamp).format('DD/MM/YYYY')}</Card.Text>
                <Button variant='primary' size='sm' href={targetUrl} target='_blank'>
                  Đọc thêm
                </Button>
              </Card.Body>
            </Card>
          </LazyLoad>
        );
      })}
    </Container>
  );
};

export default WikiList;
