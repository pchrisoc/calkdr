'use client';

import { useState } from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Snackbar, Alert, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Send, Phone, Email, Place, Facebook, Instagram, Twitter } from '@mui/icons-material';

const PageHeader = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  textAlign: 'center',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  marginBottom: theme.spacing(6),
}));

const ContactInfoItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
}));

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    
    // Show success message
    setSnackbar({
      open: true,
      message: 'Your message has been sent! We will get back to you soon.',
      severity: 'success'
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <PageHeader>
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="h6">
            Get in Touch with the Lambda Chapter
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 58%' } }}>
            <Typography variant="h4" component="h2" color="primary" gutterBottom>
              Send Us a Message
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Have a question about Kappa Delta Rho or interested in joining the Lambda Chapter?
              Fill out the form below, and we&apos;ll get back to you as soon as possible.
            </Typography>

            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
                  <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}>
                    <TextField
                      required
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 12px)' } }}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 100%' }}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 100%' }}>
                    <TextField
                      required
                      fullWidth
                      multiline
                      rows={4}
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box sx={{ flex: '1 1 100%' }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      endIcon={<Send />}
                      sx={{ px: 4 }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Box>
              </form>
            </Paper>
          </Box>

          <Box sx={{ flex: { xs: '1 1 100%', md: '1 1 42%' } }}>
            <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                Contact Information
              </Typography>
              <ContactInfoItem>
                <Place color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Address</Typography>
                  <Typography variant="body2" color="text.secondary">
                    2739 Channing Way
                    <br />
                    Berkeley, CA 94704
                  </Typography>
                </Box>
              </ContactInfoItem>
              <ContactInfoItem>
                <Email color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Email</Typography>
                  <Typography variant="body2" color="text.secondary">
                    recruitment@calkdr.com
                    <br />
                    contact@calkdr.com
                  </Typography>
                </Box>
              </ContactInfoItem>
              <ContactInfoItem>
                <Phone color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">Phone</Typography>
                  <Typography variant="body2" color="text.secondary">
                    (123) 456-7890
                  </Typography>
                </Box>
              </ContactInfoItem>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" color="primary" gutterBottom>
                Follow Us
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                <IconButton color="primary" aria-label="facebook" size="large">
                  <Facebook fontSize="inherit" />
                </IconButton>
                <IconButton color="primary" aria-label="instagram" size="large">
                  <Instagram fontSize="inherit" />
                </IconButton>
                <IconButton color="primary" aria-label="twitter" size="large">
                  <Twitter fontSize="inherit" />
                </IconButton>
              </Box>
            </Paper>

            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" component="h3" color="primary" gutterBottom>
                Interested in Joining?
              </Typography>
              <Typography variant="body1" paragraph>
                If you&apos;re interested in becoming a brother of Kappa Delta Rho at UC Berkeley, we encourage you to reach out to our Recruitment Chair or visit during our Rush events.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our next Rush week starts on May 15, 2025. We look forward to meeting you!
              </Typography>
            </Box>
          </Box>
        </Box>

        
      </Container>

      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}