import Moralis from "moralis"
import {useMoralis} from "react-moralis"


function App() {

  const {authenticate, isAuthenticated, user} = useMoralis()

  if(!isAuthenticated){
    return(
      <div>
          <button onClick={authenticate}>Log in</button>
      </div>
    )
  }
  return(
    <div>
      <p>{user.getUsername()}</p>
      <p>{user.get("ethAddress")}</p>
    </div>
  )

}

export default App;
