'use client';

import { Box, Container, Typography, Link, Grid, Divider, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, Email } from '@mui/icons-material';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Box component="footer" sx={{ 
      bgcolor: 'primary.main', 
      color: 'white', 
      py: 6,
      mt: 8 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, mb: 4, gap: { xs: 4, md: 0 } }}>
          <Box sx={{ flex: '1 1 33%' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Kappa Delta Rho
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Lambda Chapter at UC Berkeley
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              2243 Piedmont Avenue<br />
              Berkeley, CA 94720
            </Typography>
          </Box>

          <Box sx={{ flex: '1 1 33%' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column' }}>
              <Link href="/" color="inherit" underline="hover" sx={{ mb: 1 }}>Home</Link>
              <Link href="/about" color="inherit" underline="hover" sx={{ mb: 1 }}>About</Link>
              <Link href="/lambda-chapter" color="inherit" underline="hover" sx={{ mb: 1 }}>Lambda Chapter</Link>
              <Link href="/news" color="inherit" underline="hover" sx={{ mb: 1 }}>News</Link>
              <Link href="/photos" color="inherit" underline="hover" sx={{ mb: 1 }}>Photos</Link>
              <Link href="/contact" color="inherit" underline="hover">Contact</Link>
            </Box>
          </Box>

          <Box sx={{ flex: '1 1 33%' }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <IconButton color="inherit" aria-label="facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="twitter">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" aria-label="email" href="mailto:contact@kdrlambda.org">
                <Email />
              </IconButton>
            </Box>
            <Typography variant="body2">
              For general inquiries:<br />
              contact@kdrlambda.org
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.2)', mb: 3 }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
          <Typography variant="body2">
            © {currentYear} Kappa Delta Rho, Lambda Chapter. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" color="inherit" underline="hover" variant="body2">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover" variant="body2">Terms of Use</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;