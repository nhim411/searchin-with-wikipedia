import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';
import { RiSearchLine } from 'react-icons/ri';

const WikiInput = ({ payload = '', onInputChange, onInputSubmit }) => {
  const handleInputChange = (payload) => {
    if (!onInputChange) return;
    onInputChange(payload);
  };
  return (
    <>
      <InputGroup className='mb-3'>
        <FormControl
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyUp={(e) => {
            if (e.keyCode === 13) {
              onInputSubmit();
            }
          }}
          value={payload}
          placeholder='typing something...'
          aria-label="Recipient's username"
          aria-describedby='basic-addon2'
        />
        <Button variant='outline-secondary' id='button-addon2' onClick={onInputSubmit}>
          <RiSearchLine />
        </Button>
      </InputGroup>
    </>
  );
};

export default WikiInput;
