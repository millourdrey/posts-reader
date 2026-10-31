const formatter = new Intl.DateTimeFormat(undefined, {
  day: "numeric",
  month: "long",
  year: "numeric",
});

type FormattedDateProps = {
  value: string | undefined;
  className?: string;
};

const FormattedDate = ({ value, className }: FormattedDateProps) => {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return (
    <time dateTime={value} className={className}>
      {formatter.format(date)}
    </time>
  );
};

export default FormattedDate;
