import React, { useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

//import from files
import CardsForData from './CardsForData';
import AccordionForCharts from './AccordionForCharts';
import Filters from './Filters';
import axios from 'axios';

const Tabsrow = ({ data, setMainData }) => {
   
    const [limit, setLimit] = useState(5);
    const limitedData = data.slice(0, limit);
    const [search, setSearch] = useState("");
    const handleSearchResult = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://dashboard-6bfs.onrender.com/api/data/any/${search}`);
            setMainData(response.data.data);
            setSearch("");
        }
        catch (e) {
            console.log(e)
        }
    }

    return (
       

<div className='tabsClass'>
    <Tabs
        defaultActiveKey="data"
        id="uncontrolled-tab-example"
        className="mb-3"
        style={{ fontSize: '1.1rem'}} 
    >
    <Tab 
    eventKey="data" 
    title="Data" 
    style={{ 
        fontSize: '1.2rem', 
        color: '#fff', 
        backgroundColor: '#800080', 
        padding: '20px', 
        borderRadius: '0' 
    }}
>
    <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <input 
            className="form-control form-control-lg mr-sm-2" // Add 'form-control-lg' class for larger input
            type="search" 
            placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." 
            aria-label="Search" 
            onChange={(e) => setSearch(e.target.value)} 
            style={{ marginRight: '0rem', borderRadius: '0', backgroundColor: 'white', height: '50px' }} // Add background color style
        />

        <button 
            className="btn btn-primary btn-lg my-2 my-sm-0" // Add 'btn-lg' class for larger button
            type="submit"
            style={{ backgroundColor: 'blue', borderRadius: '0' }} // Add background color style
        >
            Search
        </button>
    </form>
    <Filters setMainData={setMainData} />

    {limitedData && limitedData.length === 0 ? (
        <div style={{ margin: '1rem' }}>No data found, or please wait for a while.</div>
    ) : limitedData && limitedData.length > 0 ? (
        <CardGroup>
            {limitedData.map((e, i) => {
                return <CardsForData item={e} key={i} />
            })}
        </CardGroup>
    ) : (
        <div>Loading...</div>
    )}
    <Button variant="primary" onClick={() => setLimit(prev => prev + 5)}>Show More</Button>
</Tab>



        <Tab 
    eventKey="chart" 
    title="Interactive Insights/Dashboard" 
    style={{ 
        fontSize: '1.2rem', 
        color: '#fff', 
        backgroundColor: '#800080', 
        padding: '20px', 
        borderRadius: '0' 
    }}
>
    <form className="form-inline" onSubmit={handleSearchResult} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <input 
            className="form-control mr-sm-2"
            type="search" 
            placeholder="Search by Sector Name, Topic, Title, Pestle, Source, Insight, URL..." 
            aria-label="Search" 
            onChange={(e) => setSearch(e.target.value)} 
            style={{ marginRight: '0rem', borderRadius: '0', backgroundColor: 'white', height: '50px' }}
        />

        <button 
            className="btn btn-primary my-2 my-sm-0" 
            type="submit"
            style={{ borderRadius: '0' }}
        >
            Search
        </button>
    </form>
    <Filters setMainData={setMainData} />
    <AccordionForCharts data={data} />
</Tab>

    </Tabs>
</div>

    );
}

export default Tabsrow