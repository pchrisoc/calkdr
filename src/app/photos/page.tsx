'use client';

import { Container, Typography, Box, Paper, Tabs, Tab, ImageList, ImageListItem, ImageListItemBar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const PageHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  marginBottom: theme.spacing(6),
}));

// Mock photo data - in a real application, these would be loaded from a database or API
const photoCategories = [
  {
    id: 'brotherhood',
    title: 'Brotherhood Events',
    photos: [
      { id: 1, title: 'Brotherhood Retreat 2024', date: 'March 2024', image: '/placeholder.jpg' },
      { id: 2, title: 'Chapter House Game Night', date: 'April 2024', image: '/placeholder.jpg' },
      { id: 3, title: 'Alumni BBQ', date: 'February 2024', image: '/placeholder.jpg' },
      { id: 4, title: 'Chapter Meeting', date: 'May 2024', image: '/placeholder.jpg' },
      { id: 5, title: 'Brotherhood Dinner', date: 'April 2024', image: '/placeholder.jpg' },
      { id: 6, title: 'Senior Send-off', date: 'May 2024', image: '/placeholder.jpg' },
    ]
  },
  {
    id: 'philanthropy',
    title: 'Philanthropy & Service',
    photos: [
      { id: 1, title: 'Community Clean-up', date: 'April 2024', image: '/placeholder.jpg' },
      { id: 2, title: 'Charity Fundraiser', date: 'March 2024', image: '/placeholder.jpg' },
      { id: 3, title: 'Food Drive', date: 'February 2024', image: '/placeholder.jpg' },
      { id: 4, title: 'Campus Volunteer Day', date: 'May 2024', image: '/placeholder.jpg' },
    ]
  },
  {
    id: 'social',
    title: 'Social Events',
    photos: [
      { id: 1, title: 'Spring Formal', date: 'April 2024', image: '/placeholder.jpg' },
      { id: 2, title: 'Homecoming', date: 'October 2023', image: '/placeholder.jpg' },
      { id: 3, title: 'Mixer with Chi Omega', date: 'March 2024', image: '/placeholder.jpg' },
      { id: 4, title: 'Tailgate', date: 'November 2023', image: '/placeholder.jpg' },
      { id: 5, title: 'New Year Celebration', date: 'January 2024', image: '/placeholder.jpg' },
    ]
  },
  {
    id: 'campus',
    title: 'Campus Involvement',
    photos: [
      { id: 1, title: 'Intramural Sports Champions', date: 'April 2024', image: '/placeholder.jpg' },
      { id: 2, title: 'Greek Week', date: 'March 2024', image: '/placeholder.jpg' },
      { id: 3, title: 'Campus Leadership Summit', date: 'February 2024', image: '/placeholder.jpg' },
    ]
  }
];

export default function Photos() {
  const [currentTab, setCurrentTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <>
      <PageHeader>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Photo Gallery
          </Typography>
          <Typography variant="h6">
            Capturing Memories of Brotherhood and Service
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Paper elevation={1} sx={{ mb: 6 }}>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            textColor="primary"
            indicatorColor="primary"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            {photoCategories.map((category, index) => (
              <Tab key={category.id} label={category.title} id={`photo-tab-${index}`} />
            ))}
          </Tabs>
        </Paper>

        {photoCategories.map((category, index) => (
          <Box
            key={category.id}
            role="tabpanel"
            hidden={currentTab !== index}
            id={`photo-tabpanel-${index}`}
            aria-labelledby={`photo-tab-${index}`}
          >
            {currentTab === index && (
              <>
                <Typography variant="h4" component="h2" color="primary" gutterBottom sx={{ mb: 4 }}>
                  {category.title}
                </Typography>
                <ImageList variant="masonry" cols={3} gap={12}>
                  {category.photos.map((photo) => (
                    <ImageListItem key={photo.id} sx={{ overflow: 'hidden', borderRadius: 2 }}>
                      <Box 
                        sx={{ 
                          height: 240, 
                          backgroundColor: 'grey.300', 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <Typography variant="body2" color="text.secondary">
                          [Photo Placeholder]
                        </Typography>
                      </Box>
                      <ImageListItemBar
                        title={photo.title}
                        subtitle={photo.date}
                        actionIcon={
                          <IconButton
                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                            aria-label={`info about ${photo.title}`}
                          >
                            <ZoomInIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </>
            )}
          </Box>
        ))}

        <Box sx={{ textAlign: 'center', my: 8, py: 4 }}>
          <Typography variant="body1" color="text.secondary">
            These photos represent just a glimpse of our chapter's activities. 
            Follow us on social media for more current photos and event updates.
          </Typography>
        </Box>
      </Container>
    </>
  );
}