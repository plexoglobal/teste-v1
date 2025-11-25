import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

// --- Types ---
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: ReactNode;
  fullWidth?: boolean;
}

interface CardProps {
  children: ReactNode;
  className?: string;
  highlight?: boolean;
}

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

// --- Components ---

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  fullWidth = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:shadow-primary-500/30 hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-white text-primary-600 hover:bg-gray-50 border border-gray-200 hover:shadow-md",
    outline: "bg-transparent text-primary-600 border-2 border-primary-600 hover:bg-primary-50",
    ghost: "bg-transparent text-gray-600 hover:text-primary-600 hover:bg-primary-50/50"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl font-bold"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card: React.FC<CardProps> = ({ children, className = '', highlight = false }) => {
  return (
    <div className={`
      relative rounded-2xl p-6 transition-all duration-300 
      ${highlight 
        ? 'bg-white border-2 border-primary-500 shadow-xl shadow-primary-500/10 z-10 scale-105' 
        : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1'
      } 
      ${className}
    `}>
      {children}
    </div>
  );
};

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export const FeatureItem: React.FC<{ icon: LucideIcon, title: string, description?: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
    <div className="p-3 rounded-full bg-primary-100 text-primary-600 shrink-0">
      <Icon size={24} />
    </div>
    <div>
      <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
      {description && <p className="text-gray-600 mt-1 leading-relaxed">{description}</p>}
    </div>
  </div>
);

export const Badge: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary-100 text-primary-700 uppercase tracking-wide">
    {children}
  </span>
);
