interface PolygonProps {
  width?: number;
  height?: number;
  fill?: string;
  className?: string;
}

const Polygon = ({
  width = 8,
  height = 9,
  fill = '#111314',
  className,
}: PolygonProps) => (
  <svg
      width={width}
      height={height}
      viewBox="0 0 8 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
    <path
        id="Polygon 1"
        d="M7.5 4.5L0.75 8.39711L0.75 0.602885L7.5 4.5Z"
        fill={fill}
      />
  </svg>
  );

export default Polygon;
