# R Storage Backend API

Python Flask backend for handling contact form submissions and sending emails.

## Setup Instructions

### 1. Install Python Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

Edit `.env` with your email settings:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
RECIPIENT_EMAIL=sandeep@wellindiaracking.com
```

### 3. Gmail Setup (Recommended for Testing)

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Generate an App Password:
   - Visit: https://myaccount.google.com/apppasswords
   - Select "Mail" and your device
   - Copy the 16-character password
4. Use this password as `SMTP_PASSWORD` in `.env`

### 4. Run the Backend

```bash
python app.py
```

The API will start on `http://localhost:5000`

## API Endpoints

### POST /api/contact
Handle contact form submissions

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "company": "ABC Corp",
  "message": "I need warehouse racking solutions"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### POST /api/quote
Handle quote request submissions

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "+91 98765 43210",
  "company": "XYZ Ltd",
  "service": "Pallet Racking",
  "message": "Need quote for 1000 sq ft warehouse"
}
```

### GET /api/health
Health check endpoint

## Production Deployment

### Option 1: Railway (Recommended)
1. Create account at railway.app
2. Connect your GitHub repository
3. Add environment variables in Railway dashboard
4. Deploy automatically

### Option 2: Heroku
1. Install Heroku CLI
2. Create `Procfile`:
   ```
   web: python app.py
   ```
3. Deploy:
   ```bash
   heroku create your-app-name
   heroku config:set SMTP_USER=your-email@gmail.com
   heroku config:set SMTP_PASSWORD=your-password
   git push heroku main
   ```

### Option 3: DigitalOcean/AWS
- Use a Python-compatible hosting service
- Set environment variables in the hosting dashboard
- Ensure port 5000 is accessible

## Security Notes

- Never commit `.env` file to version control
- Use HTTPS in production
- Consider adding rate limiting for spam prevention
- Validate and sanitize all input data

## Troubleshooting

**Email not sending:**
- Check SMTP credentials are correct
- Verify Gmail App Password is generated correctly
- Check firewall/antivirus isn't blocking SMTP port 587

**CORS errors:**
- Update allowed origins in `app.py` to match your frontend URL
- Ensure frontend is making requests to correct backend URL
