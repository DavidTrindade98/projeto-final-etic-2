import "../../styles/components/logo_small.css";

export default function LogoSmallSVG({ logoSmallStyle, logoSmallClick, fill }) {
    return (
        <svg width="71" height="47" viewBox="0 0 71 47" fill="none" id="logo_small" alt="logo" style={logoSmallStyle} onClick={logoSmallClick} xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_10_403)">
                <path d="M56.61 44.5101C54.98 42.8801 54.16 40.9201 54.16 38.6301C54.16 36.3401 54.98 34.3801 56.61 32.7501C58.24 31.1201 60.17 30.3101 62.4 30.3101C64.63 30.3101 66.56 31.1201 68.19 32.7501C69.82 34.3801 70.63 36.3401 70.63 38.6301C70.63 40.9201 69.82 42.8801 68.19 44.5101C66.56 46.1401 64.63 46.9501 62.4 46.9501C60.17 46.9501 58.24 46.1401 56.61 44.5101Z" fill={fill} />
                <path d="M34.34 2.65C31.1 0.95 27.42 0 23.51 0H23.5C10.53 0 0 10.52 0 23.49C0 26.45 0.54 29.26 1.54 31.86C4.9 40.71 13.47 47 23.5 47H47V23.49C47 14.42 41.86 6.56 34.34 2.65ZM31.69 32.13C29.86 34.04 27.48 35 24.57 35C24.43 35 24.29 35 24.15 34.99C21.42 34.9 19.19 33.95 17.45 32.13C15.62 30.21 14.7 27.68 14.7 24.53C14.7 21.38 15.62 18.86 17.45 16.94C19.28 15.03 21.65 14.07 24.57 14.07C27.49 14.07 29.86 15.03 31.69 16.94C32.73 18.03 33.48 19.33 33.93 20.82C34.26 21.94 34.43 23.18 34.43 24.53C34.43 27.68 33.52 30.21 31.69 32.13Z" fill={fill} />
            </g>
            <defs>
                <clipPath id="clip0_10_403">
                    <rect width="70.64" height="47" fill={fill} />
                </clipPath>
            </defs>
        </svg>
    );
}