export default function Row(props: React.PropsWithChildren) {
  return <div style={{display: "flex", flexDirection: "row", padding: "0 10px", gap: "5px", flexWrap: "wrap"}}>{props.children}</div>
}