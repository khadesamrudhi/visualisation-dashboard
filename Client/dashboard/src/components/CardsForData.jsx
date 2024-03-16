import React from 'react'
import Card from 'react-bootstrap/Card';


const CardsForData = ({ item }) => {
    return (
        <div className='cardDiv' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    <Card bg='light' border='dark' style={{ width: '22rem', margin: '10px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body>
            <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#333' }}>Project Details</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1rem', color: '#555' }}>{item.sector ? item.sector : "Sector"}</Card.Subtitle>
            <Card.Text className='cardText' style={{ fontSize: '0.9rem', color: '#777' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>Topic:</strong> {item.topic ? item.topic : "No Info"}</li>
                    <li><strong>Title:</strong> {item.title ? item.title : "No Info"}</li>
                    <li><strong>Insight:</strong> {item.insight ? item.insight : "No Info"}</li>
                    <li><strong>URL:</strong> {item.url ? item.url : "No Info"}</li>
                    <li><strong>Region:</strong> {item.region ? item.region : "No Info"}</li>
                    <li><strong>Country:</strong> {item.country ? item.country : "No Info"}</li>
                    <li><strong>Source:</strong> {item.source ? item.source : "No Info"}</li>
                    <li><strong>PESTLE:</strong> {item.pestle ? item.pestle : "No Info"}</li>
                    <li><strong>Start Year:</strong> {item.start_year ? item.start_year : "No Info"}</li>
                    <li><strong>End Year:</strong> {item.end_year ? item.end_year : "No Info"}</li>
                    <li><strong>Added:</strong> {item.added ? item.added : "No Info"}</li>
                    <li><strong>Published:</strong> {item.published ? item.published : "No Info"}</li>
                    <li><strong>Intensity:</strong> {item.intensity ? item.intensity : "No Info"}</li>
                    <li><strong>Likelihood:</strong> {item.likelihood ? item.likelihood : "No Info"}</li>
                </ul>
            </Card.Text>
        </Card.Body>
    </Card>
</div>

    )
}

export default CardsForData