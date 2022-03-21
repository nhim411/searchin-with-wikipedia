import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import wikiApi from './components/api/wikiApi';
import './App.scss';
import WikiInput from './components/WikiSearch/WikiInput';
import WikiList from './components/WikiSearch/WikiList';
import Loading from './components/Loading';

//https://vi.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=max&srsearch=

const App = () => {
  const [searchInput, setSearchInput] = useState('');
  const [results, setResults] = useState([]);
  const [getInfo, setGetInfo] = useState({});

  const handleInputChange = (payload) => {
    setSearchInput(payload);
  };

  const handleSearch = async () => {
    if (searchInput.trim() === ' ' || searchInput.trim() === '' || searchInput.trim().length < 1)
      return alert('Có thể bạn chưa nhập dữ liệu hoặc dữ liệu bạn tìm không tồn tại 😌');
    try {
      const params = {
        srlimit: 50,
        srsearch: searchInput.trim(),
      };
      console.log({ params });
      const res = await wikiApi.getAll(params);
      setResults(res.query.search);
      setGetInfo(res.query.searchinfo);
      if (getInfo.totalhits < 1)
        return alert('Có thể bạn chưa nhập dữ liệu hoặc dữ liệu bạn tìm không tồn tại 😌');
    } catch (err) {
      console.log('cannot get wiki api,', err);
    }
  };

  return (
    <Container className='p-3'>
      <Container className='p-5 mb-4 bg-light rounded-3'>
        <h1 className='header text-center'>Wiki Search</h1>
        <WikiInput
          payload={searchInput}
          onInputChange={handleInputChange}
          onInputSubmit={handleSearch}
        />
        {getInfo.totalhits ? <p>Kết quả tìm được: {getInfo.totalhits}</p> : null}
        <WikiList wikiList={results} />
      </Container>
    </Container>
  );
};

export default App;
