import nodemailer from 'nodemailer'

const pass = 'cbye onvh tdba zacc'
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'communications.customchess@gmail.com',
      pass: pass
    }
  });