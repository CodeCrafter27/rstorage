import requests
try:
    r = requests.get('http://localhost:5000/api/config')
    data = r.json()
    print(f"Phone: {data.get('phone')}")
    print(f"WhatsApp: {data.get('whatsapp')}")
    print(f"Company: {data.get('companyName')}")
except Exception as e:
    print(e)
