import {Resend } from "resend"


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const {name, email, message} = await request.json();
try{
    const {data, error}  = await resend.emails.create({
        from: 'Acme <onboarding@resend.dev>',
        to: "sushankgurung2002@gmail.com",
        subject: "Inquiry from Vbee Studio",
        react: <EmailTemplate />,
    })


    if (error) {
        return Response.json({ error }, { status: 500 });
      }
    
      return Response.json(data);
    }
     catch (error) {
      return Response.json({ error }, { status: 500 });
    }
}