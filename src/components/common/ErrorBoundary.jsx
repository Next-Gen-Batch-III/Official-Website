import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an unhandled error:", error, errorInfo);
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    if (this.props.onReset) {
      this.props.onReset();
    }
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return typeof this.props.fallback === "function"
          ? this.props.fallback({
              error: this.state.error,
              resetErrorBoundary: this.handleReset,
            })
          : this.props.fallback;
      }

      return (
        <div className="min-h-[70vh] flex items-center justify-center px-5 py-16 bg-white font-sans text-brand-primary">
          <div className="max-w-2xl w-full flex flex-col items-center text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase font-cadt text-brand-secondary-orange bg-brand-secondary-orange/10 border border-brand-secondary-orange/30 rounded">
              <span className="w-2 h-2 rounded-full bg-brand-secondary-orange animate-pulse" />
              SYSTEM ERROR // 500
            </div>

            {/* Error Icon Illustration */}
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center text-red-500 border border-red-200 shadow-inner">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mb-3">
              Something went wrong
            </h1>

            <p className="text-neutral-600 max-w-lg mb-8 leading-relaxed text-sm sm:text-base">
              An unexpected error occurred while loading this section. You can try refreshing the page or head back to the homepage.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <button
                type="button"
                onClick={this.handleReload}
                className="px-6 py-2.5 bg-brand-secondary-orange text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-brand-secondary-orange/90 transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Reload Page
              </button>

              <button
                type="button"
                onClick={() => {
                  this.handleReset();
                  window.location.href = "/";
                }}
                className="px-6 py-2.5 bg-brand-primary text-white font-bold text-sm uppercase tracking-wider rounded hover:bg-brand-primary/90 transition-colors shadow-md cursor-pointer flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                Go to Homepage
              </button>
            </div>

            {/* Error Details for Debugging */}
            {this.state.error && (
              <details className="w-full text-left bg-neutral-100 rounded-lg border border-neutral-300 p-4 mt-4">
                <summary className="font-cadt text-xs text-neutral-700 font-semibold cursor-pointer hover:text-brand-primary">
                  View Technical Details
                </summary>
                <div className="mt-3 font-cadt text-xs text-red-600 bg-white p-3 rounded border border-neutral-200 overflow-x-auto whitespace-pre-wrap">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack && (
                    <div className="mt-2 pt-2 border-t border-neutral-200 text-neutral-500">
                      {this.state.errorInfo.componentStack}
                    </div>
                  )}
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
