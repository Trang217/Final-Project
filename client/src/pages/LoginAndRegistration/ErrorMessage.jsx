export default function ErrorMessage({ isVisible, errorMessage }) {
  return (
    <>
      {isVisible ? (
        <>
          <p className="text-red-500">{errorMessage}</p>
        </>
      ) : null}
    </>
  );
}
