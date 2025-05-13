'use client';

import { Container, Typography, Box, Card, CardContent, CardMedia, Divider, Chip, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AccessTime, Event, Person } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const PageHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  marginBottom: theme.spacing(6),
}));

// Mock news data - in a real application, these would be loaded from a database or API
const newsArticles = [
  {
    id: 1,
    title: 'Spring Rush 2025 - Join KDR!',
    date: 'May 5, 2025',
    author: 'Recruitment Chair',
    excerpt: 'Join us for our Spring 2025 Rush events starting May 15. Meet the brothers and learn what makes KDR special at Berkeley.',
    content: 'Full article text would go here...',
    category: 'Events',
    image: '/placeholder.jpg'
  },
  {
    id: 2,
    title: 'Community Service Day Success',
    date: 'April 22, 2025',
    author: 'Philanthropy Chair',
    excerpt: 'Our brothers recently participated in the Berkeley Community Service Day, contributing over 100 volunteer hours to local organizations.',
    content: 'Full article text would go here...',
    category: 'Service',
    image: '/placeholder.jpg'
  },
  {
    id: 3,
    title: 'Lambda Chapter Wins Greek Awards',
    date: 'April 10, 2025',
    author: 'Chapter President',
    excerpt: 'We are proud to announce that the Lambda Chapter of KDR has received multiple awards at this year\'s Greek Awards ceremony.',
    content: 'Full article text would go here...',
    category: 'Achievements',
    image: '/placeholder.jpg'
  },
  {
    id: 4,
    title: 'Alumni Weekend Announcement',
    date: 'March 30, 2025',
    author: 'Alumni Relations Chair',
    excerpt: 'We are excited to announce our upcoming Alumni Weekend on June 5-7, 2025. Join us for a weekend of brotherhood and celebration.',
    content: 'Full article text would go here...',
    category: 'Alumni',
    image: '/placeholder.jpg'
  },
  {
    id: 5,
    title: 'Brother Spotlight: John Smith',
    date: 'March 15, 2025',
    author: 'Public Relations Chair',
    excerpt: 'This month\'s brother spotlight features John Smith, a senior Computer Science major who has shown exceptional leadership within the chapter.',
    content: 'Full article text would go here...',
    category: 'Brotherhood',
    image: '/placeholder.jpg'
  }
];

// Upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: 'Spring Rush',
    date: 'May 15-22, 2025',
    location: 'KDR Chapter House'
  },
  {
    id: 2,
    title: 'Alumni Weekend',
    date: 'June 5-7, 2025',
    location: 'KDR Chapter House & Various Campus Locations'
  },
  {
    id: 3,
    title: 'Community Service Day',
    date: 'June 20, 2025',
    location: 'Berkeley Community Parks'
  },
  {
    id: 4,
    title: 'Summer Brotherhood Retreat',
    date: 'July 10-12, 2025',
    location: 'Lake Tahoe'
  }
];

export default function News() {
  const router = useRouter();

  return (
    <>
      <PageHeader>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            News & Events
          </Typography>
          <Typography variant="h6">
            Stay Updated with KDR Lambda Chapter
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.67%' } }}>
            <Typography variant="h4" component="h2" color="primary" gutterBottom>
              Latest News
            </Typography>

            {newsArticles.map((article, index) => (
              <Card key={article.id} sx={{ mb: 4, overflow: 'hidden', boxShadow: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                  <Box 
                    sx={{ 
                      flex: { md: '0 0 33.33%' },
                      height: { xs: 200, md: '100%' }, 
                      backgroundColor: 'grey.300',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      [News Image Placeholder]
                    </Typography>
                  </Box>
                  <Box sx={{ flex: { md: '1 1 66.67%' } }}>
                    <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={article.category}
                          color="primary"
                          size="small"
                          sx={{ mr: 1 }}
                        />
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'inline-flex', alignItems: 'center' }}>
                          <AccessTime sx={{ fontSize: 16, mr: 0.5 }} />
                          {article.date}
                        </Typography>
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom>
                        {article.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" paragraph>
                        {article.excerpt}
                      </Typography>
                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                          <Person sx={{ fontSize: 16, mr: 0.5 }} />
                          By {article.author}
                        </Typography>
                        <Button 
                          size="small" 
                          sx={{ textTransform: 'none' }}
                        >
                          Read More
                        </Button>
                      </Box>
                    </CardContent>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                Upcoming Events
              </Typography>
              <List>
                {upcomingEvents.map((event) => (
                  <Box key={event.id} sx={{ mb: 3 }}>
                    <Typography variant="subtitle1" component="h4" fontWeight="bold" gutterBottom>
                      {event.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Event sx={{ fontSize: 18, mr: 1 }} />
                      {event.date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {event.location}
                    </Typography>
                    {event.id !== upcomingEvents.length && (
                      <Divider sx={{ mt: 2 }} />
                    )}
                  </Box>
                ))}
              </List>
            </Paper>

            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                Categories
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                <Chip label="Events" color="primary" clickable />
                <Chip label="Service" color="primary" clickable />
                <Chip label="Achievements" color="primary" clickable />
                <Chip label="Alumni" color="primary" clickable />
                <Chip label="Brotherhood" color="primary" clickable />
                <Chip label="Academics" color="primary" clickable />
              </Box>
            </Paper>
          </Box>
        </Box>

        <Box sx={{ textAlign: 'center', my: 8, py: 4 }}>
          <Typography variant="body1" color="text.secondary" paragraph>
            Want to stay updated with all the latest news and events from the Lambda Chapter?
          </Typography>
          <Button 
            variant="contained" 
            color="primary"
            onClick={() => router.push('/contact')}
            sx={{ fontWeight: 'medium' }}
          >
            Subscribe to Our Newsletter
          </Button>
        </Box>
      </Container>
    </>
  );
}

// Create a simple List component since we're not importing it from MUI
const List = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
      {children}
    </Box>
  );
};