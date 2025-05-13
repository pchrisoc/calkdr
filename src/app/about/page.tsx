'use client';

import { Container, Typography, Box, Paper, Divider, Card, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';

const PageHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  marginBottom: theme.spacing(6),
}));

export default function AboutKDR() {
  return (
    <>
      <PageHeader>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            About Kappa Delta Rho
          </Typography>
          <Typography variant="h6">
            Honor Super Omnia - Honor Above All Things
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 66.67%' } }}>
            <Typography variant="h4" component="h2" color="primary" gutterBottom>
              Our National History
            </Typography>
            <Typography variant="body1" paragraph>
              Kappa Delta Rho was founded on May 17, 1905, at Middlebury College in Middlebury, Vermont. 
              The fraternity was established by ten young men who desired to create a new fraternal society
              based on their shared values and principles.
            </Typography>
            <Typography variant="body1" paragraph>
              Since its founding, KDR has grown to include chapters across the United States, fostering 
              brotherhood, leadership, and academic excellence among its members. Kappa Delta Rho stands as a 
              monument to the dream of our ten founders in their quest for developing educated gentlemen who 
              promote human dignity, positive relationships among men, and moral excellence of the highest ideals.
            </Typography>

            <Box sx={{ my: 6 }}>
              <Divider />
            </Box>

            <Typography variant="h4" component="h2" color="primary" gutterBottom>
              Our Precepts
            </Typography>
            
            <Typography variant="body1" paragraph>
              As a Brother of the National Fraternity of Kappa Delta Rho, I have but one aim: to lead an honorable life.
              To this end, I am bound by my words and actions to:
            </Typography>
            
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6 }}>
              <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" color="primary" gutterBottom>
                      Honor
                    </Typography>
                    <Typography variant="body2">
                      Embrace the principles and spirit of the Kappa Delta Rho Gentleman, treating all those I encounter 
                      with dignity and respect. Our motto &quot;Honor Super Omnia&quot; means that KDR encourages her members to be 
                      honorable men, to strive for the highest level of personal integrity, and to treat others with respect.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" color="primary" gutterBottom>
                      Scholarship
                    </Typography>
                    <Typography variant="body2">
                      Work diligently in the pursuit of my education, understanding that I am a student first and that 
                      the quest for knowledge is an endeavor which will last a lifetime. All members put their studies first 
                      while balancing fraternity involvement.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" color="primary" gutterBottom>
                      Brotherhood
                    </Typography>
                    <Typography variant="body2">
                      Meet all of my obligations to the Fraternity in a timely manner, so as to ensure that I am doing 
                      my share and that I am not a burden to my brothers. I serve as my brothers&apos; keeper, holding them 
                      accountable for their actions as they hold me accountable for mine.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
              <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}>
                <Card sx={{ height: '100%', boxShadow: 3 }}>
                  <CardContent>
                    <Typography variant="h6" component="h3" color="primary" gutterBottom>
                      Service
                    </Typography>
                    <Typography variant="body2">
                      Engage in the service of mankind, not for the praise or recognition that such service may bring, 
                      but because it is the right thing to do. Support my Alma mater, that she may view Kappa Delta Rho 
                      as a partner in the development of her students.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>

        </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 33.33%' } }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                KDR National Facts
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Box sx={{ width: '50%' }}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" color="primary">1905</Typography>
                    <Typography variant="body2">Year Founded</Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '50%' }}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" color="primary">35</Typography>
                    <Typography variant="body2">Active Chapters</Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '50%' }}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" color="primary">25,000+</</Typography>
                    <Typography variant="body2">Initiated Members</Typography>
                  </Box>
                </Box>
                <Box sx={{ width: '50%' }}>
                  <Box sx={{ textAlign: 'center', p: 2 }}>
                    <Typography variant="h4" color="primary">10</Typography>
                    <Typography variant="body2">Founding Fathers</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>

            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                The Purposes of KDR
              </Typography>
              <Typography variant="body2" paragraph>
                • Promote good fellowship among its members and the advancement of truth, justice, and virtue as exemplified 
                by our Latin motto: Honor Super Omnia.
              </Typography>
              <Typography variant="body2" paragraph>
                • Promote scholarship, remembering our young members are students first and fraternity members second.
              </Typography>
              <Typography variant="body2" paragraph>
                • Provide an environment for students to learn how to apply knowledge acquired from the classroom and 
                their fraternity experience.
              </Typography>
              <Typography variant="body2" paragraph>
                • Continue enriching our heritage, and to maintain this tradition we must ensure that we provide the means 
                to uphold the values and standards on which we were founded.
              </Typography>
            </Paper>

          </Box>
        </Box>
      </Container>
    </>
  );
}