export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "R Storage Solutions",
    "image": "https://rstorage.in/logo.png", // Replace with real logo URL
    "url": "https://rstorage.in",
    "telephone": "+919876543210",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Industrial Area, Phase 1",
        "addressLocality": "New Delhi",
        "postalCode": "110020",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6139,
        "longitude": 77.2090
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },
    "sameAs": [
        "https://www.facebook.com/rstorage",
        "https://www.linkedin.com/company/rstorage"
    ]
}
