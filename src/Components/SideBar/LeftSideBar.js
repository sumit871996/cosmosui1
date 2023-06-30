import { Box, ResponsiveContext, Button, Text } from 'grommet';
import LeftSideBarElement from './LeftSideBarElement';
import { useContext, useState, React } from 'react';
import { dataMigrationOptions } from '../../Config/dataMigrationOptions';
import { SearchBox } from './SearchBox';
import { useNavigate } from 'react-router-dom';
import { Previous, Next } from 'grommet-icons';

const LeftSideBar = (props) => {
  const navigate = useNavigate();
  const size = useContext(ResponsiveContext);
  const searchSuggestions = dataMigrationOptions;
  const [suggestions, setSuggestions] = useState(searchSuggestions);
  const [selected, setSelected] = useState(dataMigrationOptions[0].name);
  const navigateFunction = () => {
    props.setSelected(false);
    props.onExit(false);
    navigate(`/dashboard/Solution/${dataMigrationOptions[0].name}`);
  };
  return (
    <Box
      align='start'
      round='none'
      width={!['xsmall', 'small', 'medium'].includes(size) ? '16vw' : '150px'}
      border='right'
      height='100%'
    >
      <Box
        align='start'
        width='100%'
        pad={{ horizontal: 'small', vertical: 'xsmall' }}
      >
        <Button
          gap='small'
          label='Back'
          icon={<Previous />}
          onClick={() => {
            navigate('');
          }}
        />
        <Box>
          <Text color='black' weight='bold' size='large'>
            Data Migration
          </Text>
          <Text margin={{ vertical: 'xsmall' }} size='xsmall'>
            Add or drag below options
          </Text>
        </Box>

        <SearchBox
          suggestions={dataMigrationOptions}
          setSuggestions={setSuggestions}
        />
      </Box>
      {dataMigrationOptions.map((element) => {
        return (
          <LeftSideBarElement
            dataMigrationOptions={element.name}
            selected={selected}
            setSelected={setSelected}
          >
            {element.logo}
          </LeftSideBarElement>
        );
      })}
    </Box>
  );
};

export default LeftSideBar;
