function Box({
  color,
  className,
  style,
  children,
}: {
  color?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}) {
  return (
    <div className={className} style={{ color, ...style }}>
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <main>
      <Box color="pink">Hello World</Box>
    </main>
  )
}
