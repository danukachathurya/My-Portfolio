import Button from "../components/Button";
import PageHero from "../components/PageHero";

export default function NotFoundPage() {
  return (
    <PageHero
      eyebrow="Not Found"
      title="That route does not exist in the portfolio yet."
      description="The page you tried to open is missing or has moved. Use the main navigation to continue exploring the portfolio."
      actions={
        <>
          <Button to="/">Go Home</Button>
          <Button to="/contact" variant="secondary">
            Contact
          </Button>
        </>
      }
      aside={
        <div className="space-y-4">
          <div className="surface-card p-4">
            <p className="meta-copy">Try the Home, About, Journal, CV, or Contact routes from the navigation.</p>
          </div>
        </div>
      }
    />
  );
}
