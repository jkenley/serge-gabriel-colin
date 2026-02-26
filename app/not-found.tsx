export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>404 — Page introuvable</title>
        <link rel="icon" href="/serge_gabriel_colin_gold.png" />
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "hsl(211, 54%, 11%)",
          fontFamily:
            "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.5,
            backgroundImage:
              "repeating-radial-gradient(circle at 0 0, transparent 0, hsl(211, 54%, 11%) 6px), repeating-linear-gradient(hsla(211, 55%, 18%, 0.4), hsla(211, 55%, 14%, 0.15))",
            pointerEvents: "none",
          }}
        />

        {/* Gold accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              "linear-gradient(to right, transparent, hsl(39, 55%, 51%), transparent)",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            maxWidth: 384,
            width: "100%",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: "clamp(3.75rem, 8vw, 6rem)",
                fontWeight: 600,
                color: "hsl(39, 55%, 51%)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                margin: 0,
              }}
            >
              404
            </h1>
            <h2
              style={{
                fontFamily: "'Playfair Display', 'Georgia', serif",
                fontSize: "clamp(1.25rem, 3vw, 1.5rem)",
                fontWeight: 600,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Page introuvable
            </h2>
            <p
              style={{
                fontSize: 14,
                color: "rgba(255, 255, 255, 0.5)",
                lineHeight: 1.6,
                maxWidth: 320,
                margin: 0,
              }}
            >
              La page que vous recherchez n&apos;existe pas ou a
              &eacute;t&eacute; d&eacute;plac&eacute;e.
            </p>
          </div>

          <a
            href="/fr"
            style={{
              display: "inline-block",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "12px 28px",
              backgroundColor: "hsl(39, 55%, 51%)",
              color: "white",
              borderRadius: 6,
              textDecoration: "none",
              transition: "background-color 300ms",
            }}
          >
            Retourner à l&apos;accueil
          </a>

          {/* Bottom accent */}
          <div
            style={{
              width: 48,
              height: 1,
              background:
                "linear-gradient(to right, transparent, hsl(39, 55%, 51%), transparent)",
              marginTop: 16,
            }}
          />
        </div>
      </body>
    </html>
  );
}
