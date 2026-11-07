/** Renders a content value, or an elegant placeholder when it is empty. */
export default function Field({ value, placeholder, href, as: Tag = 'span', className = '' }) {
  if (!value) return <Tag className={`ph ${className}`}>{placeholder}</Tag>;
  if (href) {
    return (
      <a className={className} href={href}>
        {value}
      </a>
    );
  }
  return <Tag className={className}>{value}</Tag>;
}
