# Kavárna u 4 zrnek - Struktura webu

```
                              obloucek/
                                  │
        ┌─────────────┬───────────┼───────────┬─────────────┐
        │             │           │           │             │
    📄 HTML        🎨 CSS      ⚡ JS      🖼️ Obrázky    ⚙️ Git
        │             │           │           │
        │         style.css   script.js   1-8.jpg/png
        │
        ├── index.html ─────────── Homepage
        │   ├── Hero sekce
        │   ├── Stats karty (hodiny, pes, wifi, terasa)
        │   ├── Preview sekcí
        │   └── Galerie náhled
        │
        ├── menu.html ──────────── Kompletní menu
        │   ├── Espresso nápoje (55-75 Kč)
        │   ├── Alternativní přípravy (50-95 Kč)
        │   ├── Studené nápoje (60-90 Kč)
        │   ├── Čaje (55-70 Kč)
        │   ├── Cheesecaky (75-95 Kč)
        │   ├── Dezerty (45-95 Kč)
        │   ├── Snídaně & brunch (85-149 Kč)
        │   └── Alergeny
        │
        ├── o-nas.html ─────────── O nás
        │   ├── Filosofie kávy
        │   ├── 3 pilíře (káva, dobrůtky, klid)
        │   ├── Proč 4 zrnka?
        │   └── Služby (věrnostní karta, slevy)
        │
        ├── galerie.html ───────── Galerie
        │   ├── 8 fotek grid
        │   ├── Popis interiéru
        │   └── Instagram @u4zrnek
        │
        ├── nas-pribeh.html ────── Náš příběh
        │   ├── Jak to začalo (2019)
        │   ├── Od nápadu k realitě
        │   ├── 2021: První kroky
        │   ├── Rekonstrukce
        │   └── Reference hostů
        │
        └── kontakt.html ───────── Kontakt
            ├── Kontaktní formulář
            ├── Adresa & hodiny
            ├── Jak se k nám dostanete
            ├── Rezervace (5+ lidí)
            ├── Soukromé akce (30 lidí)
            └── FAQ (11 otázek)
```

## Design systém (style.css)

```
CSS Variables
    │
    ├── Fonty
    │   ├── Display: Fraunces (serif)
    │   └── Body: DM Sans (sans-serif)
    │
    ├── Barvy
    │   ├── Ink: #1a1614 → #5c524a → #8a7f75
    │   ├── Surface: #faf8f5 → #f5f0e8 → #ffffff
    │   ├── Accent: #c45d3a (terakota)
    │   └── Coffee: #3d2c23 (espresso)
    │
    ├── Dark mode
    │   ├── data-theme="dark"
    │   └── prefers-color-scheme: dark
    │
    └── Breakpoints
        ├── 900px (tablet)
        ├── 768px (tablet)
        └── 600px (mobile)
```

## JavaScript (script.js)

```
Funkce
    │
    ├── Theme toggle
    │   ├── localStorage preference
    │   └── System preference fallback
    │
    ├── Header scroll effect
    │   └── .scrolled třída po 50px
    │
    ├── Mobile navigace
    │   └── Hamburger toggle
    │
    ├── Animace
    │   └── Intersection Observer [data-animate]
    │
    └── Utilities
        ├── Kopírovat adresu
        ├── ICS kalendář
        └── Aktuální rok v patičce
```

## Navigace

```
┌──────┐   ┌────────┐   ┌──────┐   ┌─────────┐   ┌────────────┐   ┌─────────┐
│ Home │ → │ O nás  │ → │ Menu │ → │ Galerie │ → │ Náš příběh │ → │ Kontakt │
└──────┘   └────────┘   └──────┘   └─────────┘   └────────────┘   └─────────┘
```

## SEO klíčová slova

```
Lokalita           Typ                    Funkce
    │                │                       │
    └── Písek        ├── kavárna             ├── dog friendly
                     ├── specialty coffee    ├── Wi-Fi
                     └── výběrová káva       ├── laptop friendly
                                             └── coworking

Produkty                    Popis
    │                         │
    ├── flat white            ├── nezávislá
    ├── espresso              ├── domácí
    ├── cheesecake            ├── útulná
    └── brunch                └── lokální
```

## Placeholdery (k doplnění)

- 📍 Přesná adresa v Písku
- 📞 Telefonní číslo (+420 123 456 789)
- 📧 Email (ahoj@u4zrnek.cz)
