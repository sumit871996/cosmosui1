// TableCustomizationExample.js
import React, { useState } from 'react';
import {
    Box,
    Data,
    DataTable,
    DataFilters,
    DataSearch,
    DataSummary,
    DataTableColumns,
    Header,
    Heading,
    Menu,
    Page,
    PageContent,
    Toolbar,
} from 'grommet';

const COLUMNS = [
    { property: 'firstRow', header: '', primary: true, pin: true },
    { property: 'name', header: 'Name', primary: true, pin: true },
    { property: 'status', header: 'Status' },
    { property: 'role', header: 'Role' },
    { property: 'location', header: 'Location' },
    { property: 'hoursAvailable', header: 'Hours available', align: 'end' },
];

const allData = [
    {
        firstRow: 'DataTypes',
        location: 'San Jose, CA',
        hoursAvailable: 10,
        role: 'Engineer',
        name: 'Eric Soderberg',
        status: 'Online',
    },
    {
        firstRow: 'count',
        location: 'San Jose, CA',
        hoursAvailable: 30,
        role: 'Engineer',
        name: 'Taylor Seamans',
        status: 'Online',
    },
    {
        firstRow: 'mean',
        location: 'Fort Collins, CO',
        hoursAvailable: 25,
        role: 'Engineer',
        name: 'Matthew Glissmann',
        status: 'Offline',
    },
];

// Define data structure for DataTableColumns sorting
const options = COLUMNS.map(({ header, property }) => ({   
    property,
    label: header,
    // style: header === 'header' ? 'font-weight: bold;' : '',
}));

// Use options const to define data structure for Data component properties
const buildProperties = () => {
    const dict = {};
    for (let i = 0; i < options.length; i += 1) {
        const { label } = options[i];
        if (options[i].property === 'hoursAvailable') {
            dict[options[i].property] = {
                label,
                range: { min: 0, max: 40 },
            };
        } else {
            dict[options[i].property] = { label };
        }
    }
    return dict;
};

const TableCustomizationExample = () => (
    <Page background="background" fill>
        <PageContent>
            <Box gap="medium" margin={{ top: 'medium' }}>
                {/* <Header pad={{ top: 'medium' }}>
          <Heading id="users-heading" level={2} margin="none">
            Users
          </Heading>
        </Header> */}
                <Results />
            </Box>
        </PageContent>
    </Page>
);

const Results = () => {
    const [select, setSelect] = useState([]);
    const properties = buildProperties();
    return (
        <Data data={allData} flex properties={properties}>
            <Toolbar>
                <DataSearch responsive />
                {/* <DataTableColumns drop options={options} /> */}
                {/* <DataFilters layer /> */}
                {/* Flex box for spacing between Data components and Actions button  */}
                <Box flex />
                {/* <Menu label="Actions" kind="toolbar" /> */}
            </Toolbar>
            <DataSummary />
            <Box overflow="auto" flex>
                <DataTable
                    aria-describedby="users-heading"
                    background="background"
                    columns={COLUMNS}
                    select={select}
                    onSelect={setSelect}
                    pin
                />
            </Box>
        </Data>
    );
};


export default TableCustomizationExample;