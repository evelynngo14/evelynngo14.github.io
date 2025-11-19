'use client'

import ReactMarkdown from "react-markdown";

// Reusable styled markdown component
export default function StyledMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      components={{
        code: ({ children, className, ...props }) => {
          // Inline code doesn't have a className, block code does (e.g., "language-js")
          const isInline = !className;

          if (isInline) {
            // Style for inline code: `code`
            return (
              <code
                className="bg-gray-800 text-pink-400 px-1.5 py-0.5 rounded text-sm font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }

          // For block code, return plain code element - styling is on <pre>
          return (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          // Style for code blocks wrapper
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-xs lg:text-md">
            {children}
          </pre>
        ),
        p: ({ children }) => <p className="mb-4">{children}</p>,
        ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
        li: ({ children }) => <li className="ml-4">{children}</li>,
        h1: ({ children }) => <h1 className="text-2xl font-bold mb-4 mt-6">{children}</h1>,
        h2: ({ children }) => <h2 className="text-xl font-bold mb-3 mt-5">{children}</h2>,
        h3: ({ children }) => <h3 className="text-lg font-bold mb-2 mt-4">{children}</h3>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-pink-500 pl-4 italic my-4">
            {children}
          </blockquote>
        ),
        a: ({ children, href }) => (
          <a href={href} className="text-pink-400 hover:text-pink-300 underline">
            {children}
          </a>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
