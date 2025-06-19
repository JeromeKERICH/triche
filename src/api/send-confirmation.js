import { supabase } from '../library/supabaseClient';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY); 

export const post = async ({ request }) => {
  try {
    const { email, name } = await request.json();

    // 1. Save to Supabase
    const { error: supabaseError } = await supabase
      .from('leads')
      .insert([{ email, name }]);

    if (supabaseError) {
      return new Response(JSON.stringify({ 
        error: supabaseError.message 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 2. Send email via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: 'Emmanuel Keric <no-reply@trichenest.com>',
      to: email,
      subject: 'Your Free Guide: From LinkedIn to Clients',
      html: `<p>Hi ${name},</p>
             <p>Here's your free guide as promised!</p>
             <a href="https://trichenest.com/guide.pdf" 
                style="background:#059669;color:white;padding:12px 24px;border-radius:6px;text-decoration:none">
                Download Guide
             </a>`
    });

    if (emailError) {
      return new Response(JSON.stringify({ 
        error: emailError.message 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // 3. Update Supabase that email was sent
    await supabase
      .from('leads')
      .update({ guide_downloaded: true })
      .eq('email', email);

    return new Response(JSON.stringify({ 
      success: true 
    }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (err) {
    return new Response(JSON.stringify({ 
      error: err.message || 'Server error' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};