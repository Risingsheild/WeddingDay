import { PageWrapper } from '../components/PageWrapper';

export function RSVP() {
    return (
        <PageWrapper>
            <h2 className="text-3xl font-semibold mb-4">RSVP</h2>
            <p className="mb-4">We'd love to know if you're coming! Please use the link below to RSVP.</p>
            <a
                href="https://forms.gle/your-google-form-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded shadow"
            >
                RSVP on Google Form
            </a>
        </PageWrapper>
    );
}