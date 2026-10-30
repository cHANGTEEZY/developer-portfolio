// Free Overflow Design isometric drawings, yours style, tinted to the site red.
// The pointer animation is a Pro drawing and is not included.
// https://www.overflow.design/license/

import { cn } from "@/lib/utils"

type IsoProps = {
  className?: string
  decorative?: boolean
}

export function IsoCube({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Cube"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M22.27 14.85Q24 13.85 25.73 14.85L35.26 20.35Q36.99 21.35 36.99 23.35L36.99 34.35Q36.99 36.35 35.26 37.35L25.73 42.85Q24 43.85 22.27 42.85L12.74 37.35Q11.01 36.35 11.01 34.35L11.01 23.35Q11.01 21.35 12.74 20.35Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.26 22.35Q36.99 21.35 36.99 23.35L36.99 34.35Q36.99 36.35 35.26 37.35L25.73 42.85Q24 43.85 24 41.85L24 28.85Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.74 22.35Q11.01 21.35 11.01 23.35L11.01 34.35Q11.01 36.35 12.74 37.35L22.27 42.85Q24 43.85 24 41.85L24 28.85Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.27 14.85Q24 13.85 25.73 14.85L35.26 20.35Q36.99 21.35 35.26 22.35L24 28.85L12.74 22.35Q11.01 21.35 12.74 20.35Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M22.27 14.85Q24 13.85 25.73 14.85L35.26 20.35Q36.99 21.35 36.99 23.35L36.99 34.35Q36.99 36.35 35.26 37.35L25.73 42.85Q24 43.85 22.27 42.85L12.74 37.35Q11.01 36.35 11.01 34.35L11.01 23.35Q11.01 21.35 12.74 20.35Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28.85L36.56 21.59"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28.85L11.44 21.59"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28.85L24 43.35"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M22.27 14.85Q24 13.85 25.73 14.85L35.26 20.35Q36.99 21.35 36.99 23.35L36.99 34.35Q36.99 36.35 35.26 37.35L25.73 42.85Q24 43.85 22.27 42.85L12.74 37.35Q11.01 36.35 11.01 34.35L11.01 23.35Q11.01 21.35 12.74 20.35Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.26 22.35Q36.99 21.35 36.99 23.35L36.99 34.35Q36.99 36.35 35.26 37.35L25.73 42.85Q24 43.85 24 41.85L24 28.85Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.74 22.35Q11.01 21.35 11.01 23.35L11.01 34.35Q11.01 36.35 12.74 37.35L22.27 42.85Q24 43.85 24 41.85L24 28.85Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.27 14.85Q24 13.85 25.73 14.85L35.26 20.35Q36.99 21.35 35.26 22.35L24 28.85L12.74 22.35Q11.01 21.35 12.74 20.35Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M22.27 14.85Q24 13.85 25.73 14.85L35.26 20.35Q36.99 21.35 36.99 23.35L36.99 34.35Q36.99 36.35 35.26 37.35L25.73 42.85Q24 43.85 22.27 42.85L12.74 37.35Q11.01 36.35 11.01 34.35L11.01 23.35Q11.01 21.35 12.74 20.35Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28.85L36.56 21.59"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28.85L11.44 21.59"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 28.85L24 43.35"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export function IsoCode({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Code"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M21.22 13.15Q22.95 12.15 24.68 13.15L42.27 23.3Q44 24.3 44 25.72L44 27.14Q44 28.56 42.27 29.56L26.78 38.5Q25.05 39.5 23.32 38.5L5.73 28.34Q4 27.34 4 25.92L4 24.51Q4 23.09 5.73 22.09Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42.27 25.3Q44 24.3 44 25.72L44 27.14Q44 28.56 42.27 29.56L26.78 38.5Q25.05 39.5 25.05 38.08L25.05 35.24Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.73 24.09Q4 23.09 4 24.51L4 25.92Q4 27.34 5.73 28.34L23.32 38.5Q25.05 39.5 25.05 38.08L25.05 35.24Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.22 13.15Q22.95 12.15 24.68 13.15L42.27 23.3Q44 24.3 42.27 25.3L25.05 35.24L5.73 24.09Q4 23.09 5.73 22.09Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M17.97 19.93L13.95 23.7"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.95 23.7L17.97 27.47"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.99 28.98L26.01 18.42"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.03 19.93L34.05 23.7"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.05 23.7L30.03 27.47"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.22 13.15Q22.95 12.15 24.68 13.15L42.27 23.3Q44 24.3 44 25.72L44 27.14Q44 28.56 42.27 29.56L26.78 38.5Q25.05 39.5 23.32 38.5L5.73 28.34Q4 27.34 4 25.92L4 24.51Q4 23.09 5.73 22.09Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.05 35.24L43.64 24.51"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.05 35.24L4.36 23.3"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.05 35.24L25.05 39"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M21.22 13.15Q22.95 12.15 24.68 13.15L42.27 23.3Q44 24.3 44 25.72L44 27.14Q44 28.56 42.27 29.56L26.78 38.5Q25.05 39.5 23.32 38.5L5.73 28.34Q4 27.34 4 25.92L4 24.51Q4 23.09 5.73 22.09Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42.27 25.3Q44 24.3 44 25.72L44 27.14Q44 28.56 42.27 29.56L26.78 38.5Q25.05 39.5 25.05 38.08L25.05 35.24Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.73 24.09Q4 23.09 4 24.51L4 25.92Q4 27.34 5.73 28.34L23.32 38.5Q25.05 39.5 25.05 38.08L25.05 35.24Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.22 13.15Q22.95 12.15 24.68 13.15L42.27 23.3Q44 24.3 42.27 25.3L25.05 35.24L5.73 24.09Q4 23.09 5.73 22.09Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M17.97 19.93L13.95 23.7"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.95 23.7L17.97 27.47"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.99 28.98L26.01 18.42"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.03 19.93L34.05 23.7"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.05 23.7L30.03 27.47"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.22 13.15Q22.95 12.15 24.68 13.15L42.27 23.3Q44 24.3 44 25.72L44 27.14Q44 28.56 42.27 29.56L26.78 38.5Q25.05 39.5 23.32 38.5L5.73 28.34Q4 27.34 4 25.92L4 24.51Q4 23.09 5.73 22.09Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.05 35.24L43.64 24.51"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.05 35.24L4.36 23.3"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.05 35.24L25.05 39"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export function IsoChat({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Chat"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M38.86 26.16Q38.86 24.16 38.8 23.62L38.74 23.08Q38.68 22.53 38.51 21.96L38.34 21.39Q38.17 20.82 37.9 20.25L37.63 19.69Q37.36 19.13 37 18.61L36.65 18.09Q36.3 17.58 35.89 17.14L35.48 16.71Q35.07 16.27 34.63 15.95L34.18 15.63Q33.74 15.31 32.01 14.31L19.12 6.87Q17.39 5.87 16.94 5.68L16.5 5.49Q16.06 5.3 15.65 5.26L15.24 5.22Q14.83 5.18 14.48 5.29L14.12 5.4Q13.77 5.51 12.61 6.18L11.45 6.85Q10.3 7.51 10.02 7.77L9.75 8.02Q9.48 8.27 9.31 8.64L9.14 9.02Q8.97 9.4 8.91 9.87L8.86 10.35Q8.8 10.82 8.8 12.4L8.8 13.97Q8.8 15.55 8.86 16.09L8.91 16.63Q8.97 17.17 9.14 17.75L9.31 18.32Q9.48 18.89 9.75 19.46L10.02 20.02Q10.3 20.58 10.65 21.1L11 21.62Q11.35 22.13 11.76 22.57L12.18 23Q12.59 23.43 13.03 23.76L13.47 24.08Q13.91 24.4 15.64 25.4L25.98 31.37Q27.71 32.37 29 33.9L34.09 39.98Q35.38 41.52 36.54 40.85L37.7 40.18Q38.86 39.51 38.86 37.51Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.54 40.85Q35.38 41.52 35.38 39.52L35.38 28.17Q35.38 26.17 35.32 25.63L35.26 25.08Q35.2 24.54 35.03 23.97L34.86 23.4Q34.69 22.82 34.42 22.26L34.15 21.7Q33.88 21.13 33.53 20.62L33.18 20.1Q32.82 19.58 32.41 19.15L32 18.72Q31.59 18.28 31.15 17.96L30.71 17.64Q30.27 17.32 28.54 16.32L15.64 8.87Q13.91 7.87 13.47 7.68L13.03 7.5Q12.59 7.31 12.18 7.27L11.76 7.23Q11.35 7.19 11 7.3L10.65 7.41Q10.3 7.51 11.45 6.85L12.61 6.18Q13.77 5.51 14.12 5.4L14.48 5.29Q14.83 5.18 15.24 5.22L15.65 5.26Q16.06 5.3 16.5 5.49L16.94 5.68Q17.39 5.87 19.12 6.87L32.01 14.31Q33.74 15.31 34.18 15.63L34.63 15.95Q35.07 16.27 35.48 16.71L35.89 17.14Q36.3 17.58 36.65 18.09L37 18.61Q37.36 19.13 37.63 19.69L37.9 20.25Q38.17 20.82 38.34 21.39L38.51 21.96Q38.68 22.53 38.74 23.08L38.8 23.62Q38.86 24.16 38.86 26.16L38.86 37.51Q38.86 39.51 37.7 40.18Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.38 28.17Q35.38 26.17 35.32 25.63L35.26 25.08Q35.2 24.54 35.03 23.97L34.86 23.4Q34.69 22.82 34.42 22.26L34.15 21.7Q33.88 21.13 33.53 20.62L33.18 20.1Q32.82 19.58 32.41 19.15L32 18.72Q31.59 18.28 31.15 17.96L30.71 17.64Q30.27 17.32 28.54 16.32L15.64 8.87Q13.91 7.87 13.47 7.68L13.03 7.5Q12.59 7.31 12.18 7.27L11.76 7.23Q11.35 7.19 11 7.3L10.65 7.41Q10.3 7.51 10.02 7.77L9.75 8.02Q9.48 8.27 9.31 8.64L9.14 9.02Q8.97 9.4 8.91 9.87L8.86 10.35Q8.8 10.82 8.8 12.4L8.8 13.97Q8.8 15.55 8.86 16.09L8.91 16.63Q8.97 17.17 9.14 17.75L9.31 18.32Q9.48 18.89 9.75 19.46L10.02 20.02Q10.3 20.58 10.65 21.1L11 21.62Q11.35 22.13 11.76 22.57L12.18 23Q12.59 23.43 13.03 23.76L13.47 24.08Q13.91 24.4 15.64 25.4L25.98 31.37Q27.71 32.37 29 33.9L34.09 39.98Q35.38 41.52 35.38 39.52Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M13.91 13.66L30.27 23.1"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.91 18.61L24.13 24.52"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38.86 26.16Q38.86 24.16 38.8 23.62L38.74 23.08Q38.68 22.53 38.51 21.96L38.34 21.39Q38.17 20.82 37.9 20.25L37.63 19.69Q37.36 19.13 37 18.61L36.65 18.09Q36.3 17.58 35.89 17.14L35.48 16.71Q35.07 16.27 34.63 15.95L34.18 15.63Q33.74 15.31 32.01 14.31L19.12 6.87Q17.39 5.87 16.94 5.68L16.5 5.49Q16.06 5.3 15.65 5.26L15.24 5.22Q14.83 5.18 14.48 5.29L14.12 5.4Q13.77 5.51 12.61 6.18L11.45 6.85Q10.3 7.51 10.02 7.77L9.75 8.02Q9.48 8.27 9.31 8.64L9.14 9.02Q8.97 9.4 8.91 9.87L8.86 10.35Q8.8 10.82 8.8 12.4L8.8 13.97Q8.8 15.55 8.86 16.09L8.91 16.63Q8.97 17.17 9.14 17.75L9.31 18.32Q9.48 18.89 9.75 19.46L10.02 20.02Q10.3 20.58 10.65 21.1L11 21.62Q11.35 22.13 11.76 22.57L12.18 23Q12.59 23.43 13.03 23.76L13.47 24.08Q13.91 24.4 15.64 25.4L25.98 31.37Q27.71 32.37 29 33.9L34.09 39.98Q35.38 41.52 36.54 40.85L37.7 40.18Q38.86 39.51 38.86 37.51Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.38 40.98L35.38 28.17Q35.38 26.17 35.32 25.63L35.26 25.08Q35.2 24.54 35.03 23.97L34.86 23.4Q34.69 22.82 34.42 22.26L34.15 21.7Q33.88 21.13 33.53 20.62L33.18 20.1Q32.82 19.58 32.41 19.15L32 18.72Q31.59 18.28 31.15 17.96L30.71 17.64Q30.27 17.32 28.54 16.32L15.64 8.87Q13.91 7.87 13.47 7.68L13.03 7.5Q12.59 7.31 12.18 7.27L11.76 7.23Q11.35 7.19 11.04 7.28L10.41 7.48"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M38.86 26.16Q38.86 24.16 38.8 23.62L38.74 23.08Q38.68 22.53 38.51 21.96L38.34 21.39Q38.17 20.82 37.9 20.25L37.63 19.69Q37.36 19.13 37 18.61L36.65 18.09Q36.3 17.58 35.89 17.14L35.48 16.71Q35.07 16.27 34.63 15.95L34.18 15.63Q33.74 15.31 32.01 14.31L19.12 6.87Q17.39 5.87 16.94 5.68L16.5 5.49Q16.06 5.3 15.65 5.26L15.24 5.22Q14.83 5.18 14.48 5.29L14.12 5.4Q13.77 5.51 12.61 6.18L11.45 6.85Q10.3 7.51 10.02 7.77L9.75 8.02Q9.48 8.27 9.31 8.64L9.14 9.02Q8.97 9.4 8.91 9.87L8.86 10.35Q8.8 10.82 8.8 12.4L8.8 13.97Q8.8 15.55 8.86 16.09L8.91 16.63Q8.97 17.17 9.14 17.75L9.31 18.32Q9.48 18.89 9.75 19.46L10.02 20.02Q10.3 20.58 10.65 21.1L11 21.62Q11.35 22.13 11.76 22.57L12.18 23Q12.59 23.43 13.03 23.76L13.47 24.08Q13.91 24.4 15.64 25.4L25.98 31.37Q27.71 32.37 29 33.9L34.09 39.98Q35.38 41.52 36.54 40.85L37.7 40.18Q38.86 39.51 38.86 37.51Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.54 40.85Q35.38 41.52 35.38 39.52L35.38 28.17Q35.38 26.17 35.32 25.63L35.26 25.08Q35.2 24.54 35.03 23.97L34.86 23.4Q34.69 22.82 34.42 22.26L34.15 21.7Q33.88 21.13 33.53 20.62L33.18 20.1Q32.82 19.58 32.41 19.15L32 18.72Q31.59 18.28 31.15 17.96L30.71 17.64Q30.27 17.32 28.54 16.32L15.64 8.87Q13.91 7.87 13.47 7.68L13.03 7.5Q12.59 7.31 12.18 7.27L11.76 7.23Q11.35 7.19 11 7.3L10.65 7.41Q10.3 7.51 11.45 6.85L12.61 6.18Q13.77 5.51 14.12 5.4L14.48 5.29Q14.83 5.18 15.24 5.22L15.65 5.26Q16.06 5.3 16.5 5.49L16.94 5.68Q17.39 5.87 19.12 6.87L32.01 14.31Q33.74 15.31 34.18 15.63L34.63 15.95Q35.07 16.27 35.48 16.71L35.89 17.14Q36.3 17.58 36.65 18.09L37 18.61Q37.36 19.13 37.63 19.69L37.9 20.25Q38.17 20.82 38.34 21.39L38.51 21.96Q38.68 22.53 38.74 23.08L38.8 23.62Q38.86 24.16 38.86 26.16L38.86 37.51Q38.86 39.51 37.7 40.18Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M35.38 28.17Q35.38 26.17 35.32 25.63L35.26 25.08Q35.2 24.54 35.03 23.97L34.86 23.4Q34.69 22.82 34.42 22.26L34.15 21.7Q33.88 21.13 33.53 20.62L33.18 20.1Q32.82 19.58 32.41 19.15L32 18.72Q31.59 18.28 31.15 17.96L30.71 17.64Q30.27 17.32 28.54 16.32L15.64 8.87Q13.91 7.87 13.47 7.68L13.03 7.5Q12.59 7.31 12.18 7.27L11.76 7.23Q11.35 7.19 11 7.3L10.65 7.41Q10.3 7.51 10.02 7.77L9.75 8.02Q9.48 8.27 9.31 8.64L9.14 9.02Q8.97 9.4 8.91 9.87L8.86 10.35Q8.8 10.82 8.8 12.4L8.8 13.97Q8.8 15.55 8.86 16.09L8.91 16.63Q8.97 17.17 9.14 17.75L9.31 18.32Q9.48 18.89 9.75 19.46L10.02 20.02Q10.3 20.58 10.65 21.1L11 21.62Q11.35 22.13 11.76 22.57L12.18 23Q12.59 23.43 13.03 23.76L13.47 24.08Q13.91 24.4 15.64 25.4L25.98 31.37Q27.71 32.37 29 33.9L34.09 39.98Q35.38 41.52 35.38 39.52Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M13.91 13.66L30.27 23.1"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.91 18.61L24.13 24.52"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M38.86 26.16Q38.86 24.16 38.8 23.62L38.74 23.08Q38.68 22.53 38.51 21.96L38.34 21.39Q38.17 20.82 37.9 20.25L37.63 19.69Q37.36 19.13 37 18.61L36.65 18.09Q36.3 17.58 35.89 17.14L35.48 16.71Q35.07 16.27 34.63 15.95L34.18 15.63Q33.74 15.31 32.01 14.31L19.12 6.87Q17.39 5.87 16.94 5.68L16.5 5.49Q16.06 5.3 15.65 5.26L15.24 5.22Q14.83 5.18 14.48 5.29L14.12 5.4Q13.77 5.51 12.61 6.18L11.45 6.85Q10.3 7.51 10.02 7.77L9.75 8.02Q9.48 8.27 9.31 8.64L9.14 9.02Q8.97 9.4 8.91 9.87L8.86 10.35Q8.8 10.82 8.8 12.4L8.8 13.97Q8.8 15.55 8.86 16.09L8.91 16.63Q8.97 17.17 9.14 17.75L9.31 18.32Q9.48 18.89 9.75 19.46L10.02 20.02Q10.3 20.58 10.65 21.1L11 21.62Q11.35 22.13 11.76 22.57L12.18 23Q12.59 23.43 13.03 23.76L13.47 24.08Q13.91 24.4 15.64 25.4L25.98 31.37Q27.71 32.37 29 33.9L34.09 39.98Q35.38 41.52 36.54 40.85L37.7 40.18Q38.86 39.51 38.86 37.51Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.38 40.98L35.38 28.17Q35.38 26.17 35.32 25.63L35.26 25.08Q35.2 24.54 35.03 23.97L34.86 23.4Q34.69 22.82 34.42 22.26L34.15 21.7Q33.88 21.13 33.53 20.62L33.18 20.1Q32.82 19.58 32.41 19.15L32 18.72Q31.59 18.28 31.15 17.96L30.71 17.64Q30.27 17.32 28.54 16.32L15.64 8.87Q13.91 7.87 13.47 7.68L13.03 7.5Q12.59 7.31 12.18 7.27L11.76 7.23Q11.35 7.19 11.04 7.28L10.41 7.48"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export function IsoBrowser({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Browser"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M10.81 10.52Q11.89 9.9 13.62 10.9L37.6 24.75Q39.33 25.75 39.33 27.75L39.33 40.14Q39.33 42.14 38.26 42.76L37.19 43.38Q36.11 44 34.38 43L10.4 29.15Q8.67 28.15 8.67 26.15L8.67 13.76Q8.67 11.76 9.74 11.14Z"
              fill="#fdf6f4"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.26 26.37Q39.33 25.75 39.33 27.75L39.33 40.14Q39.33 42.14 38.26 42.76L37.19 43.38Q36.11 44 36.11 42L36.11 27.61Z"
              fill="#e9e2e4"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4 12.76Q8.67 11.76 8.67 13.76L8.67 26.15Q8.67 28.15 10.4 29.15L34.38 43Q36.11 44 36.11 42L36.11 27.61Z"
              fill="#d2ccce"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.81 10.52Q11.89 9.9 13.62 10.9L37.6 24.75Q39.33 25.75 38.26 26.37L36.11 27.61L10.4 12.76Q8.67 11.76 9.74 11.14Z"
              fill="#fdf6f4"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.13 17.99L28.54 28.04"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.13 22.36L23.81 29.68"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.81 10.52Q11.89 9.9 13.62 10.9L37.6 24.75Q39.33 25.75 39.33 27.75L39.33 40.14Q39.33 42.14 38.26 42.76L37.19 43.38Q36.11 44 34.38 43L10.4 29.15Q8.67 28.15 8.67 26.15L8.67 13.76Q8.67 11.76 9.74 11.14Z"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.11 27.61L38.9 26"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.11 27.61L9 11.95"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.11 27.61L36.11 43.61"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M10.81 4.62Q11.89 4 13.62 5L37.6 18.85Q39.33 19.85 39.33 21.81L39.33 23.78Q39.33 25.75 38.26 26.37L37.19 26.99Q36.11 27.61 34.38 26.61L10.4 12.76Q8.67 11.76 8.67 9.79L8.67 7.83Q8.67 5.86 9.74 5.24Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.26 20.47Q39.33 19.85 39.33 21.81L39.33 23.78Q39.33 25.75 38.26 26.37L37.19 26.99Q36.11 27.61 36.11 25.64L36.11 21.7Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4 6.86Q8.67 5.86 8.67 7.83L8.67 9.79Q8.67 11.76 10.4 12.76L34.38 26.61Q36.11 27.61 36.11 25.64L36.11 21.7Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.81 4.62Q11.89 4 13.62 5L37.6 18.85Q39.33 19.85 38.26 20.47L36.11 21.7L10.4 6.86Q8.67 5.86 9.74 5.24Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M11.51 10.45L12.64 11.1"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.81 4.62Q11.89 4 13.62 5L37.6 18.85Q39.33 19.85 39.33 21.81L39.33 23.78Q39.33 25.75 38.26 26.37L37.19 26.99Q36.11 27.61 34.38 26.61L10.4 12.76Q8.67 11.76 8.67 9.79L8.67 7.83Q8.67 5.86 9.74 5.24Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.11 21.7L38.9 20.09"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.11 21.7L9 6.05"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.11 21.7L36.11 27.22"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M10.81 10.52Q11.89 9.9 13.62 10.9L37.6 24.75Q39.33 25.75 39.33 27.75L39.33 40.14Q39.33 42.14 38.26 42.76L37.19 43.38Q36.11 44 34.38 43L10.4 29.15Q8.67 28.15 8.67 26.15L8.67 13.76Q8.67 11.76 9.74 11.14Z"
              fill="#1c1012"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.26 26.37Q39.33 25.75 39.33 27.75L39.33 40.14Q39.33 42.14 38.26 42.76L37.19 43.38Q36.11 44 36.11 42L36.11 27.61Z"
              fill="#190e10"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4 12.76Q8.67 11.76 8.67 13.76L8.67 26.15Q8.67 28.15 10.4 29.15L34.38 43Q36.11 44 36.11 42L36.11 27.61Z"
              fill="#150b0d"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.81 10.52Q11.89 9.9 13.62 10.9L37.6 24.75Q39.33 25.75 38.26 26.37L36.11 27.61L10.4 12.76Q8.67 11.76 9.74 11.14Z"
              fill="#1c1012"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.13 17.99L28.54 28.04"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.13 22.36L23.81 29.68"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.81 10.52Q11.89 9.9 13.62 10.9L37.6 24.75Q39.33 25.75 39.33 27.75L39.33 40.14Q39.33 42.14 38.26 42.76L37.19 43.38Q36.11 44 34.38 43L10.4 29.15Q8.67 28.15 8.67 26.15L8.67 13.76Q8.67 11.76 9.74 11.14Z"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.11 27.61L38.9 26"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.11 27.61L9 11.95"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.11 27.61L36.11 43.61"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M10.81 4.62Q11.89 4 13.62 5L37.6 18.85Q39.33 19.85 39.33 21.81L39.33 23.78Q39.33 25.75 38.26 26.37L37.19 26.99Q36.11 27.61 34.38 26.61L10.4 12.76Q8.67 11.76 8.67 9.79L8.67 7.83Q8.67 5.86 9.74 5.24Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.26 20.47Q39.33 19.85 39.33 21.81L39.33 23.78Q39.33 25.75 38.26 26.37L37.19 26.99Q36.11 27.61 36.11 25.64L36.11 21.7Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.4 6.86Q8.67 5.86 8.67 7.83L8.67 9.79Q8.67 11.76 10.4 12.76L34.38 26.61Q36.11 27.61 36.11 25.64L36.11 21.7Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.81 4.62Q11.89 4 13.62 5L37.6 18.85Q39.33 19.85 38.26 20.47L36.11 21.7L10.4 6.86Q8.67 5.86 9.74 5.24Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M11.51 10.45L12.64 11.1"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.81 4.62Q11.89 4 13.62 5L37.6 18.85Q39.33 19.85 39.33 21.81L39.33 23.78Q39.33 25.75 38.26 26.37L37.19 26.99Q36.11 27.61 34.38 26.61L10.4 12.76Q8.67 11.76 8.67 9.79L8.67 7.83Q8.67 5.86 9.74 5.24Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.11 21.7L38.9 20.09"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.11 21.7L9 6.05"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36.11 21.7L36.11 27.22"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export function IsoDeploy({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Deploy"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M22.27 32.88Q24 31.88 25.73 32.88L32.77 36.94Q34.5 37.94 32.77 38.94L25.73 43Q24 44 22.27 43L15.23 38.94Q13.5 37.94 15.23 36.94Z"
              fill="none"
              stroke="#9f9d9d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 29.86L24 43.5"
              fill="none"
              stroke="#9f9d9d"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M22.27 6.62Q24 5.62 25.73 6.62L32.77 10.68Q34.5 11.68 34.5 13.68L34.5 21.8Q34.5 23.8 32.77 24.8L25.73 28.86Q24 29.86 22.27 28.86L15.23 24.8Q13.5 23.8 13.5 21.8L13.5 13.68Q13.5 11.68 15.23 10.68Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.77 12.68Q34.5 11.68 34.5 13.68L34.5 21.8Q34.5 23.8 32.77 24.8L25.73 28.86Q24 29.86 24 27.86L24 17.74Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.23 12.68Q13.5 11.68 13.5 13.68L13.5 21.8Q13.5 23.8 15.23 24.8L22.27 28.86Q24 29.86 24 27.86L24 17.74Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.27 6.62Q24 5.62 25.73 6.62L32.77 10.68Q34.5 11.68 32.77 12.68L24 17.74L15.23 12.68Q13.5 11.68 15.23 10.68Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M22.27 6.62Q24 5.62 25.73 6.62L32.77 10.68Q34.5 11.68 34.5 13.68L34.5 21.8Q34.5 23.8 32.77 24.8L25.73 28.86Q24 29.86 22.27 28.86L15.23 24.8Q13.5 23.8 13.5 21.8L13.5 13.68Q13.5 11.68 15.23 10.68Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.74L34.06 11.93"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.74L13.94 11.93"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.74L24 29.36"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M22.27 32.88Q24 31.88 25.73 32.88L32.77 36.94Q34.5 37.94 32.77 38.94L25.73 43Q24 44 22.27 43L15.23 38.94Q13.5 37.94 15.23 36.94Z"
              fill="none"
              stroke="#fdfafb"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 29.86L24 43.5"
              fill="none"
              stroke="#fdfafb"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M22.27 6.62Q24 5.62 25.73 6.62L32.77 10.68Q34.5 11.68 34.5 13.68L34.5 21.8Q34.5 23.8 32.77 24.8L25.73 28.86Q24 29.86 22.27 28.86L15.23 24.8Q13.5 23.8 13.5 21.8L13.5 13.68Q13.5 11.68 15.23 10.68Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.77 12.68Q34.5 11.68 34.5 13.68L34.5 21.8Q34.5 23.8 32.77 24.8L25.73 28.86Q24 29.86 24 27.86L24 17.74Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.23 12.68Q13.5 11.68 13.5 13.68L13.5 21.8Q13.5 23.8 15.23 24.8L22.27 28.86Q24 29.86 24 27.86L24 17.74Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M22.27 6.62Q24 5.62 25.73 6.62L32.77 10.68Q34.5 11.68 32.77 12.68L24 17.74L15.23 12.68Q13.5 11.68 15.23 10.68Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M22.27 6.62Q24 5.62 25.73 6.62L32.77 10.68Q34.5 11.68 34.5 13.68L34.5 21.8Q34.5 23.8 32.77 24.8L25.73 28.86Q24 29.86 22.27 28.86L15.23 24.8Q13.5 23.8 13.5 21.8L13.5 13.68Q13.5 11.68 15.23 10.68Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.74L34.06 11.93"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.74L13.94 11.93"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 17.74L24 29.36"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export function IsoPhone({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Phone"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M16.62 6.28Q17.75 5.63 19.48 6.63L28.96 12.1Q30.7 13.1 30.7 15.1L30.7 39.86Q30.7 41.86 29.57 42.52L28.44 43.17Q27.31 43.82 25.58 42.82L16.09 37.34Q14.36 36.34 14.36 34.34L14.36 9.58Q14.36 7.58 15.49 6.93Z"
              fill="#fdf6f4"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.57 13.76Q30.7 13.1 30.7 15.1L30.7 39.86Q30.7 41.86 29.57 42.52L28.44 43.17Q27.31 43.82 27.31 41.82L27.31 15.06Z"
              fill="#e9e2e4"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.09 8.58Q14.36 7.58 14.36 9.58L14.36 34.34Q14.36 36.34 16.09 37.34L25.58 42.82Q27.31 43.82 27.31 41.82L27.31 15.06Z"
              fill="#d2ccce"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.62 6.28Q17.75 5.63 19.48 6.63L28.96 12.1Q30.7 13.1 29.57 13.76L27.31 15.06L16.09 8.58Q14.36 7.58 15.49 6.93Z"
              fill="#fdf6f4"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.62 6.28Q17.75 5.63 19.48 6.63L28.96 12.1Q30.7 13.1 30.7 15.1L30.7 39.86Q30.7 41.86 29.57 42.52L28.44 43.17Q27.31 43.82 25.58 42.82L16.09 37.34Q14.36 36.34 14.36 34.34L14.36 9.58Q14.36 7.58 15.49 6.93Z"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.31 15.06L30.26 13.35"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.31 15.06L14.7 7.78"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.31 15.06L27.31 43.42"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.34 14.14L22.33 15.87"
              fill="none"
              stroke="#16161a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M21.36 36.36Q22.63 37.09 22.79 37.15L22.96 37.22Q23.12 37.28 23.27 37.28L23.42 37.28Q23.56 37.28 23.68 37.21L23.8 37.14Q23.92 37.08 23.95 37.06L23.98 37.04Q24.02 37.02 24.09 36.89L24.17 36.76Q24.24 36.64 24.27 36.46L24.29 36.29Q24.32 36.11 24.32 34.11L24.32 24.54Q24.32 22.54 24.29 22.33L24.27 22.13Q24.24 21.92 24.17 21.71L24.09 21.49Q24.02 21.28 23.9 21.08L23.78 20.87Q23.66 20.67 23.52 20.5L23.37 20.32Q23.22 20.15 23.05 20.03L22.89 19.9Q22.73 19.78 21.46 19.05L20.2 18.32Q18.94 17.59 18.78 17.53L18.61 17.46Q18.45 17.4 18.3 17.4L18.15 17.4Q18 17.4 17.97 17.42L17.94 17.44Q17.9 17.46 17.79 17.53L17.67 17.6Q17.55 17.66 17.48 17.79L17.4 17.92Q17.33 18.05 17.3 18.22L17.27 18.39Q17.25 18.57 17.25 20.57L17.25 30.14Q17.25 32.14 17.27 32.35L17.3 32.55Q17.33 32.76 17.4 32.97L17.48 33.19Q17.55 33.4 17.67 33.6L17.79 33.81Q17.9 34.01 18.05 34.18L18.2 34.36Q18.35 34.53 18.51 34.65L18.68 34.78Q18.84 34.9 20.1 35.63Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.95 37.06Q23.92 37.08 23.99 36.95L24.07 36.82Q24.14 36.69 24.17 36.52L24.19 36.34Q24.22 36.17 24.22 34.17L24.22 24.6Q24.22 22.6 24.19 22.39L24.17 22.19Q24.14 21.98 24.07 21.77L23.99 21.55Q23.92 21.34 23.8 21.13L23.68 20.93Q23.56 20.73 23.42 20.55L23.27 20.38Q23.12 20.21 22.96 20.08L22.79 19.96Q22.63 19.83 21.36 19.11L20.1 18.38Q18.84 17.65 18.68 17.58L18.51 17.52Q18.35 17.45 18.2 17.46L18.05 17.46Q17.9 17.46 17.94 17.44L17.97 17.42Q18 17.4 18.15 17.4L18.3 17.4Q18.45 17.4 18.61 17.46L18.78 17.53Q18.94 17.59 20.2 18.32L21.46 19.05Q22.73 19.78 22.89 19.9L23.05 20.03Q23.22 20.15 23.37 20.32L23.52 20.5Q23.66 20.67 23.78 20.87L23.9 21.08Q24.02 21.28 24.09 21.49L24.17 21.71Q24.24 21.92 24.27 22.13L24.29 22.33Q24.32 22.54 24.32 24.54L24.32 34.11Q24.32 36.11 24.29 36.29L24.27 36.46Q24.24 36.64 24.17 36.76L24.09 36.89Q24.02 37.02 23.98 37.04Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.36 36.36Q22.63 37.09 22.79 37.15L22.96 37.22Q23.12 37.28 23.27 37.28L23.42 37.28Q23.56 37.28 23.68 37.21L23.8 37.14Q23.92 37.08 23.99 36.95L24.07 36.82Q24.14 36.69 24.17 36.52L24.19 36.34Q24.22 36.17 24.22 34.17L24.22 24.6Q24.22 22.6 24.19 22.39L24.17 22.19Q24.14 21.98 24.07 21.77L23.99 21.55Q23.92 21.34 23.8 21.13L23.68 20.93Q23.56 20.73 23.42 20.55L23.27 20.38Q23.12 20.21 22.96 20.08L22.79 19.96Q22.63 19.83 21.36 19.11L20.1 18.38Q18.84 17.65 18.68 17.58L18.51 17.52Q18.35 17.45 18.2 17.46L18.05 17.46Q17.9 17.46 17.79 17.53L17.67 17.6Q17.55 17.66 17.48 17.79L17.4 17.92Q17.33 18.05 17.3 18.22L17.27 18.39Q17.25 18.57 17.25 20.57L17.25 30.14Q17.25 32.14 17.27 32.35L17.3 32.55Q17.33 32.76 17.4 32.97L17.48 33.19Q17.55 33.4 17.67 33.6L17.79 33.81Q17.9 34.01 18.05 34.18L18.2 34.36Q18.35 34.53 18.51 34.65L18.68 34.78Q18.84 34.9 20.1 35.63Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M21.36 36.36Q22.63 37.09 22.79 37.15L22.96 37.22Q23.12 37.28 23.27 37.28L23.42 37.28Q23.56 37.28 23.68 37.21L23.8 37.14Q23.92 37.08 23.95 37.06L23.98 37.04Q24.02 37.02 24.09 36.89L24.17 36.76Q24.24 36.64 24.27 36.46L24.29 36.29Q24.32 36.11 24.32 34.11L24.32 24.54Q24.32 22.54 24.29 22.33L24.27 22.13Q24.24 21.92 24.17 21.71L24.09 21.49Q24.02 21.28 23.9 21.08L23.78 20.87Q23.66 20.67 23.52 20.5L23.37 20.32Q23.22 20.15 23.05 20.03L22.89 19.9Q22.73 19.78 21.46 19.05L20.2 18.32Q18.94 17.59 18.78 17.53L18.61 17.46Q18.45 17.4 18.3 17.4L18.15 17.4Q18 17.4 17.97 17.42L17.94 17.44Q17.9 17.46 17.79 17.53L17.67 17.6Q17.55 17.66 17.48 17.79L17.4 17.92Q17.33 18.05 17.3 18.22L17.27 18.39Q17.25 18.57 17.25 20.57L17.25 30.14Q17.25 32.14 17.27 32.35L17.3 32.55Q17.33 32.76 17.4 32.97L17.48 33.19Q17.55 33.4 17.67 33.6L17.79 33.81Q17.9 34.01 18.05 34.18L18.2 34.36Q18.35 34.53 18.51 34.65L18.68 34.78Q18.84 34.9 20.1 35.63Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.92 37.08L24.07 36.82Q24.14 36.69 24.17 36.52L24.19 36.34Q24.22 36.17 24.22 34.17L24.22 24.6Q24.22 22.6 24.19 22.39L24.17 22.19Q24.14 21.98 24.07 21.77L23.99 21.55Q23.92 21.34 23.8 21.13L23.68 20.93Q23.56 20.73 23.42 20.55L23.27 20.38Q23.12 20.21 22.96 20.08L22.79 19.96Q22.63 19.83 21.36 19.11L20.1 18.38Q18.84 17.65 18.68 17.58L18.51 17.52Q18.35 17.45 18.2 17.46L17.9 17.46"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M16.62 6.28Q17.75 5.63 19.48 6.63L28.96 12.1Q30.7 13.1 30.7 15.1L30.7 39.86Q30.7 41.86 29.57 42.52L28.44 43.17Q27.31 43.82 25.58 42.82L16.09 37.34Q14.36 36.34 14.36 34.34L14.36 9.58Q14.36 7.58 15.49 6.93Z"
              fill="#1c1012"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M29.57 13.76Q30.7 13.1 30.7 15.1L30.7 39.86Q30.7 41.86 29.57 42.52L28.44 43.17Q27.31 43.82 27.31 41.82L27.31 15.06Z"
              fill="#190e10"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.09 8.58Q14.36 7.58 14.36 9.58L14.36 34.34Q14.36 36.34 16.09 37.34L25.58 42.82Q27.31 43.82 27.31 41.82L27.31 15.06Z"
              fill="#150b0d"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.62 6.28Q17.75 5.63 19.48 6.63L28.96 12.1Q30.7 13.1 29.57 13.76L27.31 15.06L16.09 8.58Q14.36 7.58 15.49 6.93Z"
              fill="#1c1012"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.62 6.28Q17.75 5.63 19.48 6.63L28.96 12.1Q30.7 13.1 30.7 15.1L30.7 39.86Q30.7 41.86 29.57 42.52L28.44 43.17Q27.31 43.82 25.58 42.82L16.09 37.34Q14.36 36.34 14.36 34.34L14.36 9.58Q14.36 7.58 15.49 6.93Z"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.31 15.06L30.26 13.35"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.31 15.06L14.7 7.78"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.31 15.06L27.31 43.42"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.34 14.14L22.33 15.87"
              fill="none"
              stroke="#f7f4ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M21.36 36.36Q22.63 37.09 22.79 37.15L22.96 37.22Q23.12 37.28 23.27 37.28L23.42 37.28Q23.56 37.28 23.68 37.21L23.8 37.14Q23.92 37.08 23.95 37.06L23.98 37.04Q24.02 37.02 24.09 36.89L24.17 36.76Q24.24 36.64 24.27 36.46L24.29 36.29Q24.32 36.11 24.32 34.11L24.32 24.54Q24.32 22.54 24.29 22.33L24.27 22.13Q24.24 21.92 24.17 21.71L24.09 21.49Q24.02 21.28 23.9 21.08L23.78 20.87Q23.66 20.67 23.52 20.5L23.37 20.32Q23.22 20.15 23.05 20.03L22.89 19.9Q22.73 19.78 21.46 19.05L20.2 18.32Q18.94 17.59 18.78 17.53L18.61 17.46Q18.45 17.4 18.3 17.4L18.15 17.4Q18 17.4 17.97 17.42L17.94 17.44Q17.9 17.46 17.79 17.53L17.67 17.6Q17.55 17.66 17.48 17.79L17.4 17.92Q17.33 18.05 17.3 18.22L17.27 18.39Q17.25 18.57 17.25 20.57L17.25 30.14Q17.25 32.14 17.27 32.35L17.3 32.55Q17.33 32.76 17.4 32.97L17.48 33.19Q17.55 33.4 17.67 33.6L17.79 33.81Q17.9 34.01 18.05 34.18L18.2 34.36Q18.35 34.53 18.51 34.65L18.68 34.78Q18.84 34.9 20.1 35.63Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.95 37.06Q23.92 37.08 23.99 36.95L24.07 36.82Q24.14 36.69 24.17 36.52L24.19 36.34Q24.22 36.17 24.22 34.17L24.22 24.6Q24.22 22.6 24.19 22.39L24.17 22.19Q24.14 21.98 24.07 21.77L23.99 21.55Q23.92 21.34 23.8 21.13L23.68 20.93Q23.56 20.73 23.42 20.55L23.27 20.38Q23.12 20.21 22.96 20.08L22.79 19.96Q22.63 19.83 21.36 19.11L20.1 18.38Q18.84 17.65 18.68 17.58L18.51 17.52Q18.35 17.45 18.2 17.46L18.05 17.46Q17.9 17.46 17.94 17.44L17.97 17.42Q18 17.4 18.15 17.4L18.3 17.4Q18.45 17.4 18.61 17.46L18.78 17.53Q18.94 17.59 20.2 18.32L21.46 19.05Q22.73 19.78 22.89 19.9L23.05 20.03Q23.22 20.15 23.37 20.32L23.52 20.5Q23.66 20.67 23.78 20.87L23.9 21.08Q24.02 21.28 24.09 21.49L24.17 21.71Q24.24 21.92 24.27 22.13L24.29 22.33Q24.32 22.54 24.32 24.54L24.32 34.11Q24.32 36.11 24.29 36.29L24.27 36.46Q24.24 36.64 24.17 36.76L24.09 36.89Q24.02 37.02 23.98 37.04Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21.36 36.36Q22.63 37.09 22.79 37.15L22.96 37.22Q23.12 37.28 23.27 37.28L23.42 37.28Q23.56 37.28 23.68 37.21L23.8 37.14Q23.92 37.08 23.99 36.95L24.07 36.82Q24.14 36.69 24.17 36.52L24.19 36.34Q24.22 36.17 24.22 34.17L24.22 24.6Q24.22 22.6 24.19 22.39L24.17 22.19Q24.14 21.98 24.07 21.77L23.99 21.55Q23.92 21.34 23.8 21.13L23.68 20.93Q23.56 20.73 23.42 20.55L23.27 20.38Q23.12 20.21 22.96 20.08L22.79 19.96Q22.63 19.83 21.36 19.11L20.1 18.38Q18.84 17.65 18.68 17.58L18.51 17.52Q18.35 17.45 18.2 17.46L18.05 17.46Q17.9 17.46 17.79 17.53L17.67 17.6Q17.55 17.66 17.48 17.79L17.4 17.92Q17.33 18.05 17.3 18.22L17.27 18.39Q17.25 18.57 17.25 20.57L17.25 30.14Q17.25 32.14 17.27 32.35L17.3 32.55Q17.33 32.76 17.4 32.97L17.48 33.19Q17.55 33.4 17.67 33.6L17.79 33.81Q17.9 34.01 18.05 34.18L18.2 34.36Q18.35 34.53 18.51 34.65L18.68 34.78Q18.84 34.9 20.1 35.63Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M21.36 36.36Q22.63 37.09 22.79 37.15L22.96 37.22Q23.12 37.28 23.27 37.28L23.42 37.28Q23.56 37.28 23.68 37.21L23.8 37.14Q23.92 37.08 23.95 37.06L23.98 37.04Q24.02 37.02 24.09 36.89L24.17 36.76Q24.24 36.64 24.27 36.46L24.29 36.29Q24.32 36.11 24.32 34.11L24.32 24.54Q24.32 22.54 24.29 22.33L24.27 22.13Q24.24 21.92 24.17 21.71L24.09 21.49Q24.02 21.28 23.9 21.08L23.78 20.87Q23.66 20.67 23.52 20.5L23.37 20.32Q23.22 20.15 23.05 20.03L22.89 19.9Q22.73 19.78 21.46 19.05L20.2 18.32Q18.94 17.59 18.78 17.53L18.61 17.46Q18.45 17.4 18.3 17.4L18.15 17.4Q18 17.4 17.97 17.42L17.94 17.44Q17.9 17.46 17.79 17.53L17.67 17.6Q17.55 17.66 17.48 17.79L17.4 17.92Q17.33 18.05 17.3 18.22L17.27 18.39Q17.25 18.57 17.25 20.57L17.25 30.14Q17.25 32.14 17.27 32.35L17.3 32.55Q17.33 32.76 17.4 32.97L17.48 33.19Q17.55 33.4 17.67 33.6L17.79 33.81Q17.9 34.01 18.05 34.18L18.2 34.36Q18.35 34.53 18.51 34.65L18.68 34.78Q18.84 34.9 20.1 35.63Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.92 37.08L24.07 36.82Q24.14 36.69 24.17 36.52L24.19 36.34Q24.22 36.17 24.22 34.17L24.22 24.6Q24.22 22.6 24.19 22.39L24.17 22.19Q24.14 21.98 24.07 21.77L23.99 21.55Q23.92 21.34 23.8 21.13L23.68 20.93Q23.56 20.73 23.42 20.55L23.27 20.38Q23.12 20.21 22.96 20.08L22.79 19.96Q22.63 19.83 21.36 19.11L20.1 18.38Q18.84 17.65 18.68 17.58L18.51 17.52Q18.35 17.45 18.2 17.46L17.9 17.46"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export function IsoMail({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Mail"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M11.33 6.59Q12.9 5.68 14.63 6.68L38.08 20.22Q39.81 21.22 39.81 23.22L39.81 39.28Q39.81 41.28 38.24 42.19L36.67 43.09Q35.1 44 33.37 43L9.92 29.47Q8.19 28.47 8.19 26.47L8.19 10.4Q8.19 8.4 9.76 7.5Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.24 22.12Q39.81 21.22 39.81 23.22L39.81 39.28Q39.81 41.28 38.24 42.19L36.67 43.09Q35.1 44 35.1 42L35.1 23.94Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.92 9.4Q8.19 8.4 8.19 10.4L8.19 26.47Q8.19 28.47 9.92 29.47L33.37 43Q35.1 44 35.1 42L35.1 23.94Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.33 6.59Q12.9 5.68 14.63 6.68L38.08 20.22Q39.81 21.22 38.24 22.12L35.1 23.94L9.92 9.4Q8.19 8.4 9.76 7.5Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M9.54 9.18L21.65 27.82"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.65 27.82L35.1 23.94"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.33 6.59Q12.9 5.68 14.63 6.68L38.08 20.22Q39.81 21.22 39.81 23.22L39.81 39.28Q39.81 41.28 38.24 42.19L36.67 43.09Q35.1 44 33.37 43L9.92 29.47Q8.19 28.47 8.19 26.47L8.19 10.4Q8.19 8.4 9.76 7.5Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.1 23.94L39.37 21.47"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.1 23.94L8.6 8.64"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.1 23.94L35.1 43.52"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M11.33 6.59Q12.9 5.68 14.63 6.68L38.08 20.22Q39.81 21.22 39.81 23.22L39.81 39.28Q39.81 41.28 38.24 42.19L36.67 43.09Q35.1 44 33.37 43L9.92 29.47Q8.19 28.47 8.19 26.47L8.19 10.4Q8.19 8.4 9.76 7.5Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M38.24 22.12Q39.81 21.22 39.81 23.22L39.81 39.28Q39.81 41.28 38.24 42.19L36.67 43.09Q35.1 44 35.1 42L35.1 23.94Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.92 9.4Q8.19 8.4 8.19 10.4L8.19 26.47Q8.19 28.47 9.92 29.47L33.37 43Q35.1 44 35.1 42L35.1 23.94Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.33 6.59Q12.9 5.68 14.63 6.68L38.08 20.22Q39.81 21.22 38.24 22.12L35.1 23.94L9.92 9.4Q8.19 8.4 9.76 7.5Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M9.54 9.18L21.65 27.82"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.65 27.82L35.1 23.94"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11.33 6.59Q12.9 5.68 14.63 6.68L38.08 20.22Q39.81 21.22 39.81 23.22L39.81 39.28Q39.81 41.28 38.24 42.19L36.67 43.09Q35.1 44 33.37 43L9.92 29.47Q8.19 28.47 8.19 26.47L8.19 10.4Q8.19 8.4 9.76 7.5Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.1 23.94L39.37 21.47"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.1 23.94L8.6 8.64"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35.1 23.94L35.1 43.52"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export function IsoShield({ className, decorative = false }: IsoProps) {
  return (
    <span
      className={cn("inline-block h-12 w-12", className)}
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "Shield"}
      aria-hidden={decorative || undefined}
    >
      <span className="block h-full w-full dark:hidden" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M17.75 5.65Q16.02 4.65 14.29 5.65L12.43 6.72Q10.7 7.72 10.7 9.72L10.7 14.54Q10.7 16.54 10.72 17.21L10.74 17.88Q10.77 18.55 10.83 19.24L10.9 19.94Q10.97 20.63 11.08 21.34L11.2 22.05Q11.31 22.76 11.47 23.48L11.63 24.2Q11.78 24.92 11.99 25.65L12.19 26.38Q12.39 27.11 12.63 27.85L12.87 28.58Q13.12 29.32 13.4 30.05L13.68 30.78Q13.97 31.52 14.29 32.24L14.61 32.97Q14.93 33.7 15.29 34.42L15.65 35.13Q16.01 35.85 16.4 36.55L16.79 37.25Q17.19 37.96 17.61 38.64L18.03 39.32Q18.46 40 18.91 40.66L19.37 41.32Q19.82 41.98 19.98 42.17L20.13 42.36Q20.29 42.55 20.46 42.71L20.63 42.87Q20.8 43.03 20.98 43.16L21.16 43.28Q21.34 43.41 21.52 43.49L21.7 43.57Q21.88 43.65 22.05 43.69L22.22 43.73Q22.39 43.76 22.55 43.75L22.7 43.74Q22.86 43.73 23.31 43.6L23.77 43.46Q24.22 43.33 24.64 43.14L25.07 42.94Q25.49 42.75 27.23 41.75L29.08 40.68Q30.81 39.68 31.21 39.43L31.6 39.18Q31.99 38.93 32.35 38.63L32.71 38.33Q33.07 38.03 33.39 37.67L33.71 37.31Q34.03 36.96 34.32 36.55L34.6 36.15Q34.88 35.74 35.13 35.29L35.37 34.83Q35.61 34.38 35.81 33.88L36.01 33.38Q36.22 32.88 36.37 32.34L36.53 31.8Q36.69 31.26 36.8 30.68L36.92 30.11Q37.03 29.53 37.1 28.92L37.17 28.3Q37.23 27.69 37.26 27.05L37.28 26.4Q37.3 25.76 37.3 23.76L37.3 18.94Q37.3 16.94 35.57 15.94Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.23 41.75Q25.49 42.75 25.89 42.5L26.28 42.26Q26.67 42.01 27.03 41.7L27.39 41.4Q27.75 41.1 28.07 40.74L28.39 40.39Q28.71 40.03 29 39.62L29.28 39.22Q29.56 38.81 29.81 38.36L30.05 37.91Q30.29 37.45 30.49 36.95L30.69 36.45Q30.89 35.96 31.05 35.42L31.21 34.88Q31.37 34.33 31.48 33.76L31.59 33.18Q31.71 32.6 31.78 31.99L31.84 31.37Q31.91 30.76 31.94 30.12L31.96 29.48Q31.98 28.83 31.98 26.83L31.98 22.01Q31.98 20.01 33.71 19.01L35.57 17.94Q37.3 16.94 37.3 18.94L37.3 23.76Q37.3 25.76 37.28 26.4L37.26 27.05Q37.23 27.69 37.17 28.3L37.1 28.92Q37.03 29.53 36.92 30.11L36.8 30.68Q36.69 31.26 36.53 31.8L36.37 32.34Q36.22 32.88 36.01 33.38L35.81 33.88Q35.61 34.38 35.37 34.83L35.13 35.29Q34.88 35.74 34.6 36.15L34.32 36.55Q34.03 36.96 33.71 37.31L33.39 37.67Q33.07 38.03 32.71 38.33L32.35 38.63Q31.99 38.93 31.6 39.18L31.21 39.43Q30.81 39.68 29.08 40.68Z"
              fill="#a5002b"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.71 19.01Q31.98 20.01 30.25 19.01L12.43 8.72Q10.7 7.72 12.43 6.72L14.29 5.65Q16.02 4.65 17.75 5.65L35.57 15.94Q37.3 16.94 35.57 17.94Z"
              fill="#c70036"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.43 8.72Q10.7 7.72 10.7 9.72L10.7 14.54Q10.7 16.54 10.72 17.21L10.74 17.88Q10.77 18.55 10.83 19.24L10.9 19.94Q10.97 20.63 11.08 21.34L11.2 22.05Q11.31 22.76 11.47 23.48L11.63 24.2Q11.78 24.92 11.99 25.65L12.19 26.38Q12.39 27.11 12.63 27.85L12.87 28.58Q13.12 29.32 13.4 30.05L13.68 30.78Q13.97 31.52 14.29 32.24L14.61 32.97Q14.93 33.7 15.29 34.42L15.65 35.13Q16.01 35.85 16.4 36.55L16.79 37.25Q17.19 37.96 17.61 38.64L18.03 39.32Q18.46 40 18.91 40.66L19.37 41.32Q19.82 41.98 19.98 42.17L20.13 42.36Q20.29 42.55 20.46 42.71L20.63 42.87Q20.8 43.03 20.98 43.16L21.16 43.28Q21.34 43.41 21.52 43.49L21.7 43.57Q21.88 43.65 22.05 43.69L22.22 43.73Q22.39 43.76 22.55 43.75L22.7 43.74Q22.86 43.73 23.31 43.6L23.77 43.46Q24.22 43.33 24.64 43.14L25.07 42.94Q25.49 42.75 25.89 42.5L26.28 42.26Q26.67 42.01 27.03 41.7L27.39 41.4Q27.75 41.1 28.07 40.74L28.39 40.39Q28.71 40.03 29 39.62L29.28 39.22Q29.56 38.81 29.81 38.36L30.05 37.91Q30.29 37.45 30.49 36.95L30.69 36.45Q30.89 35.96 31.05 35.42L31.21 34.88Q31.37 34.33 31.48 33.76L31.59 33.18Q31.71 32.6 31.78 31.99L31.84 31.37Q31.91 30.76 31.94 30.12L31.96 29.48Q31.98 28.83 31.98 26.83L31.98 22.01Q31.98 20.01 30.25 19.01Z"
              fill="#870021"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M16.23 26.28L19.42 30.82"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.42 30.82L27.41 24.13"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.75 5.65Q16.02 4.65 14.29 5.65L12.43 6.72Q10.7 7.72 10.7 9.72L10.7 14.54Q10.7 16.54 10.72 17.21L10.74 17.88Q10.77 18.55 10.83 19.24L10.9 19.94Q10.97 20.63 11.08 21.34L11.2 22.05Q11.31 22.76 11.47 23.48L11.63 24.2Q11.78 24.92 11.99 25.65L12.19 26.38Q12.39 27.11 12.63 27.85L12.87 28.58Q13.12 29.32 13.4 30.05L13.68 30.78Q13.97 31.52 14.29 32.24L14.61 32.97Q14.93 33.7 15.29 34.42L15.65 35.13Q16.01 35.85 16.4 36.55L16.79 37.25Q17.19 37.96 17.61 38.64L18.03 39.32Q18.46 40 18.91 40.66L19.37 41.32Q19.82 41.98 19.98 42.17L20.13 42.36Q20.29 42.55 20.46 42.71L20.63 42.87Q20.8 43.03 20.98 43.16L21.16 43.28Q21.34 43.41 21.52 43.49L21.7 43.57Q21.88 43.65 22.05 43.69L22.22 43.73Q22.39 43.76 22.55 43.75L22.7 43.74Q22.86 43.73 23.31 43.6L23.77 43.46Q24.22 43.33 24.64 43.14L25.07 42.94Q25.49 42.75 27.23 41.75L29.08 40.68Q30.81 39.68 31.21 39.43L31.6 39.18Q31.99 38.93 32.35 38.63L32.71 38.33Q33.07 38.03 33.39 37.67L33.71 37.31Q34.03 36.96 34.32 36.55L34.6 36.15Q34.88 35.74 35.13 35.29L35.37 34.83Q35.61 34.38 35.81 33.88L36.01 33.38Q36.22 32.88 36.37 32.34L36.53 31.8Q36.69 31.26 36.8 30.68L36.92 30.11Q37.03 29.53 37.1 28.92L37.17 28.3Q37.23 27.69 37.26 27.05L37.28 26.4Q37.3 25.76 37.3 23.76L37.3 18.94Q37.3 16.94 35.57 15.94Z"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.55 20.26L36.87 17.19"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.76 42.58L26.37 42.2Q26.67 42.01 27.03 41.7L27.39 41.4Q27.75 41.1 28.07 40.74L28.39 40.39Q28.71 40.03 29 39.62L29.28 39.22Q29.56 38.81 29.81 38.36L30.05 37.91Q30.29 37.45 30.49 36.95L30.69 36.45Q30.89 35.96 31.05 35.42L31.21 34.88Q31.37 34.33 31.48 33.76L31.59 33.18Q31.71 32.6 31.78 31.99L31.84 31.37Q31.91 30.76 31.94 30.12L31.96 29.48Q31.98 28.83 31.98 26.83L31.98 22.01Q31.98 20.01 30.25 19.01L11.13 7.97"
            fill="none"
            stroke="#16161a"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="hidden h-full w-full dark:block" aria-hidden="true">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          stroke="none"
        >
          <g
            fill="none"
            stroke="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M17.75 5.65Q16.02 4.65 14.29 5.65L12.43 6.72Q10.7 7.72 10.7 9.72L10.7 14.54Q10.7 16.54 10.72 17.21L10.74 17.88Q10.77 18.55 10.83 19.24L10.9 19.94Q10.97 20.63 11.08 21.34L11.2 22.05Q11.31 22.76 11.47 23.48L11.63 24.2Q11.78 24.92 11.99 25.65L12.19 26.38Q12.39 27.11 12.63 27.85L12.87 28.58Q13.12 29.32 13.4 30.05L13.68 30.78Q13.97 31.52 14.29 32.24L14.61 32.97Q14.93 33.7 15.29 34.42L15.65 35.13Q16.01 35.85 16.4 36.55L16.79 37.25Q17.19 37.96 17.61 38.64L18.03 39.32Q18.46 40 18.91 40.66L19.37 41.32Q19.82 41.98 19.98 42.17L20.13 42.36Q20.29 42.55 20.46 42.71L20.63 42.87Q20.8 43.03 20.98 43.16L21.16 43.28Q21.34 43.41 21.52 43.49L21.7 43.57Q21.88 43.65 22.05 43.69L22.22 43.73Q22.39 43.76 22.55 43.75L22.7 43.74Q22.86 43.73 23.31 43.6L23.77 43.46Q24.22 43.33 24.64 43.14L25.07 42.94Q25.49 42.75 27.23 41.75L29.08 40.68Q30.81 39.68 31.21 39.43L31.6 39.18Q31.99 38.93 32.35 38.63L32.71 38.33Q33.07 38.03 33.39 37.67L33.71 37.31Q34.03 36.96 34.32 36.55L34.6 36.15Q34.88 35.74 35.13 35.29L35.37 34.83Q35.61 34.38 35.81 33.88L36.01 33.38Q36.22 32.88 36.37 32.34L36.53 31.8Q36.69 31.26 36.8 30.68L36.92 30.11Q37.03 29.53 37.1 28.92L37.17 28.3Q37.23 27.69 37.26 27.05L37.28 26.4Q37.3 25.76 37.3 23.76L37.3 18.94Q37.3 16.94 35.57 15.94Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27.23 41.75Q25.49 42.75 25.89 42.5L26.28 42.26Q26.67 42.01 27.03 41.7L27.39 41.4Q27.75 41.1 28.07 40.74L28.39 40.39Q28.71 40.03 29 39.62L29.28 39.22Q29.56 38.81 29.81 38.36L30.05 37.91Q30.29 37.45 30.49 36.95L30.69 36.45Q30.89 35.96 31.05 35.42L31.21 34.88Q31.37 34.33 31.48 33.76L31.59 33.18Q31.71 32.6 31.78 31.99L31.84 31.37Q31.91 30.76 31.94 30.12L31.96 29.48Q31.98 28.83 31.98 26.83L31.98 22.01Q31.98 20.01 33.71 19.01L35.57 17.94Q37.3 16.94 37.3 18.94L37.3 23.76Q37.3 25.76 37.28 26.4L37.26 27.05Q37.23 27.69 37.17 28.3L37.1 28.92Q37.03 29.53 36.92 30.11L36.8 30.68Q36.69 31.26 36.53 31.8L36.37 32.34Q36.22 32.88 36.01 33.38L35.81 33.88Q35.61 34.38 35.37 34.83L35.13 35.29Q34.88 35.74 34.6 36.15L34.32 36.55Q34.03 36.96 33.71 37.31L33.39 37.67Q33.07 38.03 32.71 38.33L32.35 38.63Q31.99 38.93 31.6 39.18L31.21 39.43Q30.81 39.68 29.08 40.68Z"
              fill="#bb163a"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M33.71 19.01Q31.98 20.01 30.25 19.01L12.43 8.72Q10.7 7.72 12.43 6.72L14.29 5.65Q16.02 4.65 17.75 5.65L35.57 15.94Q37.3 16.94 35.57 17.94Z"
              fill="#e11d48"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.43 8.72Q10.7 7.72 10.7 9.72L10.7 14.54Q10.7 16.54 10.72 17.21L10.74 17.88Q10.77 18.55 10.83 19.24L10.9 19.94Q10.97 20.63 11.08 21.34L11.2 22.05Q11.31 22.76 11.47 23.48L11.63 24.2Q11.78 24.92 11.99 25.65L12.19 26.38Q12.39 27.11 12.63 27.85L12.87 28.58Q13.12 29.32 13.4 30.05L13.68 30.78Q13.97 31.52 14.29 32.24L14.61 32.97Q14.93 33.7 15.29 34.42L15.65 35.13Q16.01 35.85 16.4 36.55L16.79 37.25Q17.19 37.96 17.61 38.64L18.03 39.32Q18.46 40 18.91 40.66L19.37 41.32Q19.82 41.98 19.98 42.17L20.13 42.36Q20.29 42.55 20.46 42.71L20.63 42.87Q20.8 43.03 20.98 43.16L21.16 43.28Q21.34 43.41 21.52 43.49L21.7 43.57Q21.88 43.65 22.05 43.69L22.22 43.73Q22.39 43.76 22.55 43.75L22.7 43.74Q22.86 43.73 23.31 43.6L23.77 43.46Q24.22 43.33 24.64 43.14L25.07 42.94Q25.49 42.75 25.89 42.5L26.28 42.26Q26.67 42.01 27.03 41.7L27.39 41.4Q27.75 41.1 28.07 40.74L28.39 40.39Q28.71 40.03 29 39.62L29.28 39.22Q29.56 38.81 29.81 38.36L30.05 37.91Q30.29 37.45 30.49 36.95L30.69 36.45Q30.89 35.96 31.05 35.42L31.21 34.88Q31.37 34.33 31.48 33.76L31.59 33.18Q31.71 32.6 31.78 31.99L31.84 31.37Q31.91 30.76 31.94 30.12L31.96 29.48Q31.98 28.83 31.98 26.83L31.98 22.01Q31.98 20.01 30.25 19.01Z"
              fill="#99102e"
              stroke="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <path
            d="M16.23 26.28L19.42 30.82"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.42 30.82L27.41 24.13"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.75 5.65Q16.02 4.65 14.29 5.65L12.43 6.72Q10.7 7.72 10.7 9.72L10.7 14.54Q10.7 16.54 10.72 17.21L10.74 17.88Q10.77 18.55 10.83 19.24L10.9 19.94Q10.97 20.63 11.08 21.34L11.2 22.05Q11.31 22.76 11.47 23.48L11.63 24.2Q11.78 24.92 11.99 25.65L12.19 26.38Q12.39 27.11 12.63 27.85L12.87 28.58Q13.12 29.32 13.4 30.05L13.68 30.78Q13.97 31.52 14.29 32.24L14.61 32.97Q14.93 33.7 15.29 34.42L15.65 35.13Q16.01 35.85 16.4 36.55L16.79 37.25Q17.19 37.96 17.61 38.64L18.03 39.32Q18.46 40 18.91 40.66L19.37 41.32Q19.82 41.98 19.98 42.17L20.13 42.36Q20.29 42.55 20.46 42.71L20.63 42.87Q20.8 43.03 20.98 43.16L21.16 43.28Q21.34 43.41 21.52 43.49L21.7 43.57Q21.88 43.65 22.05 43.69L22.22 43.73Q22.39 43.76 22.55 43.75L22.7 43.74Q22.86 43.73 23.31 43.6L23.77 43.46Q24.22 43.33 24.64 43.14L25.07 42.94Q25.49 42.75 27.23 41.75L29.08 40.68Q30.81 39.68 31.21 39.43L31.6 39.18Q31.99 38.93 32.35 38.63L32.71 38.33Q33.07 38.03 33.39 37.67L33.71 37.31Q34.03 36.96 34.32 36.55L34.6 36.15Q34.88 35.74 35.13 35.29L35.37 34.83Q35.61 34.38 35.81 33.88L36.01 33.38Q36.22 32.88 36.37 32.34L36.53 31.8Q36.69 31.26 36.8 30.68L36.92 30.11Q37.03 29.53 37.1 28.92L37.17 28.3Q37.23 27.69 37.26 27.05L37.28 26.4Q37.3 25.76 37.3 23.76L37.3 18.94Q37.3 16.94 35.57 15.94Z"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.55 20.26L36.87 17.19"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25.76 42.58L26.37 42.2Q26.67 42.01 27.03 41.7L27.39 41.4Q27.75 41.1 28.07 40.74L28.39 40.39Q28.71 40.03 29 39.62L29.28 39.22Q29.56 38.81 29.81 38.36L30.05 37.91Q30.29 37.45 30.49 36.95L30.69 36.45Q30.89 35.96 31.05 35.42L31.21 34.88Q31.37 34.33 31.48 33.76L31.59 33.18Q31.71 32.6 31.78 31.99L31.84 31.37Q31.91 30.76 31.94 30.12L31.96 29.48Q31.98 28.83 31.98 26.83L31.98 22.01Q31.98 20.01 30.25 19.01L11.13 7.97"
            fill="none"
            stroke="#f7f4ee"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}
