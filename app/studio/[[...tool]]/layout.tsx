export default function StudioLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {props.children}
      </body>
    </html>
  )
}