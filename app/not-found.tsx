import Link from "next/link";
export default function NotFound() {
  return (
    <section className="wrap inner-hero">
      <p className="eyebrow">404 / PAGE NOT FOUND</p>
      <h1>Page not found</h1>
      <p className="lead">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Link className="button" href="/">
        Back to home →
      </Link>
      <Link className="text-link" href="/contact">
        Contact the firm →
      </Link>
    </section>
  );
}
