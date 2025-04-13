import React, { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">{title}</h1>
        {children}
      </div>
    </main>
  );
};
