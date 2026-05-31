import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
}

const SEO = ({ title, description, keywords, ogImage }: SEOProps) => {
  const fullTitle = `${title} | MN Finance Associates`;
  const defaultDescription = "Professional accounting, taxation, auditing, and business advisory solutions tailored for modern enterprises.";
  const siteUrl = "https://mnfinanceassociates.com";
  const defaultImage = ogImage || "/logo.svg";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || "finance, accounting, tax, audit, advisory, payroll, VAT, consultancy"} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:site_name" content="MN Finance Associates" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={defaultImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "MN Finance Associates",
          description: defaultDescription,
          url: siteUrl,
          logo: "/logo.svg",
          areaServed: "Worldwide",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Financial Services",
            itemListElement: [
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting Services" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Consultancy" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit Support" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Payroll Management" } },
              { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Advisory" } }
            ]
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
