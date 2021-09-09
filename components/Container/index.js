export default function Container({ children }) {
  return (
    <div>
      {children}
      <style jsx>
        {`
          div {
            margin: 0 auto;
            max-width: 1100px;
          }
        `}
      </style>
    </div>
  );
}
