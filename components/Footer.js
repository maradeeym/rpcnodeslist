import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid #EAEAEA",
        background: "#FBFBFA",
      }}
    >
      <div
        className="mx-auto px-6 py-16"
        style={{ maxWidth: "72rem" }}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Brand */}
          <div style={{ maxWidth: "22rem" }}>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                width={22}
                height={22}
                className="rounded-md"
                priority
              />
              <span style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#111111" }}>
                {config.appName}
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "#787774", lineHeight: "1.6" }}>
              {config.appDescription}
            </p>
            <p style={{ fontSize: "0.8125rem", color: "#B0ADAB", marginTop: "0.75rem" }}>
              &copy; {new Date().getFullYear()} RPC Node List
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#787774",
                  marginBottom: "0.875rem",
                }}
              >
                Links
              </p>
              <div className="flex flex-col gap-2.5">
                {config.mailgun?.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    style={{ fontSize: "0.875rem", color: "#111111", textDecoration: "none" }}
                    className="hover:text-gray-500 transition-colors"
                  >
                    Support
                  </a>
                )}
                <a
                  href="https://github.com/maradeeym/rpcnodeslist/blob/main/app/rpcdb.js"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: "0.875rem", color: "#111111", textDecoration: "none" }}
                  className="hover:text-gray-500 transition-colors"
                >
                  Add your RPC
                </a>
              </div>
            </div>

            <div>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#787774",
                  marginBottom: "0.875rem",
                }}
              >
                Legal
              </p>
              <div className="flex flex-col gap-2.5">
                <Link
                  href="/tos"
                  style={{ fontSize: "0.875rem", color: "#111111", textDecoration: "none" }}
                  className="hover:text-gray-500 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy-policy"
                  style={{ fontSize: "0.875rem", color: "#111111", textDecoration: "none" }}
                  className="hover:text-gray-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
