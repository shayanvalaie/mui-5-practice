import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import ImageCollage from '../components/ImageCollage';
import ControlledAccordion from '../components/ControlledAccordian';
import Paper from '@mui/material/Paper'
import BottomNavigation from '@mui/material/BottomNavigation';
import BasicModal from "../components/BasicModal"

const Tour = () => {
    return (
        <Container sx={{
            width: 900

        }}>
            <Typography marginTop={3} variant="h4" component="h2">Las Vegas</Typography>
            <Box marginTop={3} sx={{
                display: 'flex'
            }}>
                <img height={325} src="https://cdn.getyourguide.com/img/location/5ffeb496e3e09.jpeg/88.jpg" alt="" />
                <ImageCollage />
            </Box>
            <Typography variant="h6" component="h4" marginTop={3}>
                About this ticket
            </Typography>
            <Box sx={{}}>
                <Typography variant="paragraph" component="p" marginY={3}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
                    voluptates rem quos delectus debitis earum modi, ipsum veritatis.
                    Perferendis officiis nobis, aut hic praesentium nulla vero, possimus
                    omnis reprehenderit blanditiis quis incidunt minima voluptatibus illum
                    quam corporis libero fugiat doloremque. Lorem ipsum dolor sit amet
                    consectetur, adipisicing elit. Exercitationem officiis commodi beatae
                    animi incidunt necessitatibus aut provident ad ex. Saepe!
                </Typography>
                <Typography variant="h6" component="h4" marginBottom={3}>
                    Frequently Asked Questions
                </Typography>
                <ControlledAccordion />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels

                >
                    <BasicModal />

                </BottomNavigation>
            </Paper>

        </Container>

    )
}

export default Tour