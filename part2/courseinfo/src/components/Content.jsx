import Part from './Part.jsx'

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => (
                    <Part key={part.id} name={part.name} exercises={part.exercises}/>
            ))}
        </>
    )
}
export default Content