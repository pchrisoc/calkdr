'use client';

import { Container, Typography, Box, Paper, Divider, Avatar, List, ListItem, ListItemText, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const PageHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  marginBottom: theme.spacing(6),
}));

export default function LambdaChapter() {
  return (
    <>
      <PageHeader>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Lambda Chapter
          </Typography>
          <Typography variant="h6">
            Established at UC Berkeley in 1924
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.67%' } }}>
            <Typography variant="h4" component="h2" color="primary" gutterBottom>
              Our Chapter History
            </Typography>
            <Typography variant="body1" paragraph>
              In 1924, the Lambda Chapter received its charter from the National Fraternity of Kappa Delta Rho, 
              becoming the 11th chapter of KDR. Lambda was born out of the Delphic Club, a small local fraternity. 
              Delphic&apos;s men realized that being part of a national fraternity had many advantages - most notably 
              being supported at the national level and being able to connect with other members of KDR across the country.
            </Typography>
            <Typography variant="body1" paragraph>
              Through the decades, Lambda Chapter has been home to countless leaders, scholars, and athletes who have 
              gone on to make significant contributions in their fields. Our rich history is built on the foundation of 
              brotherhood, academic excellence, and service to the community.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, the Lambda Chapter continues to thrive with a diverse group of brothers who are committed to upholding 
              the values and traditions of Kappa Delta Rho while adapting to the changing landscape of university life.
            </Typography>

            {/* Chapter House Image and Map */}
            <Box sx={{ mt: 4, mb: 6 }}>
              <Typography variant="h4" component="h2" color="primary" gutterBottom>
                Our Chapter House
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4, mb: 4 }}>
                <Box sx={{ flex: 1 }}>
                  <Card sx={{ boxShadow: 3 }}>
                    <Box sx={{ position: 'relative', width: '100%', height: 300 }}>
                      <Image 
                        src="/ChapterHouse.jpg" 
                        alt="KDR Lambda Chapter House" 
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        The Lambda Chapter House
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Built with 16 spacious bedrooms, professional-grade kitchen, and multiple common areas.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Card sx={{ boxShadow: 3, height: '100%' }}>
                    <Box sx={{ width: '100%', height: 300 }}>
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.6821624823824!2d-122.25755902422493!3d37.86749477220711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c25d51758c1%3A0x722c31d5c0ee6c23!2s2739%20Channing%20Way%2C%20Berkeley%2C%20CA%2094704!5e0!3m2!1sen!2sus!4v1714496420049!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h6" gutterBottom>
                        Our Location
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        2739 Channing Way, Berkeley, CA - in the heart of the Greek community.
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </Box>
              <Typography variant="body1" paragraph>
                Kappa Delta Rho is located at 2739 Channing Way, Berkeley, CA just two blocks from campus in the center 
                of fraternity and sorority life. We&apos;re on the corner of Channing and Piedmont, with a big front lawn 
                right across from Channing circle (the big grass circle in the center of the intersection).
              </Typography>
              <Typography variant="body1" paragraph>
                The KDR House at Cal has 16 spacious bedrooms, a large living room, chapter room, dining room, and 
                professional-grade kitchen with Wolf appliances. We also have a washer and dryer, and every room is 
                wired for cable and internet. With three decks overlooking both Channing St. and Piedmont St., the 
                Lambda Chapter house is in an ideal location in the center of the Greek community on the Cal campus.
              </Typography>
              <Typography variant="body1" paragraph>
                Being just 3 blocks from Memorial Stadium, tailgates before every home football game are always a great time.
              </Typography>
            </Box>

            <Box my={6}>
              <Divider />
            </Box>

            <Typography variant="h4" component="h2" color="primary" gutterBottom>
              Chapter Leadership
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, mb: 4 }}>
              <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' } }}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>BS</Avatar>
                  <Typography variant="h6" gutterBottom>Brady Suburu</Typography>
                  <Typography variant="body2" color="text.secondary">Consul</Typography>
                </Paper>
              </Box>
              <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' } }}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>TR</Avatar>
                  <Typography variant="h6" gutterBottom>Trajan Robinson</Typography>
                  <Typography variant="body2" color="text.secondary">Senior Tribune</Typography>
                </Paper>
              </Box>
              <Box sx={{ width: { xs: '100%', sm: 'calc(50% - 16px)', md: 'calc(33.33% - 16px)' } }}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                  <Avatar sx={{ width: 100, height: 100, mx: 'auto', mb: 2, bgcolor: 'primary.main' }}>PO</Avatar>
                  <Typography variant="h6" gutterBottom>Patrick O&apos;Connor</Typography>
                  <Typography variant="body2" color="text.secondary">Junior Tribune</Typography>
                </Paper>
              </Box>
            </Box>
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                Chapter Facts
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Founded" secondary="1924" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Chapter Number" secondary="11th Chapter of KDR" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="House Size" secondary="16 Bedrooms" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Location" secondary="2739 Channing Way, Berkeley, CA" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Chapter Motto" secondary="Honor Super Omnia" />
                </ListItem>
              </List>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                House Features
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Professional-grade kitchen" secondary="With Wolf appliances" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Three decks" secondary="Overlooking Channing & Piedmont" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Large living room" secondary="For brotherhood activities" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Chapter room" secondary="For meetings and gatherings" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText primary="Dining room" secondary="For shared meals" />
                </ListItem>
              </List>
            </Paper>

            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                Upcoming Chapter Events
              </Typography>
              <List>
                <ListItem>
                  <ListItemText 
                    primary="Spring Rush" 
                    secondary="May 15-22, 2025" 
                    secondaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText 
                    primary="Alumni Weekend" 
                    secondary="June 5-7, 2025" 
                    secondaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemText 
                    primary="Community Service Day" 
                    secondary="June 20, 2025" 
                    secondaryTypographyProps={{ color: 'text.secondary' }}
                  />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Box>
      </Container>
    </>
  );
}