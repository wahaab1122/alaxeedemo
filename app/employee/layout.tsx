export default function EmployeeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-start mx-4 px-2">
      <div className="">
        {children}
      </div>
    </section>
  );

  // section classes flex flex-col items-start gap-2 py-2 md:py-8
  //dive classes max-w-lg text-start
}
