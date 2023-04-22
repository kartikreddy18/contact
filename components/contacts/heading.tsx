interface Props {
  title: string;
  subtitle?: string;
}

function Heading({ title, subtitle }: Props) {
  return (
    <div className="p-3">
      <h1 className="font-medium">{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

export default Heading;
