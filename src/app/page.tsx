'use client';

import { Button, Container, Typography, Box, Card, CardContent, CardMedia, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '70vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  backgroundColor: theme.palette.primary.main,
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

export default function Home() {
  const router = useRouter();
  
  return (
    <>
      <HeroSection>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom fontWeight="bold">
            ΚΔΡ LAMBDA CHAPTER
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4 }}>
            University of California, Berkeley
          </Typography>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            onClick={() => router.push('/lambda-chapter')}
            sx={{ 
              mr: 2, 
              px: 4, 
              py: 1.5, 
              fontSize: '1.1rem', 
              fontWeight: 'bold',
              backgroundColor: 'white',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              }
            }}
          >
            Learn More
          </Button>
          <Button 
            variant="outlined" 
            color="inherit" 
            size="large"
            onClick={() => router.push('/contact')}
            sx={{ 
              px: 4, 
              py: 1.5, 
              fontSize: '1.1rem', 
              fontWeight: 'bold',
              borderColor: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              }
            }}
          >
            Contact Us
          </Button>
        </Container>
      </HeroSection>

      <Container maxWidth="lg">
        {/* Welcome Section */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom fontWeight="bold">
            Welcome to Kappa Delta Rho at Berkeley
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
            As brothers of the Lambda Chapter of Kappa Delta Rho, we pride ourselves on our commitment to fellowship, leadership, 
            and academic excellence. Founded at Berkeley in 1943, our chapter continues to uphold the values of our national fraternity 
            while creating a unique experience for our members.
          </Typography>
        </Box>

        

        {/* Features */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mb: 8 }}>
          <Box sx={{ width: { xs: '100%', md: '32%' }, mb: { xs: 4, md: 0 } }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 2 }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" color="primary" gutterBottom>
                  Brotherhood
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  A brotherhood built on respect, trust, and shared experiences that last a lifetime.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '32%' }, mb: { xs: 4, md: 0 } }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 2 }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" color="primary" gutterBottom>
                  Leadership
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Developing the next generation of leaders through mentorship and opportunities to lead.
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '32%' }, mb: { xs: 4, md: 0 } }}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 2 }}>
              <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                <Typography variant="h5" component="h3" color="primary" gutterBottom>
                  Academic Excellence
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  A commitment to scholastic achievement and supporting each other's academic pursuits.
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>

        {/* Latest News Teaser */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom fontWeight="bold" sx={{ textAlign: 'center', mb: 4 }}>
            Latest News
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <Box sx={{ width: { xs: '100%', md: '48%' }, mb: { xs: 4, md: 0 } }}>
                <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="/sunset.png"
                  alt="Sunset view"
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                  Fall Rush 2025
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                  Join us for our Fall 2025 Rush events starting August 15. Meet the brothers and learn what makes KDR special at Berkeley.
                  </Typography>
                  <Button 
                  onClick={() => router.push('/news')}
                  sx={{ textTransform: 'none' }}
                  >
                  Read More
                  </Button>
                </CardContent>
                </Card>
            </Box>
            <Box sx={{ width: { xs: '100%', md: '48%' }, mb: { xs: 4, md: 0 } }}>
              <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  image="/bradybunch.png"
                  alt="Sunset view"
                  sx={{ height: 200 }}
                />
                <CardContent>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Community Service Day
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Our brothers recently participated in the Berkeley Community Service Day, contributing over 100 volunteer hours.
                  </Typography>
                  <Button 
                    onClick={() => router.push('/news')}
                    sx={{ textTransform: 'none' }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', my: 8, py: 6, bgcolor: 'grey.100', borderRadius: 2 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Interested in joining KDR?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}>
            Whether you're looking to join a fraternity or just want to learn more about Kappa Delta Rho at Berkeley, we'd love to hear from you.
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => router.push('/contact')}
            sx={{ fontWeight: 'bold', px: 4 }}
          >
            Get In Touch
          </Button>
        </Box>

        {/* Honor Super Omnia Section */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h4" component="h2" color="primary" gutterBottom fontWeight="bold" sx={{ textAlign: 'center', mb: 3 }}>
            Honor Super Omnia
          </Typography>
          <Box sx={{ bgcolor: 'grey.50', p: 4, borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="body1" paragraph>
              The Motto of Kappa Delta Rho is &quot;Honor Super Omnia&quot;, and translated, it means Honor Above All Things. While this may seem like a heady concept, 
              realistically it means that KDR encourages her members to be honorable men, to strive for the highest level of personal integrity, and to treat 
              others with respect.
            </Typography>
            <Typography variant="body1" paragraph>
              KDR is a social fraternity, and as such is an organization dedicated to developing the social skills of her members. By combining the principles 
              of leadership, brotherhood, cooperation, and service that men learn while in KDR with the world-class education at Cal, men leave college 
              well-rounded and well prepared for life. We believe men are enriched by the experience of fraternity, and believe that membership in a fraternity 
              helps to maximize the education and personal growth realized during college years.
            </Typography>
            <Typography variant="body1" paragraph>
              To that end, all members of Kappa Delta Rho are encouraged to put their studies first, to take positions of leadership in Kappa Delta Rho, 
              to take part in other student groups or activities, and to follow the Precepts of Kappa Delta Rho:
            </Typography>
            
            <Box sx={{ my: 3, p: 3, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 1 }}>
              <Typography variant="h6" gutterBottom align="center" fontStyle="italic">
                As a Brother of the National Fraternity of Kappa Delta Rho, I have but one aim: to lead an honorable life.
              </Typography>
              <Typography variant="body1" gutterBottom>
                To this end, I am bound by my words and actions to:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="• Embrace the principles and spirit of the Kappa Delta Rho Gentleman, treating all those I encounter with dignity and respect;" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Work diligently in the pursuit of my education, understanding that I am a student first and that the quest for knowledge is an endeavor which will last a lifetime;" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Meet all of my obligations to the Fraternity in a timely manner, so as to ensure that I am doing my share and that I am not a burden to my brothers;" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Engage in the service of mankind, not for the praise or recognition that such service may bring, but because it is the right thing to do;" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Serve as my brothers&apos; keeper, holding them accountable for their actions as they hold me accountable for mine; and" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="• Support my Alma mater, that she may view Kappa Delta Rho as a partner in the development of her students." />
                </ListItem>
              </List>
              <Typography variant="body1" paragraph>
                I understand that membership in Kappa Delta Rho is a lifelong privilege that is contingent upon my willingness to incorporate the values of the 
                Fraternity into my daily life and uphold the oath I have sworn. As I speak these words I once again affirm to my brothers, and all who hear me, 
                that I am a KDR Gentleman and I will place Honor Above All Things.
              </Typography>
              <Typography variant="h6" align="center" fontWeight="bold">
                Honor Super Omnia!
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
