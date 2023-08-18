import "./List.css"

export const List = (props) => {
  const { title } = props

  return (
     <li><a href={`#${title}`}>{title}</a></li> 
  )
}

export default List
