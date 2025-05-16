<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="description" content="{{ config('app.description', 'CGUITECH propose des services technologiques sur mesure pour les entreprises en Guinée et en Afrique de l\'Ouest: développement logiciel, cybersécurité, cloud et services IT.') }}">
        <meta name="author" content="CGUITECH">
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
        <meta name="format-detection" content="telephone=no">
        <meta name="theme-color" content="#1a365d" media="(prefers-color-scheme: light)">
        <meta name="theme-color" content="#1e293b" media="(prefers-color-scheme: dark)">
        <meta name="color-scheme" content="light dark">
        <meta name="application-name" content="{{ config('app.name', 'CGUITECH') }}">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-status-bar-style" content="default">
        <meta name="apple-mobile-web-app-title" content="{{ config('app.name', 'CGUITECH') }}">

        {{-- Sécurité --}}
        <meta http-equiv="X-Content-Type-Options" content="nosniff">
        <meta http-equiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=()">
        <meta name="referrer" content="strict-origin-when-cross-origin">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        {{-- Script de détection du mode sombre --}}
        <script>
            (function() {
                const appearance = '{{ $appearance ?? "system" }}';

                if (appearance === 'system') {
                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

                    if (prefersDark) {
                        document.documentElement.classList.add('dark');
                    }
                }
            })();
        </script>

        {{-- Style de base --}}
        <style>
            html {
                background-color: oklch(1 0 0);
                scroll-behavior: smooth;
            }

            html.dark {
                background-color: oklch(0.145 0 0);
            }
        </style>

        <title inertia>{{ config('app.name', 'CGUITECH') }}</title>

        {{-- Favicons --}}
        <link rel="icon" href="/favicon.ico" sizes="any">
        <link rel="icon" href="/favicon.svg" type="image/svg+xml">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180">
        <link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a365d">
        <meta name="msapplication-TileColor" content="#1a365d">
        <meta name="msapplication-TileImage" content="/mstile-144x144.png">
        <meta name="msapplication-config" content="/browserconfig.xml">

        {{-- Préchargement des polices --}}
        <link rel="preconnect" href="https://fonts.bunny.net" crossorigin>
        <link rel="preload" href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" as="style">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        {{-- Open Graph --}}
        <meta property="og:site_name" content="{{ config('app.name', 'CGUITECH') }}">
        <meta property="og:locale" content="{{ str_replace('_', '-', app()->getLocale()) }}">
        <meta property="og:type" content="website">
        <meta property="og:title" content="{{ config('app.name', 'CGUITECH') }}">
        <meta property="og:description" content="{{ config('app.description', 'CGUITECH propose des services technologiques sur mesure pour les entreprises en Guinée et en Afrique de l\'Ouest: développement logiciel, cybersécurité, cloud et services IT.') }}">
        <meta property="og:url" content="{{ url()->current() }}">
        <meta property="og:image" content="{{ url('/images/logo-cguitech-wb.svg') }}">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:image:alt" content="Logo CGUITECH">

        {{-- Twitter Card --}}
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@cguitech">
        <meta name="twitter:creator" content="@cguitech">
        <meta name="twitter:title" content="{{ config('app.name', 'CGUITECH') }}">
        <meta name="twitter:description" content="{{ config('app.description', 'CGUITECH propose des services technologiques sur mesure pour les entreprises en Guinée et en Afrique de l\'Ouest: développement logiciel, cybersécurité, cloud et services IT.') }}">
        <meta name="twitter:image" content="{{ url('/images/logo-cguitech-wb.svg') }}">

        {{-- DNS Prefetch et Preconnect --}}
        <link rel="dns-prefetch" href="//fonts.bunny.net">
        <link rel="dns-prefetch" href="//fonts.googleapis.com">
        <link rel="dns-prefetch" href="//fonts.gstatic.com">

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        <noscript>
            <div style="padding: 20px; text-align: center; background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;">
                Pour une expérience optimale, veuillez activer JavaScript dans votre navigateur.
            </div>
        </noscript>

        {{-- Schema.org JSON-LD --}}
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "CGUITECH",
            "url": "{{ url('/') }}",
            "logo": "{{ asset('images/logo-cguitech-wb.svg') }}",
            "description": "CGUITECH est un fournisseur dynamique et progressiste de technologie d'entreprise en Guinée",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "T2 Kipé Centre Emetteur",
                "addressLocality": "Ratoma",
                "addressRegion": "Conakry",
                "addressCountry": "GN"
            },
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+224627969855",
                "contactType": "customer service",
                "email": "contact@cguitech.com",
                "availableLanguage": ["fr"]
            },
            "sameAs": [
                "https://www.facebook.com/cguitech",
                "https://www.linkedin.com/company/cguitech",
                "https://twitter.com/cguitech"
            ]
        }
        </script>
    </body>
</html>
