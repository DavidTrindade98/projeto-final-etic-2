export default function MusicSVG({musicFill}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M43.9227 31.5477C43.9227 35.3444 40.2291 38.4227 35.75 38.4227C31.2709 38.4227 27.5773 35.3444 27.5773 31.625C27.5773 27.8283 31.2709 24.8273 35.75 24.8273C36.7194 24.8273 37.6363 24.9923 38.5009 25.2483V12.7273L16.5 19.25L16.4998 37.1336C16.4227 40.9234 12.8047 44 8.17266 44C3.54062 44 0 40.9234 0 37.125C0 33.3283 3.69359 30.3273 8.17266 30.3273C9.14203 30.3273 10.059 30.4923 10.9227 30.7483V10.8711C10.9227 9.75648 11.7872 8.58258 12.8485 8.24828L40.2712 0.128047C40.5711 0.0568047 41.018 0 41.25 0C42.7677 0 43.9974 1.23234 44 2.74914L43.9227 31.5477Z"
        fill={musicFill}
      />
    </svg>
  );
}
