function IconSuccessAlert({className}: {className: string}) {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_48_1479)">
        <circle cx="17" cy="17" r="17" fill="#407BFF" fill-opacity="0.5" />
      </g>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.2967 11.2765C24.7084 11.6271 24.7691 12.2588 24.4322 12.6874L16.347 22.9726C15.6933 23.8043 14.5258 23.9518 13.6999 23.307L10.5854 20.8758C10.1598 20.5435 10.0735 19.9151 10.3927 19.4721C10.7119 19.0291 11.3157 18.9393 11.7414 19.2715L14.8559 21.7028L22.9411 11.4176C23.278 10.989 23.8849 10.9258 24.2967 11.2765Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_48_1479"
          x="-4"
          y="-4"
          width="42"
          height="42"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_48_1479" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_48_1479" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default IconSuccessAlert;
