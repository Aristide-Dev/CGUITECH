import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Erreur capturée :', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });

        // Ici vous pouvez envoyer l'erreur à votre service de monitoring
        // logErrorToService(error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
                    <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-8">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">
                            Oups ! Quelque chose s'est mal passé
                        </h1>
                        <p className="text-gray-600 mb-6">
                            Nous sommes désolés, une erreur inattendue s'est produite. 
                            Notre équipe technique a été notifiée et travaille à résoudre le problème.
                        </p>
                        <div className="space-y-4">
                            <button
                                onClick={() => window.location.reload()}
                                className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                            >
                                Rafraîchir la page
                            </button>
                            <a
                                href="/"
                                className="block w-full text-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Retour à l'accueil
                            </a>
                        </div>
                        {process.env.NODE_ENV === 'development' && (
                            <div className="mt-8 p-4 bg-gray-100 rounded-lg overflow-auto">
                                <details>
                                    <summary className="text-sm font-medium text-gray-700 cursor-pointer">
                                        Détails techniques
                                    </summary>
                                    <pre className="mt-2 text-xs text-red-600 whitespace-pre-wrap">
                                        {this.state.error?.toString()}
                                    </pre>
                                    <pre className="mt-2 text-xs text-gray-600 whitespace-pre-wrap">
                                        {this.state.errorInfo?.componentStack}
                                    </pre>
                                </details>
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 