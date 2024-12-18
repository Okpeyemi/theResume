import nodemailer from "nodemailer"

export default async function handler(req, res) {
    if(req.method === "POST") {
        const { firstName, lastName, email, phone, message } = req.body

        const transporter = nodemailer.createTransport({
            service: "outlook",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.PASS_USER,
            },
        })

        const mailOptions = {
            from: email,
            to: "maqsoud.tawaliou@epitech.eu",
            subject: `Nouveau message de ${firstName} ${lastName}`,
            text: `
                Name: ${firstName} ${lastName}\n
                Email: ${email}\n
                Phone: ${phone}\n
                Message: ${message}
            `,
        }

        try {
            await transporter.sendMail(mailOptions)
            res.status(200).json({ success: true, message:"Message envoyé avec success!" })
        } catch (error) {
            console.error("Erreur, message non envoyé :", error)
            res.status(500).json({ success: false, message: "Echec d'envoi du message!" })
        }
    } else {
        res.status(405).json({ message: "Méthode non alloué!" })
    }
}