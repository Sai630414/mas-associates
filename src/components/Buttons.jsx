import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';

/**
 * MAS ASSOCIATES Architectural Button System
 * 
 * Design specifications:
 * - Slightly squared corners (rounded-lg / 6-8px), avoiding generic pills
 * - Navy #092C68 / Corporate Blue #0864C5 base
 * - Accent Red #E51B27 architectural edge / indicator
 * - Consistent 44-48px height (h-11 to h-12)
 * - Cohesive typography, padding, icon sizing, and smooth transitions
 */

const baseStyles = "relative inline-flex items-center justify-center font-heading font-semibold text-sm tracking-wide transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none group";

// Primary Button: Corporate Navy or Blue with Red architectural accent
export function PrimaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'navy', // 'navy' | 'blue'
  showArrow = true,
  disabled = false,
  className = '',
  ...props
}) {
  const bgClass = variant === 'blue'
    ? 'bg-[#0864C5] hover:bg-[#0753a3] text-white focus:ring-[#0864C5]'
    : 'bg-[#092C68] hover:bg-[#061e47] text-white focus:ring-[#092C68]';

  const content = (
    <span className={`${baseStyles} ${bgClass} h-11 sm:h-12 px-6 rounded-lg shadow-sm hover:shadow-md border-b-2 border-r-2 border-[#E51B27] ${className}`}>
      {/* Small subtle red architectural corner notch */}
      <span className="absolute top-0 right-0 w-2 h-2 bg-[#E51B27] clip-corner pointer-events-none opacity-90 group-hover:w-2.5 group-hover:h-2.5 transition-all" />
      <span className="flex items-center gap-2.5">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 text-[#FF5A65] group-hover:text-white group-hover:translate-x-1 transition-all" />
        )}
      </span>
    </span>
  );

  if (to) {
    return <Link to={to} className="inline-block" {...props}>{content}</Link>;
  }
  if (href) {
    return <a href={href} className="inline-block" {...props}>{content}</a>;
  }
  return <button type={type} onClick={onClick} disabled={disabled} {...props}>{content}</button>;
}

// Secondary Button: White/Transparent background, Navy border, fills on hover
export function SecondaryButton({
  children,
  to,
  href,
  onClick,
  type = 'button',
  showArrow = false,
  disabled = false,
  className = '',
  ...props
}) {
  const content = (
    <span className={`${baseStyles} h-11 sm:h-12 px-6 rounded-lg border-2 border-[#092C68] text-[#092C68] bg-white hover:bg-[#092C68] hover:text-white hover:border-[#092C68] focus:ring-[#092C68] shadow-xs ${className}`}>
      <span className="flex items-center gap-2">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        )}
      </span>
    </span>
  );

  if (to) {
    return <Link to={to} className="inline-block" {...props}>{content}</Link>;
  }
  if (href) {
    return <a href={href} className="inline-block" {...props}>{content}</a>;
  }
  return <button type={type} onClick={onClick} disabled={disabled} {...props}>{content}</button>;
}

// WhatsApp Button: Standardized height, Green background, WhatsApp icon
export function WhatsAppButtonUI({
  children = "Enquire on WhatsApp",
  href,
  onClick,
  className = '',
  ...props
}) {
  const content = (
    <span className={`${baseStyles} h-11 sm:h-12 px-5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white focus:ring-emerald-400 shadow-sm hover:shadow-md border-b-2 border-emerald-700 ${className}`}>
      <span className="flex items-center gap-2.5">
        <MessageCircle className="w-4 h-4 fill-white shrink-0" />
        <span>{children}</span>
      </span>
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block" {...props}>
        {content}
      </a>
    );
  }
  return <button type="button" onClick={onClick} {...props}>{content}</button>;
}

// Contact Button: Navy background with Red accent & Phone icon
export function ContactButton({
  children = "Talk to Our Team",
  phone = "+919443064943",
  to,
  className = '',
  ...props
}) {
  const content = (
    <span className={`${baseStyles} h-11 sm:h-12 px-5 rounded-lg bg-[#092C68] hover:bg-[#061e47] text-white focus:ring-[#092C68] border-l-4 border-[#E51B27] shadow-sm hover:shadow-md ${className}`}>
      <span className="flex items-center gap-2.5">
        <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>{children}</span>
      </span>
    </span>
  );

  if (to) {
    return <Link to={to} className="inline-block" {...props}>{content}</Link>;
  }
  return (
    <a href={`tel:${phone}`} className="inline-block" {...props}>
      {content}
    </a>
  );
}

// Text Link Button: Minimal typography with animated underline & arrow
export function TextLinkButton({
  children,
  to,
  href,
  onClick,
  className = '',
  ...props
}) {
  const content = (
    <span className={`inline-flex items-center gap-1.5 font-heading font-semibold text-sm text-[#092C68] hover:text-[#0864C5] transition-colors py-1 group ${className}`}>
      <span className="relative">
        {children}
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#E51B27] transition-all duration-300 group-hover:w-full" />
      </span>
      <ArrowRight className="w-4 h-4 text-[#E51B27] group-hover:translate-x-1 transition-transform" />
    </span>
  );

  if (to) {
    return <Link to={to} className="inline-block" {...props}>{content}</Link>;
  }
  if (href) {
    return <a href={href} className="inline-block" {...props}>{content}</a>;
  }
  return <button type="button" onClick={onClick} {...props}>{content}</button>;
}
