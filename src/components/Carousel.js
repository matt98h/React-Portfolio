import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import brewloc from '../assets/images/Brewery_search.PNG'
import noteTaker from '../assets/images/note-taker.PNG'
import randomPass from '../assets/images/Random_password_generator.PNG'
import surfnMW from '../assets/images/surfn midwest.PNG'
import workday from '../assets/images/Workday_scheduler.PNG'

import Card from '../components/Card'
class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: `Surfn' Midwest`,
                    subTitle: 'The premiere Midwest surfing Application',
                    imgSrc: surfnMW,
                    // link: 'project link',
                    selected: false
                },
                {
                    id: 1,
                    title: `BrewLoc`,
                    subTitle: 'Application that finds breweries near you!',
                    imgSrc: brewloc,
                    // link: 'project link',
                    selected: false
                },
                {
                    id: 2,
                    title: `Random Password Generator`,
                    subTitle: 'An application that Randomly generates a password off of given specifications',
                    imgSrc: randomPass,
                    // link: 'project link',
                    selected: false
                },
                {
                    id: 3,
                    title: `Workday Scheduler`,
                    subTitle: 'An application that helps you keep your notes organized',
                    imgSrc: workday,
                    // link: 'project link',
                    selected: false
                },
                {
                    id: 4,
                    title: `Note taker application`,
                    subTitle: 'An application that helps you keep your notes organized',
                    imgSrc: noteTaker,
                    // link: 'project link',
                    selected: false
                }
            ]
        }
    }
    handleCardClick = (id, card) => {
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });

    }

    makeItems =(items) => {
        return items.map(item => {
            return<Card item={item} click={(e => this.handleCardClick(item.id, e))}key={item.id} />
        })
    }
    render() {
        return (
            <Container fluid={true}>
                <Row className='justify-content-around'>
            {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }
}
export default Carousel;