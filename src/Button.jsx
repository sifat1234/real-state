// eslint-disable-next-line react/prop-types
export default function Button({href, className, buttonText}) {
  return (
    <>
      <a
        href={href}
        className={className}
      >
        {buttonText}
      </a>
    </>
  );
}
