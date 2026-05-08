import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import bg from "@/shared/assets/background.png";
import gates from "@/shared/assets/gates-of-olympus.png";
import visa from "@/shared/assets/visa.png";
import mastercard from "@/shared/assets/mastercard.png";
import interac from "@/shared/assets/interac.png";
import { buildRedirectUrl } from "@/shared/lib/redirect";

function PaymentIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-4 w-auto opacity-90 sm:h-5"
      loading="lazy"
    />
  );
}

function SmallRound({ label, className }) {
  return (
    <div
      className={[
        "grid h-6 w-6 place-items-center rounded-full bg-white/10 text-[11px] font-extrabold text-white/80 ring-1 ring-white/10 backdrop-blur",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden="true"
    >
      {label}
    </div>
  );
}

export function LandingHero() {
  const offerUrl = buildRedirectUrl();

  return (
    <div className="min-h-dvh">
      <div
        className="relative isolate min-h-dvh overflow-hidden"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />

        <header className="relative z-10">
          <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 md:pt-8" />
        </header>

        <main className="relative z-10">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 pb-24 pt-4 sm:px-6 md:grid-cols-[1fr_520px] md:gap-10 md:pb-28 md:pt-6">
            <div className="order-2 max-w-[520px] text-center md:order-1 md:pt-4 md:text-left">
              <Typography
                variant="h2"
                className="hero-title text-balance"
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                  fontSize: { xs: 30, sm: 40, lg: 44 },
                  color: "#f3d066",
                  textTransform: "uppercase",
                }}
              >
                Grab a 400% bonus up <br />
                to £12,750 <br />+ 400 FS on gates of <br />
                olympus!
              </Typography>

              <div className="mt-5 w-full max-w-[320px] rounded-xl bg-black/20 px-4 py-4 ring-1 ring-white/10 backdrop-blur md:max-w-none mx-auto md:mx-0">
                <Button
                  variant="contained"
                  size="large"
                  component="a"
                  href={offerUrl}
                  rel="noreferrer"
                  sx={{
                    borderRadius: "14px",
                    px: 3,
                    py: 1.2,
                    width: "100%",
                    maxWidth: 280,
                    mx: "auto",
                    fontWeight: 900,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background:
                      "linear-gradient(180deg, #1db64b 0%, #0b7a2c 100%)",
                    boxShadow:
                      "0 14px 28px rgba(0,0,0,0.45), inset 0 0 0 3px rgba(255, 196, 74, 0.8)",
                    "&:hover": {
                      background:
                        "linear-gradient(180deg, #22c55e 0%, #0b7a2c 100%)",
                    },
                  }}
                >
                  Play now
                </Button>

                <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                  <SmallRound label="B" className="bg-white/10" />
                  <SmallRound label="T" className="bg-white/10" />
                  <SmallRound label="€" className="bg-white/10" />
                  <PaymentIcon src={visa} alt="Visa" />
                  <PaymentIcon src={mastercard} alt="Mastercard" />
                  <PaymentIcon src={interac} alt="Interac" />
                </div>
              </div>
            </div>

            <div className="order-1 flex justify-center md:order-2 md:justify-end">
              <img
                src={gates}
                alt="Zeus — Gates of Olympus"
                className="w-[360px] max-w-full drop-shadow-[0_28px_50px_rgba(0,0,0,0.55)] sm:w-[420px] md:w-[520px]"
                loading="eager"
              />
            </div>
          </div>
        </main>

        <footer className="absolute inset-x-0 bottom-0 z-10">
          <div className="bg-black/35 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4 px-4 py-4 sm:px-6">
              <PaymentIcon src={visa} alt="Visa" />
              <PaymentIcon src={mastercard} alt="Mastercard" />
              <PaymentIcon src={interac} alt="Interac" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
