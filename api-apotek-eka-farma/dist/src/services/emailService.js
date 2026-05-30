import nodemailer from 'nodemailer';
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});
export const sendResetPasswordEmail = async (to, resetUrl) => {
    const mailOptions = {
        from: `"Apotek Eka Farma" <${process.env.SMTP_USER}>`,
        to,
        subject: 'Reset Password Anda - Apotek Eka Farma',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #e11d48;">Reset Password</h2>
                <p>Halo,</p>
                <p>Anda menerima email ini karena ada permintaan untuk mereset kata sandi pada akun Anda.</p>
                <p>Silakan klik tombol di bawah ini untuk membuat kata sandi baru:</p>
                <div style="text-align: center; margin: 30px 0;">
                    <a href="${resetUrl}" style="background-color: #e11d48; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Reset Password</a>
                </div>
                <p>Jika Anda tidak meminta reset password, abaikan email ini dan kata sandi Anda akan tetap aman.</p>
                <p>Tautan ini akan kedaluwarsa dalam 1 jam.</p>
                <hr style="border: 1px solid #fce7f3; margin: 30px 0;" />
                <p style="color: #6b7280; font-size: 12px; text-align: center;">Apotek Eka Farma System</p>
            </div>
        `
    };
    await transporter.sendMail(mailOptions);
};
