from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
import traceback
from dotenv import load_dotenv

# Load environment variables
load_dotenv(override=True)

app = Flask(__name__)

# Configure CORS - allow requests from your Next.js frontend
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000", "http://127.0.0.1:3000", "https://yourdomain.com"],
        "methods": ["GET", "POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Email configuration function
def get_email_config():
    load_dotenv(override=True) # Reload to pick up any changes
    return {
        'host': os.getenv('SMTP_HOST', 'smtp.gmail.com'),
        'port': int(os.getenv('SMTP_PORT', 587)),
        'user': os.getenv('SMTP_USER'),
        'pass': os.getenv('SMTP_PASSWORD'),
        'recipient': os.getenv('RECIPIENT_EMAIL', 'sandeep@wellindiaracking.com'),
        'company': os.getenv('COMPANY_NAME', 'Well India Racking')
    }

def send_email(subject, body, sender_email, sender_name):
    """Send email using SMTP"""
    config = get_email_config()
    print(f"Attempting to send email via {config['host']}:{config['port']} as {config['user']}")
    
    # Use formatted sender name
    display_name = f"{sender_name} via {config['company']}"
    from_header = f"{config['company']} <{config['user']}>"
    
    if not config['user'] or not config['pass']:
        print("ERROR: SMTP credentials missing in environment")
        return False

    try:
        # Create message
        message = MIMEMultipart('alternative')
        message['Subject'] = subject
        message['From'] = from_header
        message['To'] = config['recipient']
        message['Reply-To'] = sender_email

        # Create HTML and plain text versions
        text_part = MIMEText(body, 'plain')
        html_part = MIMEText(f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 10px;">
                    <h2 style="color: #0c4a6e; border-bottom: 3px solid #0284c7; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
                        {body.replace(chr(10), '<br>')}
                    </div>
                    <p style="margin-top: 20px; font-size: 12px; color: #64748b;">
                        This email was sent from the R Storage website.
                    </p>
                </div>
            </body>
        </html>
        """, 'html')

        message.attach(text_part)
        message.attach(html_part)

        # Connect to SMTP server and send email
        print(f"Connecting to {config['host']}...")
        server = smtplib.SMTP(config['host'], config['port'])
        server.set_debuglevel(1) # Enable verbose SMTP logging
        server.ehlo()
        server.starttls()
        server.ehlo()
        server.login(config['user'], config['pass'])
        server.send_message(message)
        server.quit()
        
        print("Email sent successfully!")
        return True
    except Exception as e:
        print(f"Error sending email: {str(e)}")
        traceback.print_exc()
        return False

@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def contact():
    """Handle contact form submissions"""
    
    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        return '', 204

    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['name', 'email', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400

        # Extract form data
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone', 'Not provided')
        company = data.get('company', 'Not provided')
        message = data.get('message')

        # Create email subject and body
        subject = f"New Contact Form Submission from {name}"
        body = f"""
Contact Form Submission Details:

Name: {name}
Email: {email}
Phone: {phone}
Company: {company}
Preferred Contact Method: {data.get('preferred_method', 'Not specified')}

Message:
{message}

---
Submitted at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        """

        # Send email
        if send_email(subject, body, email, name):
            return jsonify({
                'success': True,
                'message': 'Your message has been sent successfully!'
            }), 200
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to send email. Please try again later.'
            }), 500

    except Exception as e:
        print(f"Error processing contact form: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'An error occurred processing your request.'
        }), 500

@app.route('/api/quote', methods=['POST', 'OPTIONS'])
def quote():
    """Handle quote request submissions"""
    
    # Handle preflight OPTIONS request
    if request.method == 'OPTIONS':
        return '', 204

    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'service']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400

        # Extract form data
        name = data.get('name')
        email = data.get('email')
        phone = data.get('phone')
        company = data.get('company', 'Not provided')
        service = data.get('service')
        message = data.get('message', 'No additional message')

        # Create email subject and body
        subject = f"New Quote Request from {name} - {service}"
        body = f"""
Quote Request Details:

Name: {name}
Email: {email}
Phone: {phone}
Company: {company}
Service Requested: {service}
Preferred Contact Method: {data.get('preferred_method', 'Not specified')}

Additional Message:
{message}

---
Submitted at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
        """

        # Send email
        if send_email(subject, body, email, name):
            return jsonify({
                'success': True,
                'message': 'Your quote request has been sent successfully!'
            }), 200
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to send quote request. Please try again later.'
            }), 500

    except Exception as e:
        print(f"Error processing quote request: {str(e)}")
        return jsonify({
            'success': False,
            'error': 'An error occurred processing your request.'
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat()
    }), 200

@app.route('/api/config', methods=['GET'])
def get_config():
    """Return public configuration like company phone/whatsapp"""
    load_dotenv(override=True)
    phone = os.getenv('CONTACT_PHONE', '+919310149385')
    return jsonify({
        'companyName': os.getenv('COMPANY_NAME', 'R Storage'),
        'phone': phone,
        'whatsapp': os.getenv('CONTACT_WHATSAPP', '+919310149385'),
        'whatsappMessage': os.getenv('WHATSAPP_MESSAGE', 'Hello R Storage, I am interested in your storage solutions.'),
        'companyPhone': phone,
        'contactWhatsApp': phone.replace('+', '').replace(' ', '')
    }), 200

if __name__ == '__main__':
    # Check if required environment variables are set
    config = get_email_config()
    if not config['user'] or not config['pass']:
        print("WARNING: SMTP credentials not configured. Please set SMTP_USER and SMTP_PASSWORD in .env file")
    else:
        print(f"SMTP configured successfully: {config['user']}")
        print(f"Recipient: {config['recipient']}")
    
    # Ensure debug mode doesn't interfere with logging
    app.run(debug=True, host='0.0.0.0', port=5000, use_reloader=True)
