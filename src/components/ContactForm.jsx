import React, { useState } from 'react';
import { Button, Modal, Box, Typography } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true); 
  };

  const handleClose = () => {
    setOpen(false); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="contact-form" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: 'auto' }}>
        <h2>Contáctanos</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu email"
          required
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
          required
          style={{ padding: '10px', fontSize: '16px', minHeight: '100px' }}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            borderRadius: '10px',
          }}
        >
          <Typography variant="h6" component="h2">
            ¡Mensaje enviado!
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Nombre: {formData.name} <br />
            Correo: {formData.email} <br />
            Mensaje: {formData.message}
          </Typography>
          <Button
            onClick={handleClose}
            variant="contained"
            color="secondary"
            sx={{ mt: 2,
              backgroundColor: '#87CEEB'}}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ContactForm;
