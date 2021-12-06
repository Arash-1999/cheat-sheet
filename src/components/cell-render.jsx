import React from "react";

const CellRender = ({ title, ordered, nodes }) => {
  const children = nodes.map((item, i) => <li key={i}>{item}</li>);

  return (
    <article className="md:self-start md:flex-1 rounded-xl border-4 border-indigo-600">
      <h4 className="bg-indigo-600 text-gray-200 font-semibold text-2xl px-3 py-2">
        {title}
      </h4>
      {ordered ? (
        <ol className="list-decimal mx-10 py-4 space-y-3">{children}</ol>
      ) : (
        <ul className="list-disc mx-8 py-4 space-y-3">{children}</ul>
      )}
    </article>
  );
};

export default CellRender;
