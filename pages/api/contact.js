require('dotenv').config()
const sgMail = require('@sendgrid/mail')
const { SG_API_KEY, FROM_EMAIL, TO_EMAIL } = process.env
sgMail.setApiKey(SG_API_KEY)
export default async function handler(req, res) {
    const { firstName, lastName, email, phone, message } = req.body
    const msg = {
        to: TO_EMAIL,
        from: FROM_EMAIL,
        subject: 'Contact Page',
        html: `<p><strong>First Name:</strong>${firstName}</p>
             <p><strong>Last Name:</strong>${lastName}</p>
             <p><strong>Email:</strong>${email}</p>
             <p><strong>Phone:</strong>${phone}</p>
             <p><strong>Message:</strong>${message}</p>`
    }

    await sgMail.send(msg)
    res.json({ success: true })
}