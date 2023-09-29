import Box from "./Box"

function App(){

    let users = [
        {
            id : 1,
            firstName : 'milad',
            lastName : 'bahrami',
            age : 26
        },
        {
            id : 2,
            firstName : 'bahare',
            lastName : 'sedigh',
            age : 16
        },
        {
            id : 3,
            firstName : 'mina',
            lastName : 'salami',
            age : 19
        },
        {
            id : 4,
            firstName : 'amir',
            lastName : 'kazemi',
            age : 28
        }
    ]
    return(
        <>
        {users.map( user => <Box key={user.id} {...user} />)}
        </>
    )
}
export default App