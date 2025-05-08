import { useState } from 'react';
import { PageWrapper } from '../components/PageWrapper';
import '../styles/RSVP.css';

export function RSVP() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState(false);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    const handleIframeError = () => {
        setLoadError(true);
        setIsLoading(false);
    };

    return (
        <PageWrapper>
            <div className="rsvp-container">
                <h2 className="text-3xl font-semibold mb-4">RSVP</h2>
                <p className="mb-6">We'd love to know if you're coming! Please fill out the form below to RSVP.</p>

                {isLoading && (
                    <div className="loading-message">
                        Loading RSVP form...
                    </div>
                )}

                {loadError ? (
                    <div className="error-message">
                        <p>We're having trouble loading the RSVP form. Please try again later or contact us directly.</p>
                        <p className="mt-4">
                            <a href="mailto:wellsnick3@gmail.com" className="text-pink-600 hover:text-pink-700">
                                wellsnick3@gmail.com
                            </a>
                            {' or '}
                            <a href="mailto:kmeehan0131@gmail.com" className="text-pink-600 hover:text-pink-700">
                                kmeehan0131@gmail.com
                            </a>
                        </p>
                    </div>
                ) : (
                    <>
                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSfbBjrYKsfP8YrU_A_nGOJYQTyI8mCEDLB-x14-oANwRsC2JA/viewform?embedded=true"
                            width="100%"
                            height="800"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            title="Wedding RSVP Form"
                            className="rsvp-iframe"
                            onLoad={handleIframeLoad}
                            onError={handleIframeError}
                        >
                            Loading…
                        </iframe>
                        <div className="edit-info">
                            <p className="text-sm text-gray-600 mt-4">
                                After submitting your RSVP, you'll receive a confirmation email with a link to edit your response if needed.
                                Please save this email for future reference.
                            </p>
                        </div>
                    </>
                )}
            </div>
        </PageWrapper>
    );
}